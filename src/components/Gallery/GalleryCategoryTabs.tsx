import React from 'react';
import { GalleryCategory, SupportedLanguage } from '../../types/invitation';

interface GalleryCategoryTabsProps {
  categories: GalleryCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  language: SupportedLanguage;
  photoCounts: Record<string, number>;
}

/**
 * Filter Tabs for browsing gallery photos by category:
 * - All Memories
 * - Our Journey
 * - Travel Diaries
 * - Special Moments
 * - Celebrations
 *
 * Provides smooth category filtering without page reloads,
 * accessible keyboard tablist navigation, and royal gold accents.
 */
export const GalleryCategoryTabs: React.FC<GalleryCategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  language,
  photoCounts,
}) => {
  const isHindi = language === 'hi';

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % categories.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + categories.length) % categories.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = categories.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      onSelectCategory(categories[nextIndex].id);
      const targetBtn = document.getElementById(`gallery-tab-${categories[nextIndex].id}`);
      targetBtn?.focus();
    }
  };

  return (
    <nav
      className="gallery-category-nav"
      aria-label={isHindi ? 'यादों की श्रेणियाँ' : 'Memory categories filter'}
    >
      <div className="gallery-category-tabs" role="tablist">
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat.id;
          const label = cat.label[language] || cat.label.en;
          const count = photoCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              id={`gallery-tab-${cat.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="gallery-photo-grid"
              tabIndex={isActive ? 0 : -1}
              className={`gallery-category-pill ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {cat.icon && <span className="category-pill-icon" aria-hidden="true">{cat.icon}</span>}
              <span className={`category-pill-label ${isHindi ? 'font-devanagari' : ''}`}>{label}</span>
              <span className="category-pill-count" aria-label={`${count} items`}>
                {count}
              </span>
              {isActive && <span className="pill-active-indicator" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
