import React from 'react';
import { CelebrationEvent, SupportedLanguage } from '../../types/invitation';
import { EventArtwork } from './EventArtwork';
import { EventDateTime } from './EventDateTime';
import { EventVenue } from './EventVenue';

interface EventCardProps {
  event: CelebrationEvent;
  language: SupportedLanguage;
  labels: {
    date: string;
    time: string;
    venue: string;
    dressCode: string;
    viewMap: string;
    eventDetails: string;
  };
  isEven?: boolean;
  onViewDetails?: (event: CelebrationEvent) => void;
  onMapClick?: (url: string) => void;
}

/**
 * Event Card Component for Wedding Celebrations.
 * Features:
 * - Subtle color accents matching the ceremony theme (Haldi, Mehendi, Sangeet, Wedding, Reception)
 * - Greatest visual prominence for The Wedding Ceremony
 * - Only displays configured information (hides unconfigured dates/venues without fake data)
 * - Working map action when mapUrl is present
 * - Desktop alternating composition; mobile responsive stack
 */
export const EventCard: React.FC<EventCardProps> = ({
  event,
  language,
  labels,
  isEven = false,
  onViewDetails,
  onMapClick,
}) => {
  const isHindi = language === 'hi';
  const titleText = event.title[language] || event.title.en;
  const subtitleText = event.subtitle?.[language] || event.subtitle?.en;
  const descriptionText = event.description[language] || event.description.en;
  const dateText = event.date?.[language] || event.date?.en;
  const timeText = event.time?.[language] || event.time?.en;
  const venueNameText = event.venueName?.[language] || event.venueName?.en;
  const venueAddressText = event.venueAddress?.[language] || event.venueAddress?.en;
  const dressCodeText = event.dressCode?.[language] || event.dressCode?.en;

  const isWeddingCeremony = event.type === 'wedding' || event.isProminent;

  return (
    <article
      id={`celebration-${event.id}`}
      className={`celebration-event-card card-${event.type} ${
        isWeddingCeremony ? 'card-prominent-wedding' : ''
      } ${isEven ? 'layout-even' : 'layout-odd'}`}
      aria-label={titleText}
    >
      {/* Decorative Corner Filigree */}
      <div className="card-corner corner-tl" aria-hidden="true" />
      <div className="card-corner corner-tr" aria-hidden="true" />
      <div className="card-corner corner-bl" aria-hidden="true" />
      <div className="card-corner corner-br" aria-hidden="true" />

      {/* Prominent Crown Crest Badge for The Wedding Ceremony */}
      {isWeddingCeremony && (
        <div className="wedding-prominent-crest-badge" aria-hidden="true">
          <span className="crest-star">✦</span>
          <span className="crest-label">
            {isHindi ? 'परम पावन मुख्य विवाह संस्कार' : 'The Auspicious Wedding Union'}
          </span>
          <span className="crest-star">✦</span>
        </div>
      )}

      <div className="event-card-inner-grid">
        {/* Visual Half: Bespoke Vector Art Folio */}
        <div className="event-card-art-col">
          <div className="art-frame-wrapper">
            <EventArtwork
              type={event.type}
              altText={titleText}
              imageSrc={event.imageSrc}
              isProminent={isWeddingCeremony}
            />
          </div>
        </div>

        {/* Narrative & Details Half */}
        <div className="event-card-details-col">
          {/* Ceremony Type Tag */}
          <div className="event-type-badge-row">
            <span className={`event-type-badge badge-${event.type}`}>
              {event.type.toUpperCase()}
            </span>
            {dressCodeText && (
              <span className="event-dress-code-badge" title={labels.dressCode}>
                <span className="attire-icon">👘</span>
                <span className="attire-text">{dressCodeText}</span>
              </span>
            )}
          </div>

          {/* Prominent Event Title */}
          <h2 className={`event-title ${isHindi ? 'font-devanagari' : ''}`}>
            {titleText}
          </h2>

          {subtitleText && (
            <p className={`event-subtitle ${isHindi ? 'font-devanagari' : ''}`}>
              {subtitleText}
            </p>
          )}

          {/* Subtle Ornamental Gold Divider */}
          <div className="event-card-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-flourish">❦</span>
            <span className="divider-line" />
          </div>

          {/* Heartfelt Description */}
          <p className={`event-description ${isHindi ? 'font-devanagari desc-hindi' : ''}`}>
            {descriptionText}
          </p>

          {/* Date & Muhurat Section (Only if configured) */}
          <EventDateTime
            date={dateText}
            time={timeText}
            labelDate={labels.date}
            labelTime={labels.time}
          />

          {/* Venue & Directions Section (Only if configured) */}
          <EventVenue
            venueName={venueNameText}
            venueAddress={venueAddressText}
            mapUrl={event.mapUrl}
            labelVenue={labels.venue}
            labelViewMap={labels.viewMap}
            onViewMapClick={onMapClick}
          />

          {/* Action Trigger */}
          {onViewDetails && (
            <div className="event-actions-bar">
              <button
                type="button"
                className="event-details-action-btn"
                onClick={() => onViewDetails(event)}
                aria-label={`${labels.eventDetails}: ${titleText}`}
              >
                <span className="btn-lotus">𑁍</span>
                <span>{labels.eventDetails}</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
