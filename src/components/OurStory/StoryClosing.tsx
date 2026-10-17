import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface StoryClosingProps {
  language: SupportedLanguage;
  quote: { en: string; hi: string };
  coupleNames: string;
  ctaText: { en: string; hi: string };
  onExploreCelebrations?: () => void;
}

/**
 * Emotional Closing Section for Page 4: Our Love Story — Hitesh & Shivanee.
 * Displays:
 * - Large decorative gold divider
 * - Authentic H&S royal monogram
 * - Romantic closing quote
 * - Couple names: Hitesh & Shivanee
 * - Action button to continue to Celebrations page
 */
export const StoryClosing: React.FC<StoryClosingProps> = ({
  language,
  quote,
  coupleNames,
  ctaText,
  onExploreCelebrations,
}) => {
  const isHindi = language === 'hi';
  const quoteText = quote[language] || quote.en;
  const buttonText = ctaText[language] || ctaText.en;

  return (
    <section className="story-closing-section" aria-label="Closing Blessing">
      {/* Large Decorative Gold Lotus Divider */}
      <div className="story-closing-top-divider">
        <LotusDivider />
      </div>

      <div className="story-closing-card">
        {/* Monogram Seal */}
        <div className="closing-monogram-wrap">
          <WeddingLogo
            className="closing-monogram-logo"
            namesText=""
            hideLockupNames={true}
            hideSubtitle={true}
          />
        </div>

        {/* Closing Emotional Reflection */}
        <blockquote className={`story-closing-quote ${isHindi ? 'closing-quote-hindi' : ''}`}>
          “{quoteText}”
        </blockquote>

        {/* Signature Couple Names */}
        <div className="story-closing-signature">
          <span className="signature-ornament-left">✦</span>
          <h3 className="signature-names">{coupleNames}</h3>
          <span className="signature-ornament-right">✦</span>
        </div>

        <p className="story-closing-subtext">
          {isHindi
            ? 'हमारे विवाह उत्सव की मंगलमय शुरुआत में आपका स्वागत है'
            : 'We look forward to welcoming you into our celebration of love'}
        </p>

        {/* Action Button: Explore Celebrations */}
        <div className="story-closing-actions">
          <button
            type="button"
            className="story-cta-celebrations-btn"
            onClick={onExploreCelebrations}
            aria-label={buttonText}
          >
            <span className="btn-shimmer" aria-hidden="true" />
            <span className="btn-icon">🪔</span>
            <span className="btn-text">{buttonText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
