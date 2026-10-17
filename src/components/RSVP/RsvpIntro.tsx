import React from 'react';
import { SupportedLanguage } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { LotusDivider } from '../OpeningPage/LotusDivider';

interface RsvpIntroProps {
  language: SupportedLanguage;
  heading: { en: string; hi: string };
  message: { en: string; hi: string };
}

/**
 * Top Introduction of Page 7: RSVP & Guest Confirmation.
 * Displays the H&S royal monogram, chapter pill, bilingual heading,
 * heartfelt message, and gold lotus divider.
 */
export const RsvpIntro: React.FC<RsvpIntroProps> = ({
  language,
  heading,
  message,
}) => {
  const isHindi = language === 'hi';
  const headingText = heading[language] || heading.en;
  const messageText = message[language] || message.en;

  return (
    <section className="rsvp-intro-section" aria-label="RSVP Introduction">
      {/* Monogram Seal */}
      <div className="rsvp-monogram-wrap">
        <WeddingLogo
          className="rsvp-intro-logo"
          namesText=""
          hideLockupNames={true}
          hideSubtitle={true}
        />
      </div>

      {/* Chapter Tagline */}
      <div className="rsvp-chapter-pill">
        <span className="pill-star">✦</span>
        <span className="pill-text">
          {isHindi ? 'उपस्थिति पुष्टि • सादर आमंत्रण' : 'Guest Confirmation & RSVP'}
        </span>
        <span className="pill-star">✦</span>
      </div>

      {/* Main Heading */}
      <h1 className={`rsvp-main-heading ${isHindi ? 'font-devanagari' : ''}`}>
        {headingText}
      </h1>

      {/* Heartfelt Note */}
      <div className="rsvp-intro-quote-wrap">
        <p className={`rsvp-intro-text ${isHindi ? 'font-devanagari intro-hindi' : ''}`}>
          “{messageText}”
        </p>
      </div>

      {/* Lotus Divider */}
      <div className="rsvp-intro-divider">
        <LotusDivider />
      </div>
    </section>
  );
};
