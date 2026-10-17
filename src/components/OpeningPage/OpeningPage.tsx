import React from 'react';
import { OpeningPageProps } from '../../types/invitation';
import { defaultContent } from '../../config/content.config';
import { WeddingLogo } from './WeddingLogo';
import { PalaceArch } from './PalaceArch';
import { TopFlourish } from './TopFlourish';
import { LotusDivider } from './LotusDivider';
import { OrnamentalBorder } from './OrnamentalBorder';
import './OpeningPage.css';

/**
 * Opening Page of the Royal Indian Wedding Invitation for Hitesh and Shivanee.
 * Designed to resemble a luxury handmade wedding card coming to life with
 * layered palace architecture, antique gold foil ornamentation, and emotional warmth.
 */
export const OpeningPage: React.FC<OpeningPageProps> = ({
  content = defaultContent,
  onOpenInvitation,
}) => {
  const { couple, invitationMessage, openCtaText, mantraTop } = content;

  const handleOpen = () => {
    if (onOpenInvitation) {
      onOpenInvitation();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <main
      className="opening-page-viewport"
      role="region"
      aria-label="Wedding Invitation Opening Card"
    >
      {/* Shared Global SVG Gradients & Filters */}
      <svg className="shared-svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="pageBorderGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9a6c18" />
            <stop offset="30%" stopColor="#dfb76c" />
            <stop offset="55%" stopColor="#fff2c7" />
            <stop offset="80%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#875c13" />
          </linearGradient>

          <linearGradient id="topFlourishGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9a6c18" />
            <stop offset="50%" stopColor="#dfb76c" />
            <stop offset="100%" stopColor="#9a6c18" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Thin, intricate gold ornamental border framing the page */}
      <OrnamentalBorder />

      {/* 2. Layered Royal Wedding Stationery Card */}
      <section className="stationery-card-wrapper" aria-labelledby="invitation-heading">
        {/* Large Symmetrical Indian Palace Arch SVG Backdrop */}
        <PalaceArch />

        {/* Clean Center Content Layer */}
        <div className="card-content-layer">
          {/* Top Decoration: Sanskrit Invocation & Symmetrical Floral Vines */}
          <TopFlourish mantra={mantraTop} />

          {/* Custom H&S Wedding Monogram Logo */}
          <div className="logo-container">
            <WeddingLogo />
          </div>

          {/* Prominent Couple's Names */}
          <div className="names-container" id="invitation-heading">
            <h1 className="couple-name name-groom">{couple.groom}</h1>
            <span className="ampersand-sign" aria-hidden="true">
              {couple.ampersand || '&'}
            </span>
            <h1 className="couple-name name-bride">{couple.bride}</h1>
          </div>

          {/* Invitation Message */}
          <div className="message-container">
            <p className="invitation-message-text">“{invitationMessage}”</p>
          </div>

          {/* Bottom Decoration: Small Lotus Divider */}
          <LotusDivider />

          {/* Subtle Invitation to Continue */}
          <div className="cta-container">
            <button
              type="button"
              className="open-invitation-btn"
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
              aria-label={`${openCtaText} - Proceed to celebration details`}
            >
              <span className="cta-text">{openCtaText}</span>
              <span className="cta-arrow-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
      </section>
    </main>
  );
};
