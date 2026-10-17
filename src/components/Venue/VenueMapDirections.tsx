import React from 'react';
import { VenueInfo, SupportedLanguage } from '../../types/invitation';

interface VenueMapDirectionsProps {
  venue: VenueInfo;
  language: SupportedLanguage;
  labelGetDirections: string;
  onDirectionsFallbackClick?: () => void;
}

/**
 * Google Maps Directions Action & Preview Component.
 * Supports:
 * - Direct Google Maps URL if supplied
 * - Auto-encoded Google Maps Search/Directions URL based on fullAddress
 * - Graceful fallback notice if address has not yet been announced
 * - Non-blocking map card preview
 */
export const VenueMapDirections: React.FC<VenueMapDirectionsProps> = ({
  venue,
  language,
  labelGetDirections,
  onDirectionsFallbackClick,
}) => {
  const isHindi = language === 'hi';
  const fullAddress = venue.fullAddress?.[language] || venue.fullAddress?.en;
  const cityPostal = venue.cityAndPostalCode?.[language] || venue.cityAndPostalCode?.en;
  const venueName = venue.name[language] || venue.name.en;

  // Determine Google Maps URL
  let directionsUrl: string | null = venue.googleMapsUrl || null;
  if (!directionsUrl && fullAddress) {
    const query = cityPostal ? `${fullAddress}, ${cityPostal}` : fullAddress;
    directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  const handleDirectionsClick = () => {
    if (directionsUrl) {
      window.open(directionsUrl, '_blank', 'noopener,noreferrer');
    } else if (onDirectionsFallbackClick) {
      onDirectionsFallbackClick();
    }
  };

  return (
    <section className="venue-map-directions-section" aria-label="Map & Navigation Directions">
      <div className="map-card-wrapper">
        {/* Subtle Palace Map Illustration Frame */}
        <div className="map-preview-frame">
          {venue.embedMapUrl ? (
            <iframe
              src={venue.embedMapUrl}
              title={`${venueName} Map Preview`}
              className="embed-map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-static-backdrop" aria-hidden="true">
              <svg viewBox="0 0 600 240" className="map-abstract-svg">
                <rect width="600" height="240" fill="#f5eee2" />
                {/* Decorative Map Grid Lines */}
                <g stroke="#dfb76c" strokeWidth="1" strokeDasharray="3 4" opacity="0.35">
                  <line x1="0" y1="60" x2="600" y2="60" />
                  <line x1="0" y1="120" x2="600" y2="120" />
                  <line x1="0" y1="180" x2="600" y2="180" />
                  <line x1="150" y1="0" x2="150" y2="240" />
                  <line x1="300" y1="0" x2="300" y2="240" />
                  <line x1="450" y1="0" x2="450" y2="240" />
                </g>
                {/* Golden Road Arteries */}
                <path d="M0 140 Q250 80 400 130 T600 100" stroke="#dfb76c" strokeWidth="4" fill="none" opacity="0.6" />
                <path d="M220 0 Q250 120 300 240" stroke="#b8861d" strokeWidth="3" fill="none" opacity="0.5" />
                {/* Landmark Pin Target */}
                <circle cx="350" cy="115" r="28" fill="rgba(82, 15, 24, 0.12)" />
                <circle cx="350" cy="115" r="16" fill="rgba(223, 183, 108, 0.4)" />
                <circle cx="350" cy="115" r="6" fill="#721625" />
              </svg>

              <div className="map-overlay-badge">
                <span className="overlay-pin">📍</span>
                <span className="overlay-title">{venueName}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Button Bar */}
        <div className="map-action-bar">
          <button
            type="button"
            className="venue-get-directions-btn"
            onClick={handleDirectionsClick}
            aria-label={labelGetDirections}
          >
            <span className="btn-shimmer" aria-hidden="true" />
            <span className="btn-icon">🗺️</span>
            <span className="btn-text">{labelGetDirections}</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </button>

          {!directionsUrl && (
            <p className="directions-pending-note">
              {isHindi
                ? 'विवाह स्थल का आधिकारिक मार्ग निर्देश परिवार द्वारा तय होते ही यहाँ तुरंत सक्रिय हो जाएगा।'
                : 'Exact Google Maps pin and GPS navigation will unlock here once official venue details are finalized.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
