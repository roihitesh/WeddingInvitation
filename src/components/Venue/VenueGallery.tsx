import React from 'react';
import { VenuePhoto, SupportedLanguage } from '../../types/invitation';
import { VenueArtwork } from './VenueArtwork';

interface VenueGalleryProps {
  photos: VenuePhoto[];
  language: SupportedLanguage;
  venueName: string;
  onPhotoClick: (photo: VenuePhoto) => void;
}

/**
 * Venue Photo Gallery Component.
 * Supports:
 * - High-resolution responsive photo cards
 * - Caption strips
 * - Click-to-enlarge lightbox trigger
 */
export const VenueGallery: React.FC<VenueGalleryProps> = ({
  photos,
  language,
  venueName,
  onPhotoClick,
}) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section className="venue-gallery-section" aria-label={`${venueName} Photo Gallery`}>
      <div className="venue-gallery-grid">
        {photos.map((photo, index) => {
          const altText = photo.alt[language] || photo.alt.en;
          const caption = photo.caption?.[language] || photo.caption?.en;

          return (
            <div
              key={photo.id || index}
              className={`venue-gallery-item ${photo.isPrimary ? 'gallery-item-featured' : ''}`}
            >
              <div
                className="gallery-frame"
                onClick={() => onPhotoClick(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPhotoClick(photo)}
                aria-label={`${altText} (Click to enlarge)`}
              >
                <VenueArtwork
                  altText={altText}
                  imageSrc={photo.src}
                  className="gallery-artwork"
                />

                <div className="gallery-hover-overlay" aria-hidden="true">
                  <span className="hover-loupe">⌕</span>
                  <span className="hover-text">
                    {language === 'hi' ? 'बड़ा देखें' : 'Enlarge'}
                  </span>
                </div>
              </div>

              {caption && (
                <p className="gallery-caption-text">{caption}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
