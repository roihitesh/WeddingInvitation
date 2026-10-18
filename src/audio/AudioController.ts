/**
 * Dual-Channel HTML5 Audio Controller for Hitesh & Shivanee Wedding Soundscape
 *
 * Provides:
 * - Dual-channel seamless crossfading (Channel A & Channel B)
 * - Safe volume handling for both desktop & mobile devices (iOS / Android)
 * - iOS WebKit synchronous unlock & priming on user gestures (touchend / click)
 * - Browser Autoplay policy detection (NotAllowedError)
 * - Visibility API listener to gently duck audio when tab is backgrounded
 * - SSR & Vitest/Jest friendly guards
 */

export interface AudioControllerOptions {
  defaultVolume?: number;
  crossfadeDurationMs?: number;
  onBlockedChange?: (isBlocked: boolean) => void;
  onStateChange?: (isPlaying: boolean) => void;
  onError?: (error: Error) => void;
}

export class AudioController {
  private channelA: HTMLAudioElement | null = null;
  private channelB: HTMLAudioElement | null = null;
  private activeChannel: 'A' | 'B' = 'A';
  private currentSrc: string | null = null;
  private isPlaying: boolean = false;
  private userVolume: number = 0.25;
  private isMuted: boolean = false;
  private isTabDucked: boolean = false;
  private crossfadeDurationMs: number = 2000;
  private fadeIntervalId: ReturnType<typeof setInterval> | null = null;
  private isBlocked: boolean = false;

  private onBlockedChange?: (isBlocked: boolean) => void;
  private onStateChange?: (isPlaying: boolean) => void;
  private onError?: (error: Error) => void;

  constructor(options: AudioControllerOptions = {}) {
    this.userVolume = options.defaultVolume !== undefined ? options.defaultVolume : 0.25;
    this.crossfadeDurationMs = options.crossfadeDurationMs ?? 2000;
    this.onBlockedChange = options.onBlockedChange;
    this.onStateChange = options.onStateChange;
    this.onError = options.onError;

    this.initAudioChannels();
    this.setupVisibilityListener();
  }

  private initAudioChannels() {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') {
      return;
    }

