import React, { useState } from 'react';
import { useWeddingMusic } from '../../context/WeddingMusicContext';
import { musicUiLabels } from '../../config/music.config';
import './FloatingMusicControl.css';

interface FloatingMusicControlProps {
  language: 'en' | 'hi';
}

export const FloatingMusicControl: React.FC<FloatingMusicControlProps> = ({ language }) => {
  const {
    currentTrack,
    isPlaying,
    isMuted,
    isBlocked,
    volume,
    autoChange,
    sceneBased,
    tracks,
    playTrack,
    togglePlay,
    toggleMute,
    setVolume,
    setAutoChange,
    setSceneBased,
    dismissBlockedNotice,
    unlockAndPlay,
  } = useWeddingMusic();

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const labels = musicUiLabels;
  const currentTitle = currentTrack?.title[language] || (language === 'hi' ? 'शाही विवाह संगीत' : 'Royal Shehnai');
  const originalSong = currentTrack?.originalSong || 'Traditional Indian Classical';
  const currentMood = currentTrack?.mood[language] || '';

  const handleTogglePanel = () => {
    if (isBlocked || !isPlaying) {
      unlockAndPlay();
    }
    setIsPanelOpen((prev) => !prev);
    if (isBlocked) {
      dismissBlockedNotice();
    }
  };

  const handleBannerClick = () => {
    dismissBlockedNotice();
    unlockAndPlay();
  };

  return (
    <div className="music-control-wrapper">
      {/* Autoplay prompt banner if browser blocked audio */}
      {isBlocked && (
        <div className="music-autoplay-prompt" onClick={handleBannerClick} role="alert">
          <span className="music-autoplay-icon">🎶</span>
          <span className="music-autoplay-text">{labels.blockedNotice[language]}</span>
          <button
            className="music-autoplay-close"
            onClick={(e) => {
              e.stopPropagation();
              dismissBlockedNotice();
            }}
            aria-label="Dismiss notice"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Action Pill */}
      <button
        className="music-floating-btn"
        onClick={handleTogglePanel}
        aria-label={`${labels.musicControlTitle[language]} - ${isPlaying ? labels.pauseMusic[language] : labels.playMusic[language]}`}
        title={labels.musicControlTitle[language]}
      >
        <div className={`music-wave-bars ${isPlaying && !isMuted ? 'playing' : ''}`}>
          <span className="music-wave-bar" />
          <span className="music-wave-bar" />
          <span className="music-wave-bar" />
          <span className="music-wave-bar" />
        </div>

        <div className="music-btn-label">
          <span className="music-btn-status">
            {isMuted
              ? labels.mute[language]
              : isPlaying
              ? labels.nowPlaying[language]
              : labels.pauseMusic[language]}
          </span>
          <span className="music-btn-song">{currentTitle}</span>
        </div>

        <span className={`music-expand-icon ${isPanelOpen ? 'open' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
      </button>

      {/* Modal Backdrop on mobile */}
      {isPanelOpen && <div className="music-panel-backdrop" onClick={() => setIsPanelOpen(false)} />}

      {/* Settings / Music Drawer Panel */}
      {isPanelOpen && (
        <aside className="music-panel" aria-label={labels.musicControlTitle[language]}>
          <div className="music-panel-header">
            <div className="music-panel-header-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span>{labels.musicControlTitle[language]}</span>
            </div>
            <button
              className="music-panel-close-btn"
              onClick={() => setIsPanelOpen(false)}
              aria-label={labels.closePanel[language]}
            >
              ×
            </button>
          </div>

          <div className="music-panel-body">
            {/* Now Playing Card */}
            <div className="music-now-playing-card">
              <div className="music-now-playing-header">
                <span>{labels.nowPlaying[language]}</span>
                <span className={`music-now-playing-badge ${isPlaying && !isMuted ? 'live' : ''}`}>
                  {isPlaying && !isMuted ? '● Playing' : '❚❚ Paused'}
                </span>
              </div>
              <h4 className="music-track-name">{currentTitle}</h4>
              <p className="music-track-artist">{originalSong}</p>
              {currentMood && <span className="music-track-mood">{currentMood}</span>}

              {/* Main Playback Controls */}
              <div className="music-playback-controls">
                <button
                  className="music-ctrl-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? labels.unmute[language] : labels.mute[language]}
                  title={isMuted ? labels.unmute[language] : labels.mute[language]}
                >
                  {isMuted ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>

                <button
                  className="music-ctrl-btn primary"
                  onClick={togglePlay}
                  aria-label={isPlaying ? labels.pauseMusic[language] : labels.playMusic[language]}
                  title={isPlaying ? labels.pauseMusic[language] : labels.playMusic[language]}
                >
                  {isPlaying ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Volume Slider */}
              <div className="music-volume-row">
                <span
                  className="music-volume-icon"
                  onClick={toggleMute}
                  title={isMuted ? labels.unmute[language] : labels.mute[language]}
                >
                  {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    if (isMuted) toggleMute();
                    setVolume(parseFloat(e.target.value));
                  }}
                  className="music-volume-slider"
                  aria-label={labels.volume[language]}
                />
                <span className="music-volume-percent">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>
            </div>

            {/* Smart Toggles */}
            <div className="music-toggles-section">
              <label className="music-toggle-row">
                <div className="music-toggle-info">
                  <span className="music-toggle-title">{labels.autoTrackChange[language]}</span>
                  <span className="music-toggle-desc">{labels.autoTrackChangeDesc[language]}</span>
                </div>
                <div className="music-switch">
                  <input
                    type="checkbox"
                    checked={autoChange}
                    onChange={(e) => setAutoChange(e.target.checked)}
                  />
                  <span className="music-slider-round" />
                </div>
              </label>

              <label className="music-toggle-row">
                <div className="music-toggle-info">
                  <span className="music-toggle-title">{labels.sceneBasedMusic[language]}</span>
                  <span className="music-toggle-desc">{labels.sceneBasedMusicDesc[language]}</span>
                </div>
                <div className="music-switch">
                  <input
                    type="checkbox"
                    checked={sceneBased}
                    onChange={(e) => setSceneBased(e.target.checked)}
                  />
                  <span className="music-slider-round" />
                </div>
              </label>
            </div>

            {/* Melody Picker List */}
            <div className="music-picker-section">
              <h5 className="music-picker-title">{labels.selectMelody[language]}</h5>
              <div className="music-picker-list">
                {tracks.map((track) => {
                  const isCurrent = currentTrack?.id === track.id;
                  return (
                    <button
                      key={track.id}
                      className={`music-track-item ${isCurrent ? 'active' : ''}`}
                      onClick={() => playTrack(track.id, { force: true })}
                    >
                      <div className="music-track-item-info">
                        <span className="music-track-item-title">{track.title[language]}</span>
                        <span className="music-track-item-song">{track.originalSong}</span>
                      </div>
                      {isCurrent && (
                        <div className="music-track-item-playing">
                          {isPlaying && !isMuted ? '🎵' : '❚❚'}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};
