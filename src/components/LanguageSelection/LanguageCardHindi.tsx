import React from 'react';
import { LanguageCardConfig } from '../../types/invitation';

interface LanguageCardHindiProps {
  config: LanguageCardConfig;
  onSelect: () => void;
}

/**
 * Card B: Hindi Invitation Experience (हिंदी विवाह पत्रिका)
 * Styled like authentic traditional Hindu wedding stationery: deep maroon ornamental frame,
 * antique gold mandala cutwork, Kalash motif, and graceful Devanagari typography.
 */
export const LanguageCardHindi: React.FC<LanguageCardHindiProps> = ({
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
      className="language-card language-card-hindi"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={`${config.label}: ${config.title} - ${config.tagline}. निमंत्रण पत्रिका देखने के लिए क्लिक करें।`}
    >
      {/* Decorative Traditional Patrika SVG Frame with Deep Maroon & Gold Detailing */}
      <svg
        className="card-arch-svg"
        viewBox="0 0 320 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hiGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#966e1b" />
            <stop offset="25%" stopColor="#dfb76c" />
            <stop offset="50%" stopColor="#fff2c7" />
            <stop offset="75%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#805710" />
          </linearGradient>

          <linearGradient id="hiMaroonBorder" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#520f18" />
            <stop offset="50%" stopColor="#3d070f" />
            <stop offset="100%" stopColor="#520f18" />
          </linearGradient>
        </defs>

        {/* Deep Maroon Heavy Outer Margin Frame */}
        <rect
          x="10"
          y="10"
          width="300"
          height="420"
          rx="10"
          stroke="url(#hiMaroonBorder)"
          strokeWidth="2"
        />

        {/* Inset Fine Gold Trim */}
        <rect
          x="16"
          y="16"
          width="288"
          height="408"
          rx="7"
          stroke="url(#hiGoldGrad)"
          strokeWidth="1"
        />

        {/* Corner Ornamental Filigrees */}
        {/* Top-Left */}
        <path d="M 20 34 L 34 20 M 20 28 L 28 20" stroke="url(#hiGoldGrad)" strokeWidth="0.8" />
        {/* Top-Right */}
        <path d="M 300 34 L 286 20 M 300 28 L 292 20" stroke="url(#hiGoldGrad)" strokeWidth="0.8" />
        {/* Bottom-Left */}
        <path d="M 20 406 L 34 420 M 20 412 L 28 420" stroke="url(#hiGoldGrad)" strokeWidth="0.8" />
        {/* Bottom-Right */}
        <path d="M 300 406 L 286 420 M 300 412 L 292 420" stroke="url(#hiGoldGrad)" strokeWidth="0.8" />

        {/* Traditional Multi-Cusped Hindu Mehraab Arch */}
        <path
          d="
            M 32 380
            V 145
            C 32 110 50 85 80 72
            C 98 64 116 60 134 60
            C 142 52 150 42 160 30
            C 170 42 178 52 186 60
            C 204 60 222 64 240 72
            C 270 85 288 110 288 145
            V 380
          "
          stroke="url(#hiGoldGrad)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.8"
        />

        {/* Sacred Kalash Finial with Coconut & Mango Leaves */}
        <g transform="translate(160, 32)">
          {/* Kalash Pot */}
          <path
            d="M -7 10 C -9 15 9 15 7 10 Z"
            fill="url(#hiGoldGrad)"
          />
          {/* Coconut */}
          <circle cx="0" cy="5" r="4.5" fill="url(#hiGoldGrad)" />
          {/* Mango Leaves */}
          <path d="M 0 5 L -6 0" stroke="url(#hiGoldGrad)" strokeWidth="1" />
          <path d="M 0 5 L 6 0" stroke="url(#hiGoldGrad)" strokeWidth="1" />
          <path d="M 0 5 L 0 -2" stroke="url(#hiGoldGrad)" strokeWidth="1.2" />
        </g>
      </svg>

      {/* Card Content Layer */}
      <div className="card-inner-body">
        {/* Traditional Auspicious Pill Tag */}
        <span className="card-experience-pill pill-hindi">{config.label}</span>

        {/* Auspicious Sacred Swastik / Ganesha Mandala Motif */}
        <div className="card-lotus-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 60 30" width="54" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 15)">
              {/* Traditional Auspicious Mandala Sunburst */}
              <circle cx="0" cy="0" r="10" stroke="url(#hiGoldGrad)" strokeWidth="1" strokeDasharray="2 1.5" />
              <circle cx="0" cy="0" r="5" fill="#520f18" />
              <circle cx="0" cy="0" r="2" fill="url(#hiGoldGrad)" />
              {/* Symmetrical Petal Rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2="12"
                  y2="0"
                  stroke="url(#hiGoldGrad)"
                  strokeWidth="0.8"
                  transform={`rotate(${ang})`}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Primary Language Title in Devanagari */}
        <h3 className="card-language-title title-hindi">{config.title}</h3>

        {/* Culturally Meaningful Hindi Tagline */}
        <p className="card-tagline tagline-hindi">“{config.tagline}”</p>

        {/* Traditional Invocation Mantra Snippet */}
        {config.mantraSnippet && (
          <p className="card-snippet-note note-hindi">{config.mantraSnippet}</p>
        )}

        {/* Decorative Divider */}
        <div className="card-divider-flourish" aria-hidden="true">
          <span className="flourish-line" />
          <span className="flourish-symbol">卐</span>
          <span className="flourish-line" />
        </div>

        {/* Primary Call to Action Button */}
        <button
          type="button"
          tabIndex={-1}
          className="card-cta-button cta-hindi"
          aria-hidden="true"
        >
          <span>{config.ctaText}</span>
        </button>
      </div>
    </div>
  );
};