    try {
      this.channelA = new Audio();
      this.channelA.preload = 'auto';
      this.channelA.loop = true;
      this.channelA.setAttribute('playsinline', 'true');
      this.channelA.setAttribute('webkit-playsinline', 'true');
      try {
        this.channelA.volume = this.getEffectiveVolume();
      } catch {}

      this.channelB = new Audio();
      this.channelB.preload = 'auto';
      this.channelB.loop = true;
      this.channelB.setAttribute('playsinline', 'true');
      this.channelB.setAttribute('webkit-playsinline', 'true');
      try {
        this.channelB.volume = 0;
      } catch {}
    } catch (e) {
      console.warn('[AudioController] Audio initialization failed:', e);
    }
  }

  private setupVisibilityListener() {
    if (typeof document === 'undefined') return;

    const handleVisibility = () => {
      this.isTabDucked = document.hidden;
      this.updateActiveVolume();
    };

    document.addEventListener('visibilitychange', handleVisibility);
  }

  private getEffectiveVolume(): number {
    if (this.isMuted) return 0;
    const base = Math.max(0, Math.min(1, this.userVolume));
    return this.isTabDucked ? base * 0.25 : base;
  }

  private updateActiveVolume() {
    if (this.fadeIntervalId) return; // Allow active crossfade to manage channel volumes
    const active = this.getActiveElement();
    if (active) {
      try {
        active.volume = this.getEffectiveVolume();
        active.muted = this.isMuted;
      } catch {}
    }
  }

  private getActiveElement(): HTMLAudioElement | null {
    return this.activeChannel === 'A' ? this.channelA : this.channelB;
  }

  private getInactiveElement(): HTMLAudioElement | null {
    return this.activeChannel === 'A' ? this.channelB : this.channelA;
  }

  /**
   * Synchronously unlock/prime both audio channels on direct user interaction (click/touchend).
   * Essential for mobile iOS Safari and Chrome.
   */
  public unlockAndPlay(src?: string): Promise<void> {
    const targetSrc = src || this.currentSrc;
    if (!targetSrc) return Promise.resolve();

    this.currentSrc = targetSrc;
    const active = this.getActiveElement();
    const inactive = this.getInactiveElement();

    if (!active) return Promise.resolve();

    // Ensure source is assigned
    if (!active.src || !active.src.endsWith(targetSrc)) {
      active.src = targetSrc;
      active.currentTime = 0;
    }

    active.loop = true;
    const effectiveVol = this.getEffectiveVolume();
    try {
      active.volume = effectiveVol;
      active.muted = this.isMuted;
    } catch {}

    // Prime the secondary channel synchronously so future crossfades work without user gestures
    if (inactive && (!inactive.src || inactive.src === '')) {
      try {
        inactive.src = targetSrc;
        inactive.currentTime = 0;
        inactive.load();
      } catch {}
    }

    return active
      .play()
      .then(() => {
        this.isPlaying = true;
        this.setBlocked(false);
        this.onStateChange?.(true);
      })
      .catch((err) => {
        if (err?.name === 'NotAllowedError') {
          this.setBlocked(true);
        } else {
          console.warn('[AudioController] Direct play error:', err);
        }
      });
  }

  /**
   * Play a track URL with optional crossfade.
   */
  public async play(src: string, options: { force?: boolean; crossfade?: boolean } = {}): Promise<void> {
    const { force = false, crossfade = true } = options;

    if (!src) return;

    // If already playing the same source and not forced, keep playing
    if (this.currentSrc === src && this.isPlaying && !force) {
      return;
    }

    const previousSrc = this.currentSrc;
    this.currentSrc = src;

    const outgoing = this.getActiveElement();
    const incoming = this.getInactiveElement();

    if (!incoming || !outgoing) {
      // In non-audio environments, just track state
      this.isPlaying = true;
      this.onStateChange?.(true);
      return;
    }

    // Stop any existing crossfade in progress
    if (this.fadeIntervalId) {
      clearInterval(this.fadeIntervalId);
      this.fadeIntervalId = null;
    }

    const effectiveVol = this.getEffectiveVolume();

    // Set next active channel immediately so getActiveElement() returns the correct element
    this.activeChannel = this.activeChannel === 'A' ? 'B' : 'A';

    // If no previous audio was playing, start incoming directly
    if (!previousSrc || !this.isPlaying || !crossfade) {
      outgoing.pause();
      outgoing.currentTime = 0;

      incoming.src = src;
      incoming.currentTime = 0;
      try {
        incoming.volume = effectiveVol;
        incoming.muted = this.isMuted;
      } catch {}
      incoming.loop = true;

      try {
        await incoming.play();
        this.isPlaying = true;
        this.setBlocked(false);
        this.onStateChange?.(true);
      } catch (err: any) {
        if (err?.name === 'NotAllowedError') {
          this.setBlocked(true);
        } else {
          console.warn('[AudioController] Playback start error:', err);
          this.onError?.(err);
        }
      }
      return;
    }

    // Dual-channel Crossfade
    incoming.src = src;
    incoming.currentTime = 0;
    try {
      incoming.volume = 0;
      incoming.muted = this.isMuted;
    } catch {}
    incoming.loop = true;

    try {
      await incoming.play();
      this.isPlaying = true;
      this.setBlocked(false);
      this.onStateChange?.(true);

      const duration = this.crossfadeDurationMs;
      const stepTime = 50; // ms
      const steps = Math.max(1, Math.floor(duration / stepTime));
      let currentStep = 0;
      const startOutVol = outgoing.volume;

      this.fadeIntervalId = setInterval(() => {
        currentStep++;
        const progress = Math.min(1, currentStep / steps);
        const currentTargetVol = this.getEffectiveVolume();

        const outFactor = 1 - progress;
        const inFactor = progress;

        try {
          outgoing.volume = Math.max(0, Math.min(1, startOutVol * outFactor));
          incoming.volume = Math.max(0, Math.min(1, currentTargetVol * inFactor));
        } catch {}

        if (progress >= 1) {
          if (this.fadeIntervalId) {
            clearInterval(this.fadeIntervalId);
            this.fadeIntervalId = null;
          }
          outgoing.pause();
          outgoing.currentTime = 0;
          try {
            incoming.volume = currentTargetVol;
          } catch {}
        }
      }, stepTime);
    } catch (err: any) {
      if (err?.name === 'NotAllowedError') {
        this.setBlocked(true);
      } else {
        console.warn('[AudioController] Crossfade play error:', err);
        this.onError?.(err);
      }
    }
  }

  public pause(): void {
    if (this.fadeIntervalId) {
      clearInterval(this.fadeIntervalId);
      this.fadeIntervalId = null;
    }

    const active = this.getActiveElement();
    if (active) {
      active.pause();
    }
    this.isPlaying = false;
    this.onStateChange?.(false);
  }

  public resume(): Promise<void> {
    return this.unlockAndPlay();
  }

  public setVolume(volume: number): void {
    this.userVolume = Math.max(0, Math.min(1, volume));
    this.updateActiveVolume();
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    this.updateActiveVolume();
  }

  public unlock(): Promise<void> {
    return this.unlockAndPlay();
  }

  public isCurrentlyPlaying(): boolean {
    return this.isPlaying;
  }

  public isAutoplayBlocked(): boolean {
    return this.isBlocked;
  }

  public getCurrentSrc(): string | null {
    return this.currentSrc;
  }

  public getUserVolume(): number {
    return this.userVolume;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  private setBlocked(blocked: boolean) {
    if (this.isBlocked !== blocked) {
      this.isBlocked = blocked;
      this.onBlockedChange?.(blocked);
    }
  }

  public destroy(): void {
    if (this.fadeIntervalId) {
      clearInterval(this.fadeIntervalId);
      this.fadeIntervalId = null;
    }
    if (this.channelA) {
      this.channelA.pause();
      this.channelA.src = '';
    }
    if (this.channelB) {
      this.channelB.pause();
      this.channelB.src = '';
    }
  }
}
