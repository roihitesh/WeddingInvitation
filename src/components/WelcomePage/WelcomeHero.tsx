import React from 'react';
import { WeddingDetails, WelcomePageContent } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import { CoupleNames } from './CoupleNames';
import { InvitationMessage } from './InvitationMessage';
import { WeddingDateCountdown } from './WeddingDateCountdown';
import { WelcomeActionButtons } from './WelcomeActionButtons';

interface WelcomeHeroProps {
  content: WelcomePageContent;
  weddingDetails: WeddingDetails;
  isHindi: boolean;
  onExplore: () => void;
  onWishes: () => void;
}

/**
 * WelcomeHero Component:
 * The grand central hero stage of the Royal Wedding Welcome Page.
 * Features:
 * - Scalloped Mughal palace arch framing in antique-gold and deep-maroon
 * - Exact H&S monogram emblem from opening page
 * - Monumentally prominent couple names (Hitesh & Shivanee)
 * - Heartfelt invitation message (Together with our families / परिवार के आशीर्वाद के साथ)
 * - Configurable wedding date and countdown area (graceful fallback when unannounced)
 * - Primary ("Explore Our Wedding") and Secondary ("Send Us Your Wishes") actions
 */
export const WelcomeHero: React.FC<WelcomeHeroProps> = ({
  content,
  weddingDetails,
  isHindi,
  onExplore,
  onWishes,
}) => {
  return (
    <article className="welcome-hero-stage" aria-label="Wedding Welcome Card">
      {/* Grand Mughal Architectural Scalloped Arch Framing SVG */}
      <div className="welcome-hero-arch-frame" aria-hidden="true">
        <svg
          viewBox="0 0 760 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="hero-arch-svg"
        >
          <defs>
            <linearGradient id="heroGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80540d" />
              <stop offset="25%" stopColor="#dfb76c" />
              <stop offset="50%" stopColor="#fff8e7" />
              <stop offset="75%" stopColor="#dfb76c" />
              <stop offset="100%" stopColor="#80540d" />
            </linearGradient>

            <linearGradient id="heroInnerMaroon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#520f18" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#3d070f" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#520f18" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Outer Multi-stroke Golden Frame */}
          <rect
            x="14"
            y="14"
            width="732"
            height="952"
            rx="20"
            stroke="url(#heroGoldBorder)"
            strokeWidth="1.8"
          />
          <rect
            x="24"
            y="24"
            width="712"
            height="932"
            rx="14"
            stroke="url(#heroGoldBorder)"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.7"
          />

          {/* Grand Mughal Scalloped Arch Silhouette */}
          <path
            d="
              M 48 940
              L 48 340
              C 48 240 100 130 200 90
              C 230 78 270 70 320 84
              C 350 92 370 70 380 44
              C 390 70 410 92 440 84
              C 490 70 530 78 560 90
              C 660 130 712 240 712 340
              L 712 940
              Z
            "
            stroke="url(#heroGoldBorder)"
            strokeWidth="1.4"
            fill="url(#heroInnerMaroon)"
          />

          {/* Top Arch Finial Kalash Accent */}
          <g transform="translate(380, 42)">
            <path d="M 0 -12 C -4 -12 -5 -7 0 -2 C 5 -7 4 -12 0 -12 Z" fill="url(#heroGoldBorder)" />
            <circle cx="0" cy="-2" r="2.5" fill="#fff8e7" />
          </g>

          {/* Corner Floral Vines in Arch Shoulders */}
          <g transform="translate(64, 64)" stroke="url(#heroGoldBorder)" strokeWidth="1" fill="none" opacity="0.65">
            <path d="M 0 40 C 10 20 20 10 40 0" />
            <circle cx="20" cy="15" r="2" fill="url(#heroGoldBorder)" />
          </g>
          <g transform="translate(696, 64) scale(-1, 1)" stroke="url(#heroGoldBorder)" strokeWidth="1" fill="none" opacity="0.65">
            <path d="M 0 40 C 10 20 20 10 40 0" />
            <circle cx="20" cy="15" r="2" fill="url(#heroGoldBorder)" />
          </g>
        </svg>
      </div>

      {/* Hero Inner Content Layer */}
      <div className="welcome-hero-content">
        {/* 1. Couple's Royal H&S Monogram Emblem (Exact Asset Reused) */}
        <div className="welcome-emblem-wrap">
          <WeddingLogo
            className="welcome-monogram-logo"
            namesText=""
            hideLockupNames={true}
            hideSubtitle={true}
          />
        </div>

        {/* 2. Couple's Names: Hitesh & Shivanee (Most Visually Prominent) */}
        <CoupleNames
          groom={weddingDetails.groom}
          bride={weddingDetails.bride}
          ampersand={weddingDetails.ampersand}
        />

        {/* 3. Auspicious Invitation Heading & Heartfelt Message */}
        <InvitationMessage
          heading={content.invitationHeading}
          message={content.invitationMessage}
          isHindi={isHindi}
        />

        {/* 4. Wedding Date and Countdown Area */}
        <WeddingDateCountdown
          weddingDetails={weddingDetails}
          isHindi={isHindi}
          awaitingDateTitle={content.dateSection.awaitingDateTitle}
          awaitingDateSubtitle={content.dateSection.awaitingDateSubtitle}
          countdownLabels={content.dateSection.countdownLabels}
          celebrationBegun={content.dateSection.celebrationBegun}
        />

        {/* 5. Main Action Buttons */}
        <WelcomeActionButtons
          primaryText={content.actions.primary}
          secondaryText={content.actions.secondary}
          onExplore={onExplore}
          onWishes={onWishes}
        />
      </div>
    </article>
  );
};
