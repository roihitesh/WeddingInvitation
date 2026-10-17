import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface StoryIntroProps {
  language: SupportedLanguage;
  title: { en: string; hi: string };
  intro: { en: string; hi: string };
}

/**
 * Opening section of Page 4: Our Love Story — Hitesh & Shivanee.
 * Displays the authentic royal H&S monogram, romantic bilingual heading,
 * heartfelt opening introduction, and traditional lotus divider.
 */
export const StoryIntro: React.FC<StoryIntroProps> = ({
  language,
  title,
  intro,
}) => {
  const isHindi = language === 'hi';
  const headingText = title[language] || title.en;
  const introText = intro[language] || intro.en;

  return (
    <section className="story-intro-section" aria-label="Our Story Introduction">
      {/* Subtle palace arch ambient watermark in background */}
      <div className="story-intro-backdrop-arch" aria-hidden="true" />

      {/* Monogram Seal */}
      <div className="story-monogram-wrap">
        <WeddingLogo
          className="story-intro-logo"
          namesText=""
          hideLockupNames={true}
          hideSubtitle={true}
        />
      </div>

      {/* Chapter Tagline */}
      <div className="story-chapter-pill">
        <span className="pill-star">✦</span>
        <span className="pill-text">
          {isHindi ? 'प्रेम यात्रा • सात फेरों की ओर' : 'A Journey of Two Souls'}
        </span>
        <span className="pill-star">✦</span>
      </div>

      {/* Page Heading */}
      <h1 className={`story-main-heading ${isHindi ? 'story-heading-hindi' : ''}`}>
        {headingText}
      </h1>

      {/* Romantic Opening Quote */}
      <div className="story-intro-quote-wrap">
        <p className={`story-intro-text ${isHindi ? 'story-intro-hindi' : ''}`}>
          “{introText}”
        </p>
      </div>

      {/* Gold Lotus Divider */}
      <div className="story-intro-divider">
        <LotusDivider />
      </div>
    </section>
  );
};
