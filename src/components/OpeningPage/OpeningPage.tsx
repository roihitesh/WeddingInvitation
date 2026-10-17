import React, { useState, useEffect } from 'react';
import { OpeningPageProps } from '../../types/invitation';
import { defaultContent } from '../../config/content.config';
import { WeddingLogo } from './WeddingLogo';
import { PalaceArch } from './PalaceArch';
import { PalaceDoors } from './PalaceDoors';
import { PalaceSanctum } from './PalaceSanctum';
import { TopFlourish } from './TopFlourish';
import { LotusDivider } from './LotusDivider';
import { OrnamentalBorder } from './OrnamentalBorder';
import './OpeningPage.css';

/**
 * Opening Page of the Royal Indian Wedding Invitation for Hitesh and Shivanee.
 * Recreates the unforgettable experience of standing before a grand Indian palace entrance.
 * The magnificent closed double doors slowly open in 3D after loading, unveiling
 * the illuminated royal invitation card inside with crystal-clear, high-contrast typography.
 */
export const OpeningPage: React.FC<OpeningPageProps> = ({
  content = defaultContent,
  onOpenInvitation,
}) => {
  const { couple, invitationMessage, openCtaText, openSubtitle, mantraTop, lockupNames } =
    content;

  // Door state: false = closed, true = opened
  const [isDoorsOpen, setIsDoorsOpen] = useState<boolean>(false);

  // Automatically and slowly open the doors after page loading
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const delay = prefersReducedMotion ? 400 : 1200;

    const autoOpenTimer = window.setTimeout(() => {
      setIsDoorsOpen(true);
    }, delay);

    return () => window.clearTimeout(autoOpenTimer);
  }, []);

  const handleManualOpen = () => {
    if (!isDoorsOpen) {
      setIsDoorsOpen(true);
    }
  };

  const handleProceedNext = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if (onOpenInvitation) {
      onOpenInvitation();
    }
  };

  const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProceedNext(e);
    }
  };

  return (
    <main
      className={`opening-page-viewport ${isDoorsOpen ? 'doors-are-open' : 'doors-are-closed'}`}
      role="region"
      aria-label="Hitesh & Shivanee Royal Palace Wedding Invitation"
    >
      {/* 1. Thin, intricate gold ornamental border framing the entire viewport */}
      <OrnamentalBorder />

      {/* 2. Palace Portal Stage & Architecture */}
      <section
        className="palace-portal-container"
        aria-labelledby="invitation-heading"
      >
        {/* Mughal / Rajput Palace Archway with Pillars & Floral Toran */}
        <PalaceArch />

        {/* Palace Gateway Opening Frame (Perspective Stage) */}
        <div className="palace-portal-frame">
          {/* Inner Sanctum: Hosts the royal invitation card INSIDE the open portal */}
          <PalaceSanctum isOpen={isDoorsOpen}>
            <div
              className={`inner-invitation-card ${
                isDoorsOpen ? 'card-revealed' : 'card-concealed'
              }`}
            >
              {/* Top Invocation: ॥ श्री गणेशाय नमः ॥ */}
              <TopFlourish mantra={mantraTop} />

              {/* Custom H&S Wedding Monogram Emblem & Lockup */}
              <div className="logo-container">
                <WeddingLogo namesText={lockupNames || 'HITESH & SHIVANEE'} />
              </div>

              {/* Prominent Couple's Names */}
              <div className="names-container" id="invitation-heading">
                <h1 className="couple-name name-groom">{couple.groom}</h1>
                <span className="ampersand-sign" aria-hidden="true">
                  {couple.ampersand || '&'}
                </span>
                <h1 className="couple-name name-bride">{couple.bride}</h1>
              </div>

              {/* Exact Invitation Message */}
              <div className="message-container">
                <p className="invitation-message-text">“{invitationMessage}”</p>
              </div>

              {/* Antique Gold Lotus Divider */}
              <LotusDivider />

              {/* Interactive Invitation Prompt to Enter Celebrations */}
              <div className="cta-container">
                <button
                  type="button"
                  className="open-invitation-btn"
                  onClick={handleProceedNext}
                  onKeyDown={handleBtnKeyDown}
                  aria-label={`${openCtaText} - ${openSubtitle || 'A celebration of love, family and forever'}`}
                >
                  <span className="cta-text">{openCtaText}</span>
                  <span className="cta-arrow-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3V12M8 12L4 8M8 12L12 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Subtitle Line */}
                <p className="open-invitation-subtitle">
                  {openSubtitle || 'A celebration of love, family and forever.'}
                </p>
              </div>
            </div>
          </PalaceSanctum>

          {/* 3D Double Palace Doors (Sits in front, slowly opens outward) */}
          <PalaceDoors isOpen={isDoorsOpen} onOpen={handleManualOpen} />
        </div>
      </section>
    </main>
  );
};
