import React, { useState, useEffect } from 'react';
import { OpeningPageProps } from '../../types/invitation';
import { defaultContent } from '../../config/content.config';
import { doorThemes, defaultDoorTheme } from '../../config/doorThemes.config';
import { WeddingLogo } from './WeddingLogo';
import { PalaceArch } from './PalaceArch';
import { PalaceDoors } from './PalaceDoors';
import { PalaceSanctum } from './PalaceSanctum';
import { TopFlourish } from './TopFlourish';
import { LotusDivider } from './LotusDivider';
import { OrnamentalBorder } from './OrnamentalBorder';
import { RoyalSideCourt } from './RoyalSideCourt';
import './OpeningPage.css';

/**
 * Opening Page of the Royal Indian Wedding Invitation for Hitesh and Shivanee.
 * Recreates the unforgettable experience of standing before a grand Indian palace entrance.
 * The magnificent double doors automatically and slowly open in 3D after loading, unveiling
 * the illuminated royal invitation card inside with crystal-clear, high-contrast typography.
 */
export const OpeningPage: React.FC<OpeningPageProps> = ({
  content = defaultContent,
  initialTheme = defaultDoorTheme,
  onOpenInvitation,
}) => {
  const { couple, invitationMessage, openCtaText, openSubtitle, mantraTop, lockupNames } =
    content;

  // Active palace door theme
  const doorTheme = initialTheme;

  // Door state: false = closed, true = opened
  const [isDoorsOpen, setIsDoorsOpen] = useState<boolean>(false);

  const activeThemeConfig = doorThemes[doorTheme] || doorThemes[defaultDoorTheme];

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

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleProceedNext = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if (isTransitioning) return;
    setIsTransitioning(true);
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
      className={`opening-page-viewport ${
        isDoorsOpen ? 'doors-are-open' : 'doors-are-closed'
      }`}
      data-theme={doorTheme}
      role="region"
      aria-label="Hitesh & Shivanee Royal Palace Wedding Invitation"
    >
      {/* 1. Thin, intricate gold ornamental border framing the entire viewport */}
      <OrnamentalBorder />

      {/* 1b. Royal Side Courtyard: Hanging Deepams with live flickering flames, cascading toran, royal elephants on both flanks, and pushpa vrishti petals */}
      <RoyalSideCourt />

      {/* 2. Palace Portal Stage & Architecture */}
      <section
        className="palace-portal-container"
        aria-labelledby="invitation-heading"
      >
        {/* Mughal / Rajput Palace Archway with Pillars & Floral Toran */}
        <PalaceArch />

        {/* Palace Gateway Opening Frame (Perspective Stage) */}
        <div
          className="palace-portal-frame"
          style={{ backgroundColor: activeThemeConfig.portalFrameBg }}
        >
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
                <WeddingLogo
                  namesText={lockupNames || 'HITESH & SHIVANEE'}
                  hideLockupNames={true}
                />
              </div>

              {/* Prominent Couple's Names */}
              <div className="names-container" id="invitation-heading">
                <h1
                  className="couple-name name-groom"
                  style={{ color: activeThemeConfig.textHeadline }}
                >
                  {couple.groom}
                </h1>
                <span className="ampersand-sign" aria-hidden="true">
                  {couple.ampersand || '&'}
                </span>
                <h1
                  className="couple-name name-bride"
                  style={{ color: activeThemeConfig.textHeadline }}
                >
                  {couple.bride}
                </h1>
              </div>

              {/* Exact Invitation Message */}
              <div className="message-container">
                <p
                  className="invitation-message-text"
                  style={{ color: activeThemeConfig.textMessage }}
                >
                  “{invitationMessage}”
                </p>
              </div>

              {/* Antique Gold Lotus Divider */}
              <LotusDivider />

              {/* Interactive Invitation Prompt to Enter Celebrations */}
              <div className="cta-container">
                <button
                  type="button"
                  className="open-invitation-btn"
                  style={{ background: activeThemeConfig.ctaGradient }}
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

          {/* 3D Double Palace Doors (Sits in front, slowly opens outward automatically) */}
          <PalaceDoors isOpen={isDoorsOpen} theme={doorTheme} />
        </div>
      </section>
    </main>
  );
};
