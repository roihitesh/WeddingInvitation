import React from 'react';
import { LanguageCardConfig } from '../../types/invitation';

interface LanguageCardEnglishProps {
  config: LanguageCardConfig;
  onSelect: () => void;
}

/**
 * Card A: English Invitation Experience
 * Styled like royal Indian wedding stationery: ivory handmade paper, delicate maroon arch,
 * fine antique-gold borders, blooming lotus motif, and elegant serif typography.
 */
export const LanguageCardEnglish: React.FC<LanguageCardEnglishProps> = ({
  config,
  onSelect,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      className="language-card language-card-english"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={`${config.label}: ${config.title} - ${config.tagline}. Click to enter invitation in English.`}
    >
      {/* Decorative SVG Palace Arch Backdrop for English Stationery */}
      <svg
        className="card-arch-svg"
        viewBox="0 0 320 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="enGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#966e1b" />
            <stop offset="30%" stopColor="#dfb76c" />
            <stop offset="60%" stopColor="#fff2c7" />
            <stop offset="85%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#805710" />
          </linearGradient>

          <filter id="enCardShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3a0810" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Outer Inset Antique Gold Line */}
        <rect
          x="12"
          y="12"
          width="296"
          height="416"
          rx="10"
          stroke="url(#enGoldGrad)"
          strokeWidth="1.4"
        />

        {/* Secondary Fine Dash Line */}
        <rect
          x="18"
          y="18"
          width="284"
          height="404"
          rx="6"
          stroke="url(#enGoldGrad)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.75"
        />

        {/* Delicate Maroon Rajput Arch Silhouette */}
        <path
          d="
            M 36 380
            V 140
            C 36 105 56 80 88 64
            C 106 55 128 50 148 50
            C 154 44 158 36 160 26
            C 162 36 166 44 172 50
            C 192 50 214 55 232 64
            C 264 80 284 105 284 140
            V 380
          "
          stroke="#520f18"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Top Arch Kalash Finial */}
        <g transform="translate(160, 26)">
          <path
            d="M 0 -8 C -2 -8 -3 -5 0 -2 C 3 -5 2 -8 0 -8 Z"
            fill="url(#enGoldGrad)"
          />
          <circle cx="0" cy="-1" r="1.5" fill="url(#enGoldGrad)" />
        </g>
      </svg>

      {/* Card Content Layer */}
      <div className="card-inner-body">
        <div className="card-top-content">
          {/* Blooming Gold Lotus Icon */}
          <div className="card-lotus-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 60 30" width="54" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 4 C27 12 24 20 18 22 C24 22 28 17 30 11 C32 17 36 22 42 22 C36 20 33 12 30 4 Z"
                fill="url(#enGoldGrad)"
              />
              <path
                d="M30 11 C26 18 19 22 10 24 C17 25 24 23 27 19 C28 23 29 25 30 26 C31 25 32 23 33 19 C36 23 43 25 50 24 C41 22 34 18 30 11 Z"
                fill="url(#enGoldGrad)"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Primary Language Title */}
          <h3 className="card-language-title">{config.title}</h3>

          {/* Emotional Tagline */}
          <p className="card-tagline">“{config.tagline}”</p>

          {/* Snippet Note */}
          {config.mantraSnippet && (
            <p className="card-snippet-note">{config.mantraSnippet}</p>
          )}

          {/* Decorative Divider */}
          <div className="card-divider-flourish" aria-hidden="true">
            <span className="flourish-line" />
            <span className="flourish-symbol">✦</span>
            <span className="flourish-line" />
          </div>
        </div>

        {/* Primary Call to Action Button - Anchored to bottom */}
        <button
          type="button"
          tabIndex={-1} // Handled by parent card for full-card touch target
          className="card-cta-button cta-english"
          aria-hidden="true"
        >
          <span>{config.ctaText}</span>
        </button>
      </div>
    </div>
  );
};
