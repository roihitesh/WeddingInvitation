/**
 * Types for Background Music System — Hitesh & Shivanee Wedding Website
 */

export interface MusicTrack {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  originalSong: string;
  artistOrCover: string;
  mood: {
    en: string;
    hi: string;
  };
  filename: string;
  src: string;
  license: string;
  pageAssociation?: string;
  sceneAssociation?: string;
}

export interface MusicPreferences {
  enabled: boolean;
  volume: number; // 0.0 to 1.0
  muted: boolean;
  autoChange: boolean;
  sceneBased: boolean;
}

export interface MusicContextType {
  currentTrack: MusicTrack | null;
  isPlaying: boolean;
  isMuted: boolean;
  isBlocked: boolean;
  volume: number;
  autoChange: boolean;
  sceneBased: boolean;
  activePage: string;
  tracks: MusicTrack[];
  playTrack: (trackId: string, options?: { force?: boolean }) => Promise<void>;
  togglePlay: () => Promise<void>;
  toggleMute: () => void;
  setVolume: (vol: number) => void;
  setAutoChange: (enabled: boolean) => void;
  setSceneBased: (enabled: boolean) => void;
  notifyPageChanged: (page: string, immediate?: boolean) => void;
  notifySceneChanged: (scene: string) => void;
  dismissBlockedNotice: () => void;
  unlockAndPlay: (trackId?: string) => Promise<void>;
}
