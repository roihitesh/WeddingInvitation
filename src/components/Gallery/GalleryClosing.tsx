import React from 'react';
import { NavSection, SupportedLanguage } from '../../types/invitation';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface GalleryClosingProps {
  language: SupportedLanguage;
  closing: {
    quote: { en: string; hi: string };
    coupleNames: string;
    returnCta: { en: string; hi: string };
  };
  onNavigateSection: (section: NavSection) => void;
  onBackToWelcome?: () => void;
}

/**
 * Romantic closing section for Page 8: Our Memories.
 * Displays the eternal quote, couple signatures, and navigation actions.
 */
export const GalleryClosing: React.FC<GalleryClosingProps> = ({
  language,
  closing,
  onNavigateSection,
  onBackToWelcome,
}) => {
  const isHindi = language === 'hi';
  const quoteText = closing.quote[language] || closing.quote.en;
  const returnLabel = closing.returnCta[language] || closing.returnCta.en;

  const handleReturn = () => {
    if (onBackToWelcome) {
      onBackToWelcome();
    } else {
      onNavigateSection('welcome');
    }
  };

  return (
    <footer className="gallery-closing-section">
      <div className="gallery-closing-divider">
        <LotusDivider />
      </div>

      <div className="gallery-closing-content">
        <div className="gallery-closing-quote-wrap">
          <blockquote className={`gallery-closing-quote ${isHindi ? 'font-devanagari' : ''}`}>
            {quoteText}
          </blockquote>
          <div className="gallery-closing-couple">
            <span className="couple-names-gold">{closing.coupleNames}</span>
          </div>
        </div>

        <div className="gallery-closing-actions">
          <button
            type="button"
            className="gallery-action-btn secondary-btn"
            onClick={handleReturn}
          >
            ← {returnLabel}
          </button>

          <button
            type="button"
            className="gallery-action-btn primary-btn"
            onClick={() => onNavigateSection('rsvp')}
          >
            {isHindi ? 'उपस्थिति पुष्टि करें (RSVP) →' : 'Confirm Your RSVP →'}
          </button>
        </div>
      </div>
    </footer>
  );
};
