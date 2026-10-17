import React from 'react';
import {
  LanguageSelectionPageProps,
  SupportedLanguage,
} from '../../types/invitation';
import { defaultLanguageSelectionConfig } from '../../config/languageSelection.config';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';
import { OrnamentalBorder } from '../OpeningPage/OrnamentalBorder';
import { LanguageCardEnglish } from './LanguageCardEnglish';
import { LanguageCardHindi } from './LanguageCardHindi';
import './LanguageSelectionPage.css';

/**
 * Page 3: Choose Your Invitation Language — Hitesh & Shivanee.
 * Follows naturally from the royal palace entrance door opening.
 * Reveals a sacred golden stationery hall where guests select their preferred
 * invitation experience between English (contemporary elegance) and Hindi (traditional Patrika).
 */
export const LanguageSelectionPage: React.FC<LanguageSelectionPageProps> = ({
  onSelectLanguage,
  onBackToOpening,
  config = defaultLanguageSelectionConfig,
}) => {
  const handleSelect = (lang: SupportedLanguage) => {
    onSelectLanguage(lang);
  };

  return (
    <main
      className="language-selection-viewport"
      role="region"
      aria-label="Choose Your Wedding Invitation Language"
    >
      {/* 1. Viewport Perimeter Antique Gold Ornamental Border */}
      <OrnamentalBorder />

      {/* 2. Ambient Golden Light Radiance from the Palace Sanctum */}
      <div className="sanctum-ambient-light" aria-hidden="true" />

      {/* 3. Main Royal Language Selection Container */}
      <div className="language-selection-container">
        {/* Optional Return to Palace Entrance Link */}
        {onBackToOpening && (
          <nav className="back-nav-wrap">
            <button
              type="button"
              className="back-to-palace-btn"
              onClick={onBackToOpening}
              aria-label="Return to palace entrance doors"
            >
              ← Back to Palace Entrance
            </button>
          </nav>
        )}

        {/* Top Header: Couple's Monogram Emblem & Lockup */}
        <header className="selection-header">
          <div className="logo-section">
            <WeddingLogo
              namesText="Hitesh & Shivani"
              cursiveNames={true}
              hideSubtitle={true}
            />
          </div>

          <LotusDivider />

          {/* Welcome Message */}
          <div className="welcome-message-block">
            <h1 className="welcome-main-heading">{config.heading}</h1>
            <p className="welcome-story-subtext">“{config.subheading}”</p>
            {config.promptNote ? (
              <p className="welcome-instruction-pill">{config.promptNote}</p>
            ) : null}
          </div>
        </header>

        {/* 4. Two Creative Invitation Cards (Side by Side on Desktop, Stacked on Mobile) */}
        <section
          className="invitation-cards-deck"
          aria-label="Language Invitation Options"
        >
          {/* Card A: English Invitation Experience */}
          <LanguageCardEnglish
            config={config.cards.en}
            onSelect={() => handleSelect('en')}
          />

          {/* Card B: Hindi Invitation Experience (हिंदी विवाह पत्रिका) */}
          <LanguageCardHindi
            config={config.cards.hi}
            onSelect={() => handleSelect('hi')}
          />
        </section>

        {/* Auspicious Footnote */}
        <footer className="selection-footer-blessing" aria-hidden="true">
          <span className="blessing-rule" />
          <span className="blessing-mantra">॥ ॐ श्री गणेशाय नमः ॥</span>
          <span className="blessing-rule" />
        </footer>
      </div>
    </main>
  );
};
