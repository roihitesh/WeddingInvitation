import React from 'react';

interface PalaceArchProps {
  className?: string;
}

/**
 * Large symmetrical Indian Palace Arch (Mughal / Rajput Mehraab).
 * Frames the central wedding stationery composition with multi-cusped cusps,
 * floral spandrels, and layered antique gold foil borders.
 */
export const PalaceArch: React.FC<PalaceArchProps> = ({ className = '' }) => {
  return (
    <svg
      className={`palace-arch-svg ${className}`}
      viewBox="0 0 600 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        {/* Antique Gold Linear Gradient */}
        <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a6c18" />
          <stop offset="25%" stopColor="#dfb76c" />
          <stop offset="50%" stopColor="#fff2c7" />
          <stop offset="75%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#875c13" />
        </linearGradient>

        <linearGradient id="vineGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a8d5e" />
          <stop offset="50%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#7a8d5e" />
        </linearGradient>

        {/* Soft shadow for layered stationery effect */}
        <filter id="archShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4a151d" floodOpacity="0.08" />
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#9a6c18" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Group with Stationery Layer Shadow */}
      <g filter="url(#archShadow)">
        {/* Outer Rectangular Border with Inset Corner Notches */}
        <rect
          x="24"
          y="24"
          width="552"
          height="712"
          rx="12"
          stroke="url(#archGold)"
          strokeWidth="1.6"
        />

        {/* Secondary Fine Dash Border */}
        <rect
          x="32"
          y="32"
          width="536"
          height="696"
          rx="8"
          stroke="url(#archGold)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        {/* Top Pinnacle Keystone Crown */}
        <g transform="translate(300, 48)">
          {/* Central Kalash Finial */}
          <path
            d="M0 -18 C-3 -18 -5 -12 0 -6 C5 -12 3 -18 0 -18 Z"
            fill="url(#archGold)"
          />
          <circle cx="0" cy="-3" r="2.5" fill="url(#archGold)" />
          <path
            d="M-8 4 C-8 1 -3 -1 0 0 C3 -1 8 1 8 4 Z"
            fill="url(#archGold)"
          />
          <path
            d="M-5 5 L5 5 L3 12 C2 15 -2 15 -3 12 Z"
            fill="url(#archGold)"
          />
        </g>

        {/* Symmetrical Indian Multi-Cusped Palace Arch (Mehraab) */}
        {/* Outer Heavy Arch Line */}
        <path
          d="
            M 68 700
            V 260
            C 68 220 90 190 125 170
            C 145 158 170 152 195 152
            C 215 138 235 125 260 115
            C 280 106 295 94 300 74
            C 305 94 320 106 340 115
            C 365 125 385 138 405 152
            C 430 152 455 158 475 170
            C 510 190 532 220 532 260
            V 700
          "
          stroke="url(#archGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Delicate Scallop Cusps */}
        <path
          d="
            M 82 700
            V 266
            C 82 230 100 202 132 184
            C 152 173 172 168 194 168
            C 212 154 230 142 254 133
            C 274 125 288 112 300 95
            C 312 112 326 125 346 133
            C 370 142 388 154 406 168
            C 428 168 448 173 468 184
            C 500 202 518 230 518 266
            V 700
          "
          stroke="url(#archGold)"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.8"
        />

        {/* Left Spandrel Botanical Foliage (Vines & Blooms) */}
        <g stroke="url(#vineGold)" fill="url(#archGold)" opacity="0.75">
          <path
            d="M 68 200 C 70 140 110 80 200 68"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Leaves along vine */}
          <path d="M 86 160 C 76 156 75 146 82 142 C 88 146 90 154 86 160 Z" />
          <path d="M 112 128 C 104 120 107 110 115 110 C 119 116 118 124 112 128 Z" />
          <path d="M 148 100 C 142 90 148 82 156 84 C 158 92 154 98 148 100 Z" />
          <path d="M 186 78 C 182 68 190 62 197 66 C 197 74 192 78 186 78 Z" />
          {/* Floral Rozen / Lotus Bud */}
          <circle cx="106" cy="144" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="106" cy="144" r="1.5" />
          <circle cx="160" cy="98" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="160" cy="98" r="1.5" />
        </g>

        {/* Right Spandrel Botanical Foliage (Mirrored) */}
        <g stroke="url(#vineGold)" fill="url(#archGold)" opacity="0.75">
          <path
            d="M 532 200 C 530 140 490 80 400 68"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Leaves along vine */}
          <path d="M 514 160 C 524 156 525 146 518 142 C 512 146 510 154 514 160 Z" />
          <path d="M 488 128 C 496 120 493 110 485 110 C 481 116 482 124 488 128 Z" />
          <path d="M 452 100 C 458 90 452 82 444 84 C 442 92 446 98 452 100 Z" />
          <path d="M 414 78 C 418 68 410 62 403 66 C 403 74 408 78 414 78 Z" />
          {/* Floral Rozen / Lotus Bud */}
          <circle cx="494" cy="144" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="494" cy="144" r="1.5" />
          <circle cx="440" cy="98" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="440" cy="98" r="1.5" />
        </g>

        {/* Left Pillar Capital & Base Details */}
        <g stroke="url(#archGold)" fill="url(#archGold)">
          {/* Left Capital (where arch springs) */}
          <rect x="60" y="258" width="16" height="5" rx="1" strokeWidth="0.8" />
          <path d="M 62 263 L 74 263 L 71 270 L 65 270 Z" strokeWidth="0.8" />
          {/* Left Base */}
          <rect x="60" y="695" width="16" height="6" rx="1" strokeWidth="0.8" />
          <path d="M 64 695 L 72 695 L 74 688 L 62 688 Z" strokeWidth="0.8" />
        </g>

        {/* Right Pillar Capital & Base Details */}
        <g stroke="url(#archGold)" fill="url(#archGold)">
          {/* Right Capital */}
          <rect x="524" y="258" width="16" height="5" rx="1" strokeWidth="0.8" />
          <path d="M 526 263 L 538 263 L 535 270 L 529 270 Z" strokeWidth="0.8" />
          {/* Right Base */}
          <rect x="524" y="695" width="16" height="6" rx="1" strokeWidth="0.8" />
          <path d="M 528 695 L 536 695 L 538 688 L 526 688 Z" strokeWidth="0.8" />
        </g>
      </g>
    </svg>
  );
};
