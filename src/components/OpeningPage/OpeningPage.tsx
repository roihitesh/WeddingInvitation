import React, { useState, useRef, useEffect } from 'react';
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
 * Recreates the unforgettable experience of standing before a grand Indian palace entrance
 * with interactive 3D maroon & antique-gold double doors that swing open to reveal
 * the illuminated inner celebration sanctum.
 */
export const OpeningPage: React.FC<OpeningPageProps> = ({
  content = defaultContent,
  onOpenInvitation,
}) => {
  const { couple, invitationMessage, openCtaText, openSubtitle, mantraTop, lockupNames } =
    content;

  // Door opening state: 'closed' | 'opening' | 'opened'
  const [doorState, setDoorState] = useState<'closed' | 'opening' | 'opened'>('closed');
  const timerRef = useRef<number | null>(null);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleTriggerOpen = () => {
    if (doorState !== 'closed') return;

    // Check prefers-reduced-motion for accessibility
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setDoorState('opening');

    const duration = prefersReducedMotion ? 400 : 1750;

    timerRef.current = window.setTimeout(() => {
      setDoorState('opened');
      if (onOpenInvitation) {
        onOpenInvitation();
      }
    }, duration);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTriggerOpen();
    }
  };

  const isDoorsOpening = doorState === 'opening' || doorState === 'opened';

  return (
    <main
      className={`opening-page-viewport ${isDoorsOpening ? 'experience-opening' : ''}`}
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
          {/* Inner Sanctum with radiant golden light beams (Behind the doors) */}
          <PalaceSanctum isOpen={isDoorsOpening} />

          {/* 3D Double Palace Doors (Interactive, swings open outward) */}
          <PalaceDoors isOpen={isDoorsOpening} onOpen={handleTriggerOpen}>
            {/* Royal Wedding Invitation Content (Embossed on the Entrance Portal) */}
            <div
              className={`portal-content-facade ${
                isDoorsOpening ? 'facade-dissolving' : ''
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

              {/* Interactive Invitation Prompt */}
              <div className="cta-container">
                <button
                  type="button"
                  className="open-invitation-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent duplicate trigger from doors parent
                    handleTriggerOpen();
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={isDoorsOpening}
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
          </PalaceDoors>
        </div>
      </section>
    </main>
  );
};
