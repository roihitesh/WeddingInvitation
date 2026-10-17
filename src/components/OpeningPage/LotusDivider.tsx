import React from 'react';

interface LotusDividerProps {
  className?: string;
}

/**
 * Small Lotus & Ornamental Antique Gold Divider.
 * Placed beneath the invitation message.
 */
export const LotusDivider: React.FC<LotusDividerProps> = ({ className = '' }) => {
  return (
    <div className={`lotus-ornamental-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lotus-divider-svg"
      >
        <defs>
          <linearGradient id="dividerGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9a6c18" stopOpacity="0" />
            <stop offset="25%" stopColor="#dfb76c" />
            <stop offset="50%" stopColor="#fff2c7" />
            <stop offset="75%" stopColor="#dfb76c" />
            <stop offset="100%" stopColor="#9a6c18" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Tapered Line */}
        <line x1="10" y1="14" x2="80" y2="14" stroke="url(#dividerGold)" strokeWidth="1" />
        <circle cx="82" cy="14" r="1.5" fill="#dfb76c" />

        {/* Central Blooming Lotus Motif */}
        <g transform="translate(100, 14)">
          {/* Central Petal */}
          <path
            d="M 0 -9 C -3 -5 -3 0 0 4 C 3 0 3 -5 0 -9 Z"
            fill="url(#dividerGold)"
          />
          {/* Left Petal */}
          <path
            d="M 0 4 C -6 2 -9 -3 -7 -7 C -4 -4 -2 0 0 4 Z"
            fill="url(#dividerGold)"
            opacity="0.85"
          />
          {/* Right Petal */}
          <path
            d="M 0 4 C 6 2 9 -3 7 -7 C 4 -4 2 0 0 4 Z"
            fill="url(#dividerGold)"
            opacity="0.85"
          />
          {/* Lotus Calyx Base */}
          <path
            d="M -7 5 Q 0 8 7 5 Q 0 9 -7 5 Z"
            fill="#c59b27"
          />
          <circle cx="0" cy="5" r="1.2" fill="#fff2c7" />
        </g>

        {/* Right Tapered Line */}
        <circle cx="118" cy="14" r="1.5" fill="#dfb76c" />
        <line x1="120" y1="14" x2="190" y2="14" stroke="url(#dividerGold)" strokeWidth="1" />
      </svg>
    </div>
  );
};
