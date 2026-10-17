import React from 'react';
import { VenueInfo, SupportedLanguage } from '../../types/invitation';
import { VenueArtwork } from './VenueArtwork';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface VenueHeroProps {
  venue: VenueInfo;
  language: SupportedLanguage;
  onPhotoClick?: () => void;
}

/**
 * Venue Hero Section.
 * Displays large venue photography/art in an ornate antique-gold frame,
 * venue name, short description, date/time badge (if configured), and floral divider.
 */
export const VenueHero: React.FC<VenueHeroProps> = ({
  venue,
  language,
  onPhotoClick,
}) => {
  const isHindi = language === 'hi';
  const venueName = venue.name[language] || venue.name.en;
  const venueDesc = venue.description[language] || venue.description.en;
  const eventDate = venue.eventDate?.[language] || venue.eventDate?.en;
  const timing = venue.timing?.[language] || venue.timing?.en;

  const primaryPhoto = venue.photos.find((p) => p.isPrimary) || venue.photos[0];
  const altText = primaryPhoto ? primaryPhoto.alt[language] || primaryPhoto.alt.en : venueName;

  return (
    <section className="venue-hero-section" aria-label="Wedding Venue Overview">
      {/* Antique Gold Ornate Frame */}
      <div className="venue-hero-frame-outer">
        <div className="venue-frame-corner corner-tl" aria-hidden="true" />
        <div className="venue-frame-corner corner-tr" aria-hidden="true" />
        <div className="venue-frame-corner corner-bl" aria-hidden="true" />
        <div className="venue-frame-corner corner-br" aria-hidden="true" />

        <div className="venue-hero-image-wrapper">
          <VenueArtwork
            altText={altText}
            imageSrc={primaryPhoto?.src}
            className="venue-hero-artwork"
            onClick={onPhotoClick}
          />
        </div>
      </div>

      {/* Venue Information Headline */}
      <div className="venue-hero-text-block">
        {venue.eventName && (
          <span className="venue-event-tag">
            {venue.eventName[language] || venue.eventName.en}
          </span>
        )}

        <h2 className={`venue-hero-name ${isHindi ? 'font-devanagari' : ''}`}>
          {venueName}
        </h2>

        <p className={`venue-hero-desc ${isHindi ? 'font-devanagari' : ''}`}>
          {venueDesc}
        </p>

        {/* Ceremony Date & Time Badge (Only if configured) */}
        {(eventDate || timing) && (
          <div className="venue-hero-datetime-pill">
            <span className="pill-clock">⏰</span>
            {eventDate && <span className="pill-date">{eventDate}</span>}
            {eventDate && timing && <span className="pill-sep">•</span>}
            {timing && <span className="pill-time">{timing}</span>}
          </div>
        )}

        {/* Subtle Floral Divider */}
        <div className="venue-hero-divider">
          <LotusDivider />
        </div>
      </div>
    </section>
  );
};
