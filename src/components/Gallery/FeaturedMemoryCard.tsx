import React from 'react';
import { GalleryPhoto, SupportedLanguage } from '../../types/invitation';
import { GalleryArtwork } from './GalleryArtwork';

interface FeaturedMemoryCardProps {
  photo: GalleryPhoto;
  language: SupportedLanguage;
  badgeLabel: string;
  onOpenLightbox: (photo: GalleryPhoto) => void;
}

/**
 * Prominent Hero Featured Memory Card.
 * Displays a large editorial frame with gold ornamental trims,
 * category badge, photo caption, and romantic story narrative.
 */
export const FeaturedMemoryCard: React.FC<FeaturedMemoryCardProps> = ({
  photo,
  language,
  badgeLabel,
  onOpenLightbox,
}) => {
  const isHindi = language === 'hi';
  const caption = photo.caption?.[language] || photo.caption?.en;
  const story = photo.story?.[language] || photo.story?.en;

  return (
    <section className="featured-memory-section" aria-label={badgeLabel}>
      <div className="featured-memory-card">
        {/* Top Gold Arch Accent */}
        <div className="featured-card-top-arch" aria-hidden="true">
          <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="featured-arch-svg">
            <path
              d="M 0 40 Q 200 0 400 40"
              fill="none"
              stroke="url(#featuredGoldGrad)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="featuredGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dfb76c" stopOpacity="0" />
                <stop offset="30%" stopColor="#dfb76c" />
                <stop offset="50%" stopColor="#fdf0cd" />
                <stop offset="70%" stopColor="#dfb76c" />
                <stop offset="100%" stopColor="#dfb76c" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="featured-card-grid">
          {/* Photo Frame Container */}
          <div
            className="featured-media-container"
            onClick={() => onOpenLightbox(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenLightbox(photo);
              }
            }}
            aria-label={`${photo.alt[language] || photo.alt.en} - ${isHindi ? 'विस्तार से देखें' : 'Click to view full size'}`}
          >
            <GalleryArtwork
              photo={photo}
              language={language}
              aspectRatio="landscape"
              className="featured-artwork"
              showCaptionOverlay={false}
            />
            <div className="featured-zoom-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>{isHindi ? 'बड़ी तस्वीर' : 'Expand'}</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="featured-content-container">
            <div className="featured-badge">
              <span className="featured-badge-icon">👑</span>
              <span className={`featured-badge-text ${isHindi ? 'font-devanagari' : ''}`}>
                {badgeLabel}
              </span>
            </div>

            {caption && (
              <h2 className={`featured-caption ${isHindi ? 'font-devanagari' : ''}`}>
                {caption}
              </h2>
            )}

            {story && (
              <p className={`featured-story ${isHindi ? 'font-devanagari' : ''}`}>
                {story}
              </p>
            )}

            <div className="featured-action-row">
              <button
                type="button"
                className="featured-expand-btn"
                onClick={() => onOpenLightbox(photo)}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                <span>{isHindi ? 'पूर्ण आकार में देखें' : 'View Full Image'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
