import React, { useEffect, useRef, useState } from 'react';
import { GalleryPhoto, SupportedLanguage } from '../../types/invitation';
import { GalleryArtwork } from './GalleryArtwork';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  initialPhotoId: string;
  language: SupportedLanguage;
  onClose: () => void;
  labels: {
    prevPhoto: { en: string; hi: string };
    nextPhoto: { en: string; hi: string };
    closeViewer: { en: string; hi: string };
    photoCount: { en: string; hi: string };
  };
}

/**
 * Full-Screen Royal Lightbox Modal Viewer.
 * Features:
 * - Keyboard navigation (Esc to close, Left/Right arrows to flip).
 * - Touch swipe gestures on mobile.
 * - Current photo counter (e.g., 3 of 8 / 8 में से 3).
 * - Bottom parchment narrative card for romantic captions & stories.
 * - Backdrop click to close.
 * - Locks background body scrolling while open.
 */
export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photos,
  initialPhotoId,
  language,
  onClose,
  labels,
}) => {
  const isHindi = language === 'hi';
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = photos.findIndex((p) => p.id === initialPhotoId);
    return idx >= 0 ? idx : 0;
  });

  const touchStartXRef = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const currentPhoto = photos[currentIndex];
  const totalPhotos = photos.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  };

  // Keyboard controls & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [totalPhotos]);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartXRef.current = null;
  };

  if (!currentPhoto) return null;

  const caption = currentPhoto.caption?.[language] || currentPhoto.caption?.en;
  const story = currentPhoto.story?.[language] || currentPhoto.story?.en;

  const counterText = isHindi
    ? `${totalPhotos} में से ${currentIndex + 1}`
    : `${currentIndex + 1} of ${totalPhotos}`;

  const closeLabel = labels.closeViewer[language] || labels.closeViewer.en;
  const prevLabel = labels.prevPhoto[language] || labels.prevPhoto.en;
  const nextLabel = labels.nextPhoto[language] || labels.nextPhoto.en;

  return (
    <div
      className="gallery-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={isHindi ? 'तस्वीर दर्शक' : 'Photo Viewer'}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="lightbox-top-bar">
        <div className="lightbox-counter-pill">
          <span className="counter-star">✦</span>
          <span className="counter-num">{counterText}</span>
          <span className="counter-star">✦</span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label={closeLabel}
          title={closeLabel}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="lightbox-viewport">
        {/* Navigation Arrow Previous */}
        {totalPhotos > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev-btn"
            onClick={handlePrev}
            aria-label={prevLabel}
            title={prevLabel}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Center Media Presentation */}
        <div className="lightbox-media-wrapper">
          <div className="lightbox-media-frame">
            <GalleryArtwork
              photo={currentPhoto}
              language={language}
              aspectRatio={currentPhoto.aspectRatio}
              className="lightbox-artwork"
              showCaptionOverlay={false}
            />
          </div>

          {/* Narrative Caption Card */}
          {(caption || story) && (
            <div className="lightbox-narrative-card">
              {caption && (
                <h3 className={`lightbox-caption-heading ${isHindi ? 'font-devanagari' : ''}`}>
                  {caption}
                </h3>
              )}
              {story && (
                <p className={`lightbox-story-text ${isHindi ? 'font-devanagari' : ''}`}>
                  {story}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Navigation Arrow Next */}
        {totalPhotos > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn lightbox-next-btn"
            onClick={handleNext}
            aria-label={nextLabel}
            title={nextLabel}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="lightbox-swipe-hint" aria-hidden="true">
        <span>{isHindi ? 'अगली तस्वीर के लिए स्वाइप करें' : 'Swipe or use arrows to view more'}</span>
      </div>
    </div>
  );
};
