import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CelebrationEvent, SupportedLanguage } from '../../types/invitation';
import { EventArtwork } from './EventArtwork';
import { useWeddingMusic } from '../../context/WeddingMusicContext';
import './CeremonyCardSwipe.css';

interface CeremonyCardSwipeProps {
  events: CelebrationEvent[];
  language: SupportedLanguage;
  labels: {
    date: { en: string; hi: string };
    time: { en: string; hi: string };
    venue: { en: string; hi: string };
    dressCode?: { en: string; hi: string };
    viewMap?: { en: string; hi: string };
  };
  onMapClick?: (url: string) => void;
}

const CEREMONY_ICONS: Record<string, string> = {
  haldi: '🪔',
  mehendi: '🌿',
  sangeet: '🪘',
  wedding: '👑',
  reception: '🥂',
};

/**
 * Royal Ceremony Card Swipe Experience for Hitesh & Shivanee's Wedding Celebrations.
 *
 * Replaces vertical feed with an interactive, mobile-optimized card deck:
 * - Direct touch swipe gestures (left/right) with smooth slide physics
 * - Top Ceremony Selector Tab Pills for instant jumping between events
 * - Integrated Prev & Next jewelry-style arrow buttons for desktop
 * - Bottom pagination bead dots & event counter
 * - Automatic background music scene transition as the guest switches ceremonies
 */
