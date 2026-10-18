import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { MusicContextType, MusicTrack, MusicPreferences } from '../types/music';
import { weddingMusicTracks, pageToTrackMap, sceneToTrackMap } from '../config/music.config';
import { AudioController } from '../audio/AudioController';

const PREF_ENABLED_KEY = 'wedding_music_enabled';
const PREF_VOLUME_KEY = 'wedding_music_volume';
const PREF_MUTED_KEY = 'wedding_music_muted';
const PREF_AUTO_CHANGE_KEY = 'wedding_music_auto_change';
const PREF_SCENE_BASED_KEY = 'wedding_music_scene_based';

const DEFAULT_VOLUME = 0.25;

const initialPreferences: MusicPreferences = {
  enabled: true,
  volume: DEFAULT_VOLUME,
  muted: false,
  autoChange: true,
  sceneBased: true,
};

function loadStoredPreferences(): MusicPreferences {
  if (typeof window === 'undefined') return initialPreferences;
  try {
    const enabledRaw = localStorage.getItem(PREF_ENABLED_KEY);
    const volumeRaw = localStorage.getItem(PREF_VOLUME_KEY);
    const mutedRaw = localStorage.getItem(PREF_MUTED_KEY);
    const autoChangeRaw = localStorage.getItem(PREF_AUTO_CHANGE_KEY);
    const sceneBasedRaw = localStorage.getItem(PREF_SCENE_BASED_KEY);

    return {
      enabled: enabledRaw !== null ? enabledRaw === 'true' : initialPreferences.enabled,
      volume: volumeRaw !== null ? Number(volumeRaw) : initialPreferences.volume,
      muted: mutedRaw !== null ? mutedRaw === 'true' : initialPreferences.muted,
      autoChange: autoChangeRaw !== null ? autoChangeRaw === 'true' : initialPreferences.autoChange,
      sceneBased: sceneBasedRaw !== null ? sceneBasedRaw === 'true' : initialPreferences.sceneBased,
    };
  } catch {
    return initialPreferences;
  }
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const WeddingMusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<MusicPreferences>(loadStoredPreferences);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>('opening');

  const controllerRef = useRef<AudioController | null>(null);
  const preferencesRef = useRef(preferences);
  preferencesRef.current = preferences;
  const activePageRef = useRef(activePage);
  activePageRef.current = activePage;
  const currentTrackRef = useRef(currentTrack);
  currentTrackRef.current = currentTrack;

  // Direct track play
  const playTrack = useCallback(
    async (trackId: string, options: { force?: boolean } = {}) => {
      const track = weddingMusicTracks.find((t) => t.id === trackId);
      if (!track) return;

      setCurrentTrack(track);
      setPreferences((prev) => {
        if (!prev.enabled) {
          try {
            localStorage.setItem(PREF_ENABLED_KEY, 'true');
          } catch {}
          return { ...prev, enabled: true };
        }
        return prev;
      });

      if (controllerRef.current) {
        await controllerRef.current.play(track.src, {
          force: options.force,
          crossfade: true,
        });
      }
    },
    []
  );

  // Synchronous unlock & play for mobile touch/click gestures
  const unlockAndPlay = useCallback(
    async (trackId?: string) => {
      if (!preferencesRef.current.enabled) {
        setPreferences((prev) => {
          try {
            localStorage.setItem(PREF_ENABLED_KEY, 'true');
          } catch {}
          return { ...prev, enabled: true };
        });
      }

      const chosenTrackId = trackId || currentTrackRef.current?.id || pageToTrackMap[activePageRef.current] || 'royal-shehnai';
      const track = weddingMusicTracks.find((t) => t.id === chosenTrackId);
      if (track) {
        setCurrentTrack(track);
        if (controllerRef.current) {
          await controllerRef.current.unlockAndPlay(track.src);
        }
      }
    },
    []
  );

  // Initialize AudioController once
  useEffect(() => {
    const controller = new AudioController({
      defaultVolume: preferences.volume,
      crossfadeDurationMs: 2000,
      onBlockedChange: (blocked) => {
        setIsBlocked(blocked);
      },
      onStateChange: (playing) => {
        setIsPlaying(playing);
      },
    });

    controller.setMuted(preferences.muted);
    controller.setVolume(preferences.volume);
    controllerRef.current = controller;

    // Direct user gesture listener for mobile WebKit & Chrome
    const handleFirstGesture = () => {
      if (controllerRef.current && preferencesRef.current.enabled) {
        unlockAndPlay();
      }
    };

    window.addEventListener('touchend', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('pointerup', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('touchend', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('pointerup', handleFirstGesture);
      controller.destroy();
    };
  }, [unlockAndPlay]);

  // Update volume in controller and localStorage
  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    setPreferences((prev) => {
      const next = { ...prev, volume: clamped };
      try {
        localStorage.setItem(PREF_VOLUME_KEY, String(clamped));
      } catch {}
      return next;
    });
    controllerRef.current?.setVolume(clamped);
  }, []);

  // Toggle mute
  const toggleMute = useCallback(() => {
    setPreferences((prev) => {
      const nextMuted = !prev.muted;
      const next = { ...prev, muted: nextMuted };
      try {
        localStorage.setItem(PREF_MUTED_KEY, String(nextMuted));
      } catch {}
      controllerRef.current?.setMuted(nextMuted);
      return next;
    });
  }, []);

  // Toggle autoChange
  const setAutoChange = useCallback((enabled: boolean) => {
    setPreferences((prev) => {
      const next = { ...prev, autoChange: enabled };
      try {
        localStorage.setItem(PREF_AUTO_CHANGE_KEY, String(enabled));
      } catch {}
      return next;
    });
  }, []);

  // Toggle sceneBased
  const setSceneBased = useCallback((enabled: boolean) => {
    setPreferences((prev) => {
      const next = { ...prev, sceneBased: enabled };
      try {
        localStorage.setItem(PREF_SCENE_BASED_KEY, String(enabled));
      } catch {}
      return next;
    });
  }, []);

  // Play / Pause toggle
  const togglePlay = useCallback(async () => {
    if (isPlaying) {
      controllerRef.current?.pause();
      setPreferences((prev) => {
        try {
          localStorage.setItem(PREF_ENABLED_KEY, 'false');
        } catch {}
        return { ...prev, enabled: false };
      });
      setIsPlaying(false);
    } else {
      setPreferences((prev) => {
        try {
          localStorage.setItem(PREF_ENABLED_KEY, 'true');
        } catch {}
        return { ...prev, enabled: true };
      });

      if (currentTrack) {
        await controllerRef.current?.unlockAndPlay(currentTrack.src);
      } else {
        const defaultTrackId = pageToTrackMap[activePage] || 'royal-shehnai';
        await unlockAndPlay(defaultTrackId);
      }
    }
  }, [isPlaying, currentTrack, activePage, unlockAndPlay]);

  // Page changed notification
  const notifyPageChanged = useCallback(
    (page: string) => {
      setActivePage(page);

      if (!preferencesRef.current.enabled) {
        return;
      }

      if (!preferencesRef.current.autoChange) {
        return;
      }

      const targetTrackId = pageToTrackMap[page];
      if (targetTrackId && targetTrackId !== currentTrack?.id) {
        playTrack(targetTrackId);
      }
    },
    [currentTrack, playTrack]
  );

  // Scene changed notification (e.g. Haldi ceremony or story milestone)
  const notifySceneChanged = useCallback(
    (scene: string) => {
      if (!preferencesRef.current.enabled || !preferencesRef.current.sceneBased) {
        return;
      }

      const targetTrackId = sceneToTrackMap[scene];
      if (targetTrackId && targetTrackId !== currentTrack?.id) {
        playTrack(targetTrackId);
      }
    },
    [currentTrack, playTrack]
  );

  const dismissBlockedNotice = useCallback(() => {
    setIsBlocked(false);
  }, []);

  const value: MusicContextType = {
    currentTrack,
    isPlaying,
    isMuted: preferences.muted,
    isBlocked,
    volume: preferences.volume,
    autoChange: preferences.autoChange,
    sceneBased: preferences.sceneBased,
    activePage,
    tracks: weddingMusicTracks,
    playTrack,
    togglePlay,
    toggleMute,
    setVolume,
    setAutoChange,
    setSceneBased,
    notifyPageChanged,
    notifySceneChanged,
    dismissBlockedNotice,
    unlockAndPlay,
  };

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
};

export const useWeddingMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useWeddingMusic must be used within a WeddingMusicProvider');
  }
  return context;
};
