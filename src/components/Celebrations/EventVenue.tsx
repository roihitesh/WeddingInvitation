import React from 'react';

interface EventVenueProps {
  venueName?: string;
  venueAddress?: string;
  mapUrl?: string | null;
  labelVenue: string;
  labelViewMap: string;
  onViewMapClick?: (url: string) => void;
}

/**
 * Event Venue Information Component.
 * Displays sacred venue name, address, and interactive Google Maps direction trigger.
 * Fully hides itself if venue is unconfigured.
 */
export const EventVenue: React.FC<EventVenueProps> = ({
  venueName,
  venueAddress,
  mapUrl,
  labelVenue,
  labelViewMap,
  onViewMapClick,
}) => {
  if (!venueName && !venueAddress && !mapUrl) {
    return null;
  }

  const handleDirections = () => {
    if (mapUrl) {
      if (onViewMapClick) {
        onViewMapClick(mapUrl);
      } else {
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <div className="event-venue-container" aria-label="Venue Information">
      <div className="venue-header-row">
        <span className="venue-pin-icon" aria-hidden="true">📍</span>
        <span className="venue-section-label">{labelVenue}</span>
      </div>

      {venueName && <h4 className="venue-name-title">{venueName}</h4>}
      {venueAddress && <p className="venue-address-text">{venueAddress}</p>}

      {mapUrl && (
        <div className="venue-actions-row">
          <button
            type="button"
            className="venue-directions-btn"
            onClick={handleDirections}
            aria-label={`${labelViewMap} for ${venueName || 'Venue'}`}
          >
            <span className="btn-pin">🗺️</span>
            <span className="btn-label">{labelViewMap}</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </div>
  );
};
