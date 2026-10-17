import React from 'react';
import { VenueInfo, SupportedLanguage } from '../../types/invitation';

interface VenueDetailsCardProps {
  venue: VenueInfo;
  language: SupportedLanguage;
  labels: {
    fullAddress: string;
    eventDate: string;
    timings: string;
    contact: string;
    parking: string;
    accessibility: string;
    venueAwaiting: string;
    venueAwaitingDesc: string;
  };
}

/**
 * Venue Information Card.
 * Renders all configured venue logistics:
 * - Full address & city
 * - Date & timings
 * - Contact information
 * - Parking facilities
 * - Accessibility details
 *
 * Automatically hides unconfigured fields and displays an auspicious
 * awaiting notification if location details are pending final confirmation.
 */
export const VenueDetailsCard: React.FC<VenueDetailsCardProps> = ({
  venue,
  language,
  labels,
}) => {
  const isHindi = language === 'hi';
  const venueName = venue.name[language] || venue.name.en;
  const fullAddress = venue.fullAddress?.[language] || venue.fullAddress?.en;
  const cityPostal = venue.cityAndPostalCode?.[language] || venue.cityAndPostalCode?.en;
  const eventDate = venue.eventDate?.[language] || venue.eventDate?.en;
  const timing = venue.timing?.[language] || venue.timing?.en;
  const contactPerson = venue.contactPerson?.[language] || venue.contactPerson?.en;
  const contactNumber = venue.contactNumber;
  const parkingInfo = venue.parkingInfo?.[language] || venue.parkingInfo?.en;
  const accessibilityInfo = venue.accessibilityInfo?.[language] || venue.accessibilityInfo?.en;

  const hasAddress = Boolean(fullAddress || cityPostal);

  return (
    <article className="venue-details-card" aria-label={`${venueName} Logistics`}>
      {/* Card Header with Gold Pip */}
      <div className="card-header-bar">
        <span className="header-ornament">✦</span>
        <h3 className={`card-header-title ${isHindi ? 'font-devanagari' : ''}`}>
          {venueName}
        </h3>
        <span className="header-ornament">✦</span>
      </div>

      <div className="card-body-content">
        {/* 1. Official Address & Location (or graceful pending notice) */}
        <div className="venue-detail-row row-address">
          <div className="detail-icon-wrap" aria-hidden="true">
            <span className="detail-icon">📍</span>
          </div>
          <div className="detail-text-wrap">
            <span className="detail-label">{labels.fullAddress}</span>
            {hasAddress ? (
              <p className="detail-value value-address">
                {fullAddress}
                {cityPostal && <span className="city-postal">, {cityPostal}</span>}
              </p>
            ) : (
              <div className="venue-awaiting-box">
                <p className="awaiting-title">
                  {labels.venueAwaiting}
                </p>
                <p className="awaiting-subtitle">
                  {labels.venueAwaitingDesc}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 2. Auspicious Date & Muhurat (Only if configured) */}
        {(eventDate || timing) && (
          <div className="venue-detail-row row-timing">
            <div className="detail-icon-wrap" aria-hidden="true">
              <span className="detail-icon">📅</span>
            </div>
            <div className="detail-text-wrap">
              <span className="detail-label">
                {eventDate ? labels.eventDate : labels.timings}
              </span>
              <p className="detail-value">
                {eventDate && <strong>{eventDate}</strong>}
                {eventDate && timing && <span> • </span>}
                {timing && <span>{timing}</span>}
              </p>
            </div>
          </div>
        )}

        {/* 3. Contact Person & Helpline (Only if configured) */}
        {(contactPerson || contactNumber) && (
          <div className="venue-detail-row row-contact">
            <div className="detail-icon-wrap" aria-hidden="true">
              <span className="detail-icon">📞</span>
            </div>
            <div className="detail-text-wrap">
              <span className="detail-label">{labels.contact}</span>
              <p className="detail-value">
                {contactPerson && <span>{contactPerson} </span>}
                {contactNumber && (
                  <a href={`tel:${contactNumber}`} className="contact-tel-link">
                    {contactNumber}
                  </a>
                )}
              </p>
            </div>
          </div>
        )}

        {/* 4. Parking Facilities (Only if configured) */}
        {parkingInfo && (
          <div className="venue-detail-row row-parking">
            <div className="detail-icon-wrap" aria-hidden="true">
              <span className="detail-icon">🅿️</span>
            </div>
            <div className="detail-text-wrap">
              <span className="detail-label">{labels.parking}</span>
              <p className="detail-value">{parkingInfo}</p>
            </div>
          </div>
        )}

        {/* 5. Accessibility Support (Only if configured) */}
        {accessibilityInfo && (
          <div className="venue-detail-row row-accessibility">
            <div className="detail-icon-wrap" aria-hidden="true">
              <span className="detail-icon">♿</span>
            </div>
            <div className="detail-text-wrap">
              <span className="detail-label">{labels.accessibility}</span>
              <p className="detail-value">{accessibilityInfo}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
