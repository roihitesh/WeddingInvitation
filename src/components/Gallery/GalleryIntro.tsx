import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface GalleryIntroProps {
  language: SupportedLanguage;
  heading: { en: string; hi: string };
  intro: { en: string; hi: string };
}

/**
 * Top Introduction of Page 8: Our Memories (Wedding Photo Gallery).
 * Displays the H&S royal monogram, chapter badge, bilingual heading,
 * heartfelt message, and gold lotus divider.
 */
export const GalleryIntro: React.FC<GalleryIntroProps> = ({
  language,
  heading,
  intro,
}) => {
  const isHindi = language === 'hi';
  const headingText = heading[language] || heading.en;
  const introText = intro[language] || intro.en;

  return (
    <section className="gallery-intro-section" aria-label="Gallery Introduction">
      {/* Monogram Seal */}
      <div className="gallery-monogram-wrap">
        <WeddingLogo
          className="gallery-intro-logo"
          namesText=""
          hideLockupNames={true}
          hideSubtitle={true}
        />
      </div>

      {/* Chapter Tagline Pill */}
      <div className="gallery-chapter-pill">
        <span className="pill-star">✦</span>
        <span className="pill-text">
          {isHindi ? 'षष्ठम् अध्याय • अनमोल संस्मरण' : 'Chapter VI • Cherished Memories'}
        </span>
        <span className="pill-star">✦</span>
      </div>

      {/* Main Heading */}
      <h1 className={`gallery-main-heading ${isHindi ? 'font-devanagari' : ''}`}>
        {headingText}
      </h1>

      {/* Heartfelt Note */}
      <div className="gallery-intro-quote-wrap">
        <p className={`gallery-intro-text ${isHindi ? 'font-devanagari intro-hindi' : ''}`}>
          {introText}
        </p>
      </div>

      {/* Lotus Divider */}
      <div className="gallery-intro-divider">
        <LotusDivider />
      </div>
    </section>
  );
};
