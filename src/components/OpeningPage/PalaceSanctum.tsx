import React from 'react';

interface PalaceSanctumProps {
  isOpen: boolean;
}

/**
 * Inner Palace Sanctum revealed behind the 3D double doors.
 * Radiates warm golden light beams, floating diya glow, and sacred ambience
 * as the grand doors swing open.
 */
export const PalaceSanctum: React.FC<PalaceSanctumProps> = ({ isOpen }) => {
  return (
    <div
      className={`palace-sanctum-backdrop ${isOpen ? 'sanctum-active' : ''}`}
      aria-hidden="true"
    >
      {/* Radiant Golden Sunburst Rays */}
      <div className="sanctum-light-burst" />

      {/* Central Warm Diya / Chandelier Aura */}
      <div className="sanctum-central-glow" />

      {/* Sacred Inner Arch Silhouette */}
      <svg
        className="sanctum-inner-arch-svg"
        viewBox="0 0 500 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sanctumGlowGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#fff9e6" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#f3d893" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#c59b27" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4a0f18" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="innerArchGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff2c7" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#dfb76c" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#966e1b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer radial glow field */}
        <rect width="500" height="700" fill="url(#sanctumGlowGrad)" opacity="0.85" />

        {/* Distant Inner Palace Pavilion Arch */}
        <path
          d="
            M 120 700
            V 340
            C 120 280 150 240 200 210
            C 225 195 245 175 250 150
            C 255 175 275 195 300 210
            C 350 240 380 280 380 340
            V 700
          "
          stroke="url(#innerArchGold)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Auspicious Sacred Diya / Kalash at Sanctum Center */}
        <g transform="translate(250, 310)" opacity="0.9">
          {/* Flame radiance rings */}
          <circle cx="0" cy="0" r="42" fill="#fff5d0" opacity="0.3" filter="blur(8px)" />
          <circle cx="0" cy="0" r="22" fill="#ffe082" opacity="0.5" filter="blur(4px)" />

          {/* Diya Flame */}
          <path
            d="M 0 -22 C -6 -12 -5 -3 0 5 C 5 -3 6 -12 0 -22 Z"
            fill="#fff9e6"
          />
          <path
            d="M 0 -17 C -3 -10 -2 -4 0 2 C 2 -4 3 -10 0 -17 Z"
            fill="#ffd54f"
          />

          {/* Brass Diya Bowl */}
          <path
            d="M -16 6 C -18 14 18 14 16 6 Z"
            fill="url(#innerArchGold)"
          />
          <path
            d="M -6 14 L 6 14 L 8 18 L -8 18 Z"
            fill="url(#innerArchGold)"
          />
        </g>
      </svg>

      {/* Floating Shimmer Sparkles */}
      <div className="sanctum-sparkles" aria-hidden="true">
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✧</span>
        <span className="sparkle s3">✦</span>
        <span className="sparkle s4">✧</span>
        <span className="sparkle s5">✦</span>
        <span className="sparkle s6">✧</span>
      </div>
    </div>
  );
};
