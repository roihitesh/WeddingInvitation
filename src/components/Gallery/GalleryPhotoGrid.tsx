import React from 'react';
import { GalleryPhoto, SupportedLanguage } from '../../types/invitation';
import { GalleryPhotoCard } from './GalleryPhotoCard';

interface GalleryPhotoGridProps {
  photos: GalleryPhoto[];
  language: SupportedLanguage;
  onOpenLightbox: (photo: GalleryPhoto) => void;
  emptyTitle: string;
  emptyDesc: string;
}

/**
 * Editorial Masonry Gallery Grid.
 * Displays photographs in an asymmetric, natural aspect-ratio column layout
 * with generous whitespace, subtle rounded corners, and delicate gold hairline borders.
 */
export const GalleryPhotoGrid: React.FC<GalleryPhotoGridProps> = ({
  photos,
  language,
  onOpenLightbox,
  emptyTitle,
  emptyDesc,
}) => {
  const isHindi = language === 'hi';

  if (photos.length === 0) {
    return (
      <div className="gallery-empty-state" role="status">
        <div className="empty-state-lotus" aria-hidden="true">🪷</div>
        <h3 className={`empty-state-title ${isHindi ? 'font-devanagari' : ''}`}>
          {emptyTitle}
        </h3>
        <p className={`empty-state-desc ${isHindi ? 'font-devanagari' : ''}`}>
          {emptyDesc}
        </p>
      </div>
    );
  }

  return (
    <div
      id="gallery-photo-grid"
      className="gallery-masonry-grid"
      role="region"
      aria-label={isHindi ? 'तस्वीरों का संकलन' : 'Photo memories collection'}
    >
      {photos.map((photo) => (
        <GalleryPhotoCard
          key={photo.id}
          photo={photo}
          language={language}
          onOpenLightbox={onOpenLightbox}
        />
      ))}
    </div>
  );
};
