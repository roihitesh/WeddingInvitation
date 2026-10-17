import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface CelebrationsIntroProps {
  language: SupportedLanguage;
  heading: { en: string; hi: string };
  intro: { en: string; hi: string };
}

/**
 * Top Introduction of Page 5: Wedding Celebrations.
 * Renders the authentic H&S royal monogram seal, auspicious chapter pill,
 * bilingual heading, romantic introduction, and gold lotus divider.
 */
export const CelebrationsIntro: React.FC<CelebrationsIntroProps> = ({
  language,
  heading,
  intro,
}) => {
  const isHindi = language === 'hi';
  const headingText = heading[language] || heading.en;
  const introText = intro[language] || intro.en;

  return (
    <section className="celebrations-intro-section" aria-label="Wedding Celebrations Introduction">
      {/* Royal Monogram Emblem */}
      <div className="celebrations-monogram-wrap">
        <WeddingLogo
          className="celebrations-intro-logo"
          namesText=""
          hideLockupNames={true}
          hideSubtitle={true}
        />
      </div>

      {/* Auspicious Badge */}
      <div className="celebrations-chapter-pill">
        <span className="pill-star">✦</span>
        <span className="pill-text">
          {isHindi ? 'शुभ मांगलिक उत्सव' : 'Auspicious Festivities'}
        </span>
        <span className="pill-star">✦</span>
      </div>

      {/* Main Page Heading */}
      <h1 className={`celebrations-main-heading ${isHindi ? 'font-devanagari' : ''}`}>
        {headingText}
      </h1>

      {/* Warm Bilingual Intro Text */}
      <div className="celebrations-intro-quote-wrap">
        <p className={`celebrations-intro-text ${isHindi ? 'font-devanagari intro-hindi' : ''}`}>
          “{introText}”
        </p>
      </div>

      {/* Decorative Gold Lotus Divider */}
      <div className="celebrations-intro-divider">
        <LotusDivider />
      </div>
    </section>
  );
};
