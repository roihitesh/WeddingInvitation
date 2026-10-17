import React from 'react';

interface PalaceSanctumProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

/**
 * Inner Palace Sanctum revealed behind the 3D double doors.
 * Hosts the royal invitation stationery card bathed in warm golden light,
 * divine diya radiance, and crystal-clear high-contrast typography.
 */
export const PalaceSanctum: React.FC<PalaceSanctumProps> = ({
  isOpen,
  children,
}) => {
  return (
    <div
      className={`palace-sanctum-backdrop ${isOpen ? 'sanctum-active' : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Radiant Golden Sunburst Rays */}
      <div className="sanctum-light-burst" aria-hidden="true" />

      {/* Central Diya / Sacred Aura */}
      <div className="sanctum-central-glow" aria-hidden="true" />

      {/* Inner Palace Pavilion Arch Silhouette */}
      <svg
        className="sanctum-inner-arch-svg"
        viewBox="0 0 540 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Warm Ivory to Champagne Gradient for the Inner Sanctum Canvas */}
          <radialGradient id="innerCardPaperGrad" cx="50%" cy="36%" r="65%">
            <stop offset="0%" stopColor="#fffef9" />
            <stop offset="45%" stopColor="#faf5ec" />
            <stop offset="80%" stopColor="#f4e8d4" />
            <stop offset="100%" stopColor="#edd8bc" />
          </radialGradient>

          <linearGradient id="innerSanctumGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c59b27" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#966e1b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Inner Card Paper Surface */}
        <rect width="540" height="760" fill="url(#innerCardPaperGrad)" />

        {/* Inset Gold Architectural Framing Lines */}
        <rect
          x="16"
          y="16"
          width="508"
          height="728"
          rx="6"
          stroke="url(#innerSanctumGold)"
          strokeWidth="1.2"
        />
        <rect
          x="22"
          y="22"
          width="496"
          height="716"
          rx="4"
          stroke="url(#innerSanctumGold)"
          strokeWidth="0.6"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        {/* Distant Inner Palace Pavilion Cusped Arch Silhouette */}
        <path
          d="
            M 60 720
            V 260
            C 60 210 85 180 135 158
            C 160 146 186 140 216 140
            C 236 128 254 116 270 94
            C 286 116 304 128 324 140
            C 354 140 380 146 405 158
            C 455 180 480 210 480 260
            V 720
          "
          stroke="url(#innerSanctumGold)"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Floating Sparkles in the Golden Light */}
      <div className="sanctum-sparkles" aria-hidden="true">
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✧</span>
        <span className="sparkle s3">✦</span>
        <span className="sparkle s4">✧</span>
        <span className="sparkle s5">✦</span>
        <span className="sparkle s6">✧</span>
      </div>

      {/* Sacred Invitation Card Content Inside the Opened Portal */}
      <div className="sanctum-card-content">{children}</div>
    </div>
  );
};
