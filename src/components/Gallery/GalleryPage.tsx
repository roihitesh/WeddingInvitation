import React, { useMemo, useState } from 'react';
import { GalleryPageProps, GalleryPhoto } from '../../types/invitation';
import { defaultGalleryConfig } from '../../config/galleryPage.config';
import { WeddingNav } from '../WelcomePage/WeddingNav';
import { GalleryIntro } from './GalleryIntro';
import { GalleryCategoryTabs } from './GalleryCategoryTabs';
import { FeaturedMemoryCard } from './FeaturedMemoryCard';
import { GalleryPhotoGrid } from './GalleryPhotoGrid';
import { GalleryClosing } from './GalleryClosing';
import { GalleryLightbox } from './GalleryLightbox';
import { RoyalWeddingFooter } from '../FinalClosing/RoyalWeddingFooter';
import '../FinalClosing/FinalClosing.css';
import './GalleryPage.css';

/**
 * Page 8: Our Memories — Royal Wedding Photo Gallery for Hitesh & Shivanee.
 *
 * Implements:
 * - Luxury digital wedding album inspired by Indian wedding photography & royal stationery.
 * - Bilingual English and authentic Devanagari Hindi support.
 * - Smooth filter tabs by category (All Memories, Our Journey, Travel, Special Moments, Celebrations).
 * - Optional Featured Hero Memory card.
 * - Editorial masonry photo grid with natural aspect ratios.
 * - Full-screen Lightbox with keyboard arrow controls, touch gestures, and photo counter.
 * - Bespoke royal Indian art folios for pending couple photos (zero random stock models).
 * - Responsive, accessible, and respecting prefers-reduced-motion.
 */
export const GalleryPage: React.FC<GalleryPageProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  onBackToWelcome,
  onBackToLanguageSelection,
  hideNav = false,
  hideFooter = false,
}) => {
  const config = defaultGalleryConfig;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Compute count of photos per category
  const photoCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: config.photos.length,
    };
    config.photos.forEach((photo) => {
      counts[photo.category] = (counts[photo.category] || 0) + 1;
    });
    return counts;
  }, [config.photos]);

  // Featured memory resolution
  const featuredPhoto = useMemo(() => {
    if (!config.featuredPhotoId) return null;
    return config.photos.find((p) => p.id === config.featuredPhotoId) || null;
  }, [config.featuredPhotoId, config.photos]);

  // Determine if featured card should be displayed in the current category
  const showFeaturedHero = useMemo(() => {
    if (!featuredPhoto) return false;
    return activeCategory === 'all' || activeCategory === featuredPhoto.category;
  }, [featuredPhoto, activeCategory]);

  // Photos for the editorial grid
  const gridPhotos = useMemo(() => {
    let filtered = config.photos;
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    // If the featured card is already shown as the hero at top, omit it from the grid to avoid repetition
    if (showFeaturedHero && featuredPhoto) {
      filtered = filtered.filter((p) => p.id !== featuredPhoto.id);
    }
    return filtered;
  }, [config.photos, activeCategory, showFeaturedHero, featuredPhoto]);

  // All currently active photos for lightbox navigation
  const lightboxPhotoList = useMemo(() => {
    if (activeCategory === 'all') {
      return config.photos;
    }
    return config.photos.filter((p) => p.category === activeCategory);
  }, [config.photos, activeCategory]);

  const handleOpenLightbox = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="royal-gallery-page-container" id="gallery-page-top">
      {/* Top Royal Navigation */}
      {!hideNav && (
        <WeddingNav
          language={language}
          onLanguageChange={onLanguageChange}
          onNavigateSection={onNavigateSection}
          activeSection="gallery"
          onBackToLanguageSelection={onBackToLanguageSelection}
        />
      )}

      {/* Main Page Content */}
      <main className="gallery-main-container">
        {/* Page Introduction */}
        <GalleryIntro
          language={language}
          heading={config.heading}
          intro={config.intro}
        />

        {/* Category Filter Tabs */}
        <GalleryCategoryTabs
          categories={config.categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          language={language}
          photoCounts={photoCounts}
        />

        {/* Optional Featured Hero Memory */}
        {showFeaturedHero && featuredPhoto && (
          <FeaturedMemoryCard
            photo={featuredPhoto}
            language={language}
            badgeLabel={config.labels.featuredBadge[language] || config.labels.featuredBadge.en}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {/* Editorial Masonry Photo Grid */}
        <GalleryPhotoGrid
          photos={gridPhotos}
          language={language}
          onOpenLightbox={handleOpenLightbox}
          emptyTitle={config.labels.emptyTitle[language] || config.labels.emptyTitle.en}
          emptyDesc={config.labels.emptyDesc[language] || config.labels.emptyDesc.en}
        />

        {/* Closing Quote & Navigation Actions */}
        <GalleryClosing
          language={language}
          closing={config.closing}
          onNavigateSection={onNavigateSection}
          onBackToWelcome={onBackToWelcome}
        />
      </main>

      {/* Page 9: Refined Royal Wedding Footer */}
      {!hideFooter && (
        <RoyalWeddingFooter
          language={language}
          onLanguageChange={onLanguageChange}
          onNavigateSection={onNavigateSection}
          activeSection="gallery"
        />
      )}

      {/* Full-screen Lightbox Modal */}
      {selectedPhoto && (
        <GalleryLightbox
          photos={lightboxPhotoList}
          initialPhotoId={selectedPhoto.id}
          language={language}
          onClose={handleCloseLightbox}
          labels={config.labels}
        />
      )}
    </div>
  );
};
