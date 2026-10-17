import React from 'react';
import { GalleryPhoto, SupportedLanguage } from '../../types/invitation';
import { GalleryArtwork } from './GalleryArtwork';

interface GalleryPhotoCardProps {
  photo: GalleryPhoto;
  language: SupportedLanguage;
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

/**
 * Editorial Photo Card for the Royal Wedding Gallery grid.
 * Respects natural aspect ratio, renders gold hairline borders,
 * provides gentle hover lift & warm glow, and supports full keyboard access.
 */
export const GalleryPhotoCard: React.FC<GalleryPhotoCardProps> = ({
  photo,
  language,
  onOpenLightbox,
}) => {
  const isHindi = language === 'hi';
  const altText = photo.alt[language] || photo.alt.en;
  const caption = photo.caption?.[language] || photo.caption?.en;

  const handleClick = () => {
    onOpenLightbox(photo);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenLightbox(photo);
    }
  };

  return (
    <article
      className={`gallery-photo-card card-aspect-${photo.aspectRatio || 'landscape'}`}
      tabIndex={0}
      role="button"
      aria-label={`${altText} - ${isHindi ? 'विस्तार से देखने के लिए क्लिक करें' : 'Click to view full size'}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="card-media-wrapper">
        <GalleryArtwork
          photo={photo}
          language={language}
          aspectRatio={photo.aspectRatio}
          showCaptionOverlay={false}
        />

        {/* Hover quick-view trigger button overlay */}
        <div className="card-hover-scrim" aria-hidden="true">
          <div className="card-quick-zoom">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle Caption Footer */}
      {caption && (
        <div className="card-caption-footer">
          <p className={`card-caption-text ${isHindi ? 'font-devanagari' : ''}`}>
            {caption}
          </p>
        </div>
      )}
    </article>
  );
};
