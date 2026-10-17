import React from 'react';

interface TopFlourishProps {
  mantra?: string;
  className?: string;
}

/**
 * Symmetrical Top Ornamental Motif and Sanskrit Invocation Header.
 * Features an auspicious crown motif with flanking symmetrical floral vines.
 */
export const TopFlourish: React.FC<TopFlourishProps> = ({
  mantra = '॥ श्री गणेशाय नमः ॥',
  className = '',
}) => {
  return (
    <div className={`top-ornamental-motif ${className}`}>
      {/* Symmetrical Left Floral Vine */}
      <svg
        className="top-flourish-side side-left"
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 12 C75 12 60 4 40 12 C25 18 15 14 0 12"
          stroke="url(#topFlourishGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="11" r="2.2" fill="url(#topFlourishGold)" />
        <circle cx="55" cy="8" r="1.8" fill="url(#topFlourishGold)" />
        <path
          d="M70 12 C65 7 58 8 60 13 C66 14 69 13 70 12 Z"
          fill="url(#topFlourishGold)"
        />
        <path
          d="M38 12 C33 7 26 8 28 13 C34 14 37 13 38 12 Z"
          fill="url(#topFlourishGold)"
        />
      </svg>

      {/* Central Sacred Invocation Badge */}
      <div className="top-mantra-badge">
        <span className="flourish-symbol" aria-hidden="true">
          ꧁
        </span>
        <span className="mantra-text">{mantra}</span>
        <span className="flourish-symbol" aria-hidden="true">
          ꧂
        </span>
      </div>

      {/* Symmetrical Right Floral Vine */}
      <svg
        className="top-flourish-side side-right"
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 12 C25 12 40 4 60 12 C75 18 85 14 100 12"
          stroke="url(#topFlourishGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="80" cy="11" r="2.2" fill="url(#topFlourishGold)" />
        <circle cx="45" cy="8" r="1.8" fill="url(#topFlourishGold)" />
        <path
          d="M30 12 C35 7 42 8 40 13 C34 14 31 13 30 12 Z"
          fill="url(#topFlourishGold)"
        />
        <path
          d="M62 12 C67 7 74 8 72 13 C66 14 63 13 62 12 Z"
          fill="url(#topFlourishGold)"
        />
      </svg>
    </div>
  );
};
