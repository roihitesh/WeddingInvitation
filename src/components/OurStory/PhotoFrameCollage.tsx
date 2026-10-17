import React from 'react';
import { StoryPhotoItem, SupportedLanguage } from '../../types/invitation';
import { StoryArtwork } from './StoryArtwork';

interface PhotoFrameCollageProps {
  primaryPhoto: StoryPhotoItem;
  additionalPhotos?: StoryPhotoItem[];
  language: SupportedLanguage;
  milestoneTitle: string;
  isEven?: boolean;
  onPhotoClick: (photo: StoryPhotoItem) => void;
}

/**
 * Editorial Photo Frame & Multi-Photo Collage Component.
 * Features:
 * - Single large photo frame or 3-photo romantic collage (used for travel/adventures)
 * - Delicate royal gold border with traditional ornamental corner flourishes
 * - Embossed ivory matte border with romantic caption strip
 * - Click-to-enlarge trigger for the full-screen royal lightbox
 */
export const PhotoFrameCollage: React.FC<PhotoFrameCollageProps> = ({
  primaryPhoto,
  additionalPhotos,
  language,
  milestoneTitle,
  isEven = false,
  onPhotoClick,
}) => {
  const hasCollage = Boolean(additionalPhotos && additionalPhotos.length > 0);
  const primaryCaption = primaryPhoto.caption?.[language] || primaryPhoto.caption?.en;

  return (
    <div className={`photo-frame-outer ${hasCollage ? 'has-collage' : 'single-frame'} ${isEven ? 'frame-even' : 'frame-odd'}`}>
      {/* Primary Main Photo Frame */}
      <div className="royal-photo-frame primary-frame">
        {/* Ornate Gold Corner Flourishes */}
        <div className="corner-flourish corner-tl" aria-hidden="true">
          <svg viewBox="0 0 20 20" className="corner-svg">
            <path d="M1 19 L1 1 L19 1" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="6" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="corner-flourish corner-tr" aria-hidden="true">
          <svg viewBox="0 0 20 20" className="corner-svg">
            <path d="M19 19 L19 1 L1 1" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="14" cy="6" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="corner-flourish corner-bl" aria-hidden="true">
          <svg viewBox="0 0 20 20" className="corner-svg">
            <path d="M1 1 L1 19 L19 19" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="14" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="corner-flourish corner-br" aria-hidden="true">
          <svg viewBox="0 0 20 20" className="corner-svg">
            <path d="M19 1 L19 19 L1 19" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="14" cy="14" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Embossed Matte Ivory Border */}
        <div className="photo-matte-inner">
          <StoryArtwork
            photo={primaryPhoto}
            language={language}
            isLarge={!hasCollage}
            onClick={() => onPhotoClick(primaryPhoto)}
          />

          {primaryCaption && (
            <div className="photo-caption-bar">
              <span className="caption-gold-ornament">❧</span>
              <p className="photo-caption-text">{primaryCaption}</p>
              <span className="caption-gold-ornament">❧</span>
            </div>
          )}
        </div>
      </div>

      {/* Companion Memories Collage (for Trips & Milestones with additional photos) */}
      {hasCollage && (
        <div className="companion-collage-strip" aria-label={`${milestoneTitle} album snapshots`}>
          {additionalPhotos?.map((subPhoto, idx) => {
            const subCaption = subPhoto.caption?.[language] || subPhoto.caption?.en;
            return (
              <div
                key={subPhoto.id || idx}
                className={`royal-photo-frame companion-frame companion-${idx + 1}`}
              >
                <div className="photo-matte-inner">
                  <StoryArtwork
                    photo={subPhoto}
                    language={language}
                    onClick={() => onPhotoClick(subPhoto)}
                  />
                  {subCaption && (
                    <div className="photo-caption-bar sub-caption-bar">
                      <p className="photo-caption-text">{subCaption}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