export const CeremonyCardSwipe: React.FC<CeremonyCardSwipeProps> = ({
  events,
  language,
  labels,
  onMapClick,
}) => {
  const enabledEvents = events.filter((e) => e.isEnabled);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const { notifySceneChanged, sceneBased } = useWeddingMusic();
  const isHindi = language === 'hi';

  const currentEvent = enabledEvents[currentIndex] || enabledEvents[0];

  // Notify background music system when the active ceremony card changes
  useEffect(() => {
    if (currentEvent && sceneBased) {
      notifySceneChanged(currentEvent.type);
    }
  }, [currentIndex, currentEvent, sceneBased, notifySceneChanged]);

  const goToCard = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(enabledEvents.length - 1, index));
      setCurrentIndex(clamped);
    },
    [enabledEvents.length]
  );

  const goNext = useCallback(() => {
    if (currentIndex < enabledEvents.length - 1) {
      goToCard(currentIndex + 1);
    } else {
      goToCard(0); // Loop to beginning
    }
  }, [currentIndex, enabledEvents.length, goToCard]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goToCard(currentIndex - 1);
    } else {
      goToCard(enabledEvents.length - 1); // Loop to end
    }
  }, [currentIndex, enabledEvents.length, goToCard]);

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // Threshold in px

    if (diff > minSwipeDistance) {
      goNext();
    } else if (diff < -minSwipeDistance) {
      goPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  if (!enabledEvents || enabledEvents.length === 0) {
    return null;
  }

  const labelDate = labels.date[language] || labels.date.en || 'Date';
  const labelTime = labels.time[language] || labels.time.en || 'Time';
  const labelVenue = labels.venue[language] || labels.venue.en || 'Venue';
  const labelDressCode = labels.dressCode?.[language] || labels.dressCode?.en || (isHindi ? 'पोशाक' : 'Dress Code');
  const labelViewMap = labels.viewMap?.[language] || labels.viewMap?.en || (isHindi ? 'गूगल मैप्स देखें' : 'View on Maps');

  return (
    <section className="ceremony-swipe-container" aria-label="Celebration Events Deck">
      {/* 1. Top Ceremony Selector Tabs */}
      <div className="ceremony-tabs-bar" role="tablist" aria-label="Ceremony Selectors">
        {enabledEvents.map((evt, idx) => {
          const isActive = idx === currentIndex;
          const isWedding = evt.type === 'wedding' || evt.isProminent;
          const tabTitle = evt.title[language] || evt.title.en;
          const icon = CEREMONY_ICONS[evt.type] || '𑁍';

          return (
            <button
              key={evt.id}
              role="tab"
              aria-selected={isActive}
              className={`ceremony-tab-btn ${isActive ? 'active' : ''} ${isWedding ? 'wedding-special' : ''}`}
              onClick={() => goToCard(idx)}
            >
              <span className="ceremony-tab-icon" aria-hidden="true">{icon}</span>
              <span>{tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Swipe Viewport and Deck */}
      <div className="ceremony-swipe-stage">
        {/* Prev Arrow */}
        <button
          type="button"
          className="ceremony-arrow-btn prev"
          onClick={goPrev}
          aria-label={isHindi ? 'पिछला उत्सव' : 'Previous ceremony'}
        >
          ‹
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          className="ceremony-arrow-btn next"
          onClick={goNext}
          aria-label={isHindi ? 'अगला उत्सव' : 'Next ceremony'}
        >
          ›
        </button>

        {/* Track Container */}
        <div
          className="ceremony-swipe-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {enabledEvents.map((event) => {
            const isWeddingCeremony = event.type === 'wedding' || event.isProminent;
            const titleText = event.title[language] || event.title.en;
            const subtitleText = event.subtitle?.[language] || event.subtitle?.en;
            const descriptionText = event.description[language] || event.description.en;
            const dateText = event.date?.[language] || event.date?.en;
            const timeText = event.time?.[language] || event.time?.en;
            const venueNameText = event.venueName?.[language] || event.venueName?.en;
            const venueAddressText = event.venueAddress?.[language] || event.venueAddress?.en;
            const dressCodeText = event.dressCode?.[language] || event.dressCode?.en;

            return (
              <div key={event.id} className="ceremony-swipe-slide">
                <article
                  id={`celebration-${event.id}`}
                  className={`ceremony-swipe-card card-${event.type} ${
                    isWeddingCeremony ? 'is-wedding-prominent' : ''
                  }`}
                  aria-label={titleText}
                >
                  {/* Wedding Badge if prominent */}
                  {isWeddingCeremony && (
                    <div className="ceremony-card-top-tag">
                      {isHindi ? '👑 मुख्य पाणिग्रहण संस्कार 👑' : '👑 Main Wedding Ceremony 👑'}
                    </div>
                  )}

                  {/* Artwork / Illustration */}
                  <div className="ceremony-card-media-box">
                    <EventArtwork
                      type={event.type}
                      altText={titleText}
                      imageSrc={event.imageSrc}
                      isProminent={isWeddingCeremony}
                    />
                  </div>

                  {/* Details */}
                  <div className="ceremony-card-details">
                    <div className="ceremony-card-title-group">
                      <h3 className="ceremony-card-heading">{titleText}</h3>
                      {subtitleText && <p className="ceremony-card-subheading">{subtitleText}</p>}
                    </div>

                    <p className="ceremony-card-desc">{descriptionText}</p>

                    {/* Schedule & Venue Meta */}
                    <div className="ceremony-card-meta-box">
                      {/* Date & Time */}
                      {(dateText || timeText) && (
                        <div className="ceremony-meta-row">
                          <span className="ceremony-meta-icon">📅</span>
                          <div className="ceremony-meta-content">
                            <span className="ceremony-meta-label">{labelDate} &amp; {labelTime}</span>
                            <span className="ceremony-meta-value">
                              {dateText} {dateText && timeText ? '·' : ''} {timeText}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Venue */}
                      {(venueNameText || venueAddressText) && (
                        <div className="ceremony-meta-row">
                          <span className="ceremony-meta-icon">📍</span>
                          <div className="ceremony-meta-content">
                            <span className="ceremony-meta-label">{labelVenue}</span>
                            {venueNameText && <span className="ceremony-meta-value">{venueNameText}</span>}
                            {venueAddressText && <span className="ceremony-meta-sub">{venueAddressText}</span>}
                            {event.mapUrl && (
                              <a
                                href={event.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ceremony-maps-btn"
                                onClick={(e) => {
                                  if (onMapClick) {
                                    e.preventDefault();
                                    onMapClick(event.mapUrl!);
                                  }
                                }}
                              >
                                <span>🗺️</span>
                                <span>{labelViewMap}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Dress Code */}
                      {dressCodeText && (
                        <div className="ceremony-meta-row">
                          <span className="ceremony-meta-icon">✨</span>
                          <div className="ceremony-meta-content">
                            <span className="ceremony-meta-label">{labelDressCode}</span>
                            <span className="ceremony-meta-value">{dressCodeText}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom Controls: Pagination Dots & Counter */}
      <div className="ceremony-swipe-controls">
        <div className="ceremony-pagination-dots" role="tablist" aria-label="Ceremony pagination">
          {enabledEvents.map((evt, idx) => (
            <button
              key={`dot-${evt.id}`}
              type="button"
              className={`ceremony-dot-btn ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToCard(idx)}
              aria-label={`Go to ${evt.title[language] || evt.title.en}`}
            />
          ))}
        </div>

        <span className="ceremony-counter-text">
          {isHindi
            ? `${currentIndex + 1} / ${enabledEvents.length} · ${currentEvent.title[language] || currentEvent.title.en}`
            : `Ceremony ${currentIndex + 1} of ${enabledEvents.length} · ${currentEvent.title[language] || currentEvent.title.en}`}
        </span>

        <span className="ceremony-swipe-hint">
          {isHindi ? '← स्वाइप करके सभी उत्सव देखें →' : '← Swipe to explore ceremonies →'}
        </span>
      </div>
    </section>
  );
};
