import React from 'react';

interface WeddingLogoProps {
  className?: string;
}

/**
 * Custom Royal Wedding Monogram for Hitesh and Shivanee.
 * Artistically intertwines serif H & S in antique gold foil gradients
 * with delicate botanical jasmine/olive detailing and traditional royal accents.
 */
export const WeddingLogo: React.FC<WeddingLogoProps> = ({ className = '' }) => {
  return (
    <svg
      className={`hs-wedding-monogram ${className}`}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hitesh and Shivanee Royal Monogram"
    >
      <defs>
        {/* Antique Gold Metallic Foil Gradient */}
        <linearGradient id="antiqueGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a6c18" />
          <stop offset="22%" stopColor="#dfb76c" />
          <stop offset="48%" stopColor="#fff2c7" />
          <stop offset="72%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#875c13" />
        </linearGradient>

        {/* Botanical Olive & Gold Leaf Gradient */}
        <linearGradient id="botanicalLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7a8d5e" />
          <stop offset="50%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#627848" />
        </linearGradient>

        {/* Soft Warm Embossed Drop Shadow */}
        <filter id="royalGoldDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#70440e" floodOpacity="0.32" />
        </filter>

        {/* Delicate Inner Ring Dash */}
        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#dfb76c" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Delicate Gold Ring */}
      <circle
        cx="120"
        cy="92"
        r="64"
        fill="none"
        stroke="url(#antiqueGoldGrad)"
        strokeWidth="1.6"
        filter="url(#royalGoldDrop)"
      />

      {/* Inner Concentric Beaded Halo Ring */}
      <circle
        cx="120"
        cy="92"
        r="60"
        fill="none"
        stroke="url(#antiqueGoldGrad)"
        strokeWidth="0.7"
        strokeDasharray="2 3"
        opacity="0.8"
      />

      {/* Symmetrical Palace Pinnacle Bud at Top of Ring */}
      <path
        d="M120 22 C118 25 116 27 120 31 C124 27 122 25 120 22 Z"
        fill="url(#antiqueGoldGrad)"
      />
      <circle cx="120" cy="27" r="1.5" fill="#fff2c7" />

      {/* Botanical Olive & Jasmine Branch Hugging the Lower-Left Arc */}
      <g
        className="botanical-branch"
        stroke="url(#botanicalLeafGrad)"
        fill="url(#botanicalLeafGrad)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Curving Vine Hugging Ring */}
        <path
          d="M58 86 C54 110 68 138 104 151 C116 155 128 154 140 149"
          fill="none"
          strokeWidth="1.6"
        />

        {/* Outer Delicate Pointed Leaves */}
        <path d="M55 94 C46 92 43 85 46 81 C52 82 55 87 55 94 Z" />
        <path d="M52 106 C42 107 38 100 41 95 C47 96 51 101 52 106 Z" />
        <path d="M56 118 C48 122 43 117 44 111 C50 111 54 115 56 118 Z" />
        <path d="M66 130 C56 136 52 131 53 125 C59 124 64 127 66 130 Z" />
        <path d="M77 141 C70 149 64 146 64 139 C69 137 74 139 77 141 Z" />
        <path d="M94 149 C88 158 82 156 81 149 C87 146 92 147 94 149 Z" />
        <path d="M113 154 C110 163 103 163 101 156 C106 152 111 152 113 154 Z" />
        <path d="M130 151 C132 160 126 163 122 157 C124 152 128 150 130 151 Z" />

        {/* Inward Facing Graceful Leaflets */}
        <path d="M64 100 C68 94 74 96 75 102 C70 104 66 102 64 100 Z" />
        <path d="M70 114 C75 109 81 111 82 117 C77 118 73 117 70 114 Z" />
        <path d="M82 128 C88 124 93 127 93 133 C88 133 84 131 82 128 Z" />
        <path d="M100 138 C106 135 111 138 111 144 C105 144 102 141 100 138 Z" />
      </g>

      {/* Artistically Intertwined Serif Initials H & S */}
      <g className="hs-intertwined-letters" filter="url(#royalGoldDrop)">
        {/* Roman High-Contrast Serif Letter H */}
        <g className="letter-h" fill="url(#antiqueGoldGrad)">
          {/* Left Vertical Pillar */}
          <path d="M86 63 H97 V68 H93.5 V115 H97 V120 H86 V115 H89.5 V68 H86 Z" />
          {/* Elegant Horizontal Crossbar */}
          <path d="M93 89 H118 V93.5 H93 Z" />
          {/* Right Vertical Pillar */}
          <path d="M114 63 H125 V68 H121.5 V115 H125 V120 H114 V115 H117.5 V68 H114 Z" />
        </g>

        {/* Antique Gold Flourish Ampersand Link */}
        <text
          x="122"
          y="98"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="24"
          fontStyle="italic"
          fill="url(#antiqueGoldGrad)"
          textAnchor="middle"
          opacity="0.9"
        >
          &amp;
        </text>

        {/* Graceful Calligraphic Serif Letter S Intertwining over H */}
        <path
          className="letter-s"
          d="M148 75 C146 69 141 64 133 64 C124 64 117 70 117 77 C117 85 123 89 131 92 C142 96 148 101 148 109 C148 117 140 122 130 122 C121 122 114 116 112 109 L117 107 C118 113 123 118 130 118 C137 118 143 114 143 108 C143 101 137 97 128 94 C118 90 112 85 112 77 C112 70 119 61 133 61 C141 61 148 66 151 73 Z"
          fill="url(#antiqueGoldGrad)"
        />
      </g>

      {/* Typography: HITESH & SHIVANEE */}
      <text
        x="120"
        y="186"
        textAnchor="middle"
        fontFamily="'Cinzel', 'Playfair Display', 'Cormorant Garamond', serif"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="4.5"
        fill="url(#antiqueGoldGrad)"
        filter="url(#subtleGlow)"
      >
        HITESH &amp; SHIVANEE
      </text>

      {/* Decorative Horizontal Separator Rule with Diamond Bead */}
      <line
        x1="68"
        y1="195"
        x2="172"
        y2="195"
        stroke="url(#antiqueGoldGrad)"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <circle cx="120" cy="195" r="2.2" fill="url(#antiqueGoldGrad)" />

      {/* Subtitle: WEDDING CELEBRATION */}
      <text
        x="120"
        y="210"
        textAnchor="middle"
        fontFamily="'Cinzel', 'DM Sans', sans-serif"
        fontSize="8.5"
        fontWeight="500"
        letterSpacing="3.8"
        fill="#9a6c18"
      >
        WEDDING CELEBRATION
      </text>
    </svg>
  );
};
