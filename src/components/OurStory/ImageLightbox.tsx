import React, { useEffect, useCallback } from 'react';
import { StoryPhotoItem, SupportedLanguage } from '../../types/invitation';
import { StoryArtwork } from './StoryArtwork';

interface ImageLightboxProps {
  photo: StoryPhotoItem | null;
  language: SupportedLanguage;
  onClose: () => void;
}

/**
 * Royal Image Lightbox.
 * Allows guests to view couple's photographs and detailed artwork folios
 * in an immersive full-screen modal with elegant ivory and gold framing.
 */
export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  photo,
  language,
  onClose,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!photo) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [photo, handleKeyDown]);

  if (!photo) return null;

  const caption = photo.caption?.[language] || photo.caption?.en;
  const altText = photo.alt[language] || photo.alt.en;

  return (
    <div
      className="royal-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={altText}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="royal-lightbox-dialog">
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label={language === 'hi' ? 'बंद करें' : 'Close viewer'}
          autoFocus
        >
          ✕
        </button>

        {/* Modal Frame Content */}
        <div className="lightbox-frame-inner">
          <div className="lightbox-artwork-stage">
            <StoryArtwork
              photo={photo}
              language={language}
              isLarge={true}
              className="lightbox-full-art"
            />
          </div>

          <div className="lightbox-caption-strip">
            <h4 className="lightbox-title">{altText}</h4>
            {caption && <p className="lightbox-desc">{caption}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
