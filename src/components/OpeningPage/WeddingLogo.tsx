import React from 'react';

interface WeddingLogoProps {
  className?: string;
  namesText?: string;
}

/**
 * Custom H&S Wedding Emblem & Logo Lockup for Hitesh and Shivanee.
 * Inspired by Indian royal seals with intertwined H & S monogram in antique gold,
 * delicate botanical leaves, lotus flourishes, and generous letter-spaced typography lockup.
 */
export const WeddingLogo: React.FC<WeddingLogoProps> = ({
  className = '',
  namesText = 'HITESH & SHIVANEE',
}) => {
  return (
    <div className={`hs-logo-lockup-wrapper ${className}`}>
      <svg
        className="hs-monogram-emblem-svg"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hitesh & Shivanee Royal Monogram Emblem"
      >
        <defs>
          {/* Antique Gold Metallic Foil Gradient */}
          <linearGradient id="antiqueGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#966e1b" />
            <stop offset="22%" stopColor="#dfb76c" />
            <stop offset="48%" stopColor="#fff2c7" />
            <stop offset="72%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#805710" />
          </linearGradient>

          {/* Secondary Muted Champagne Gold */}
          <linearGradient id="champagneGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff2c7" />
            <stop offset="50%" stopColor="#dfb76c" />
            <stop offset="100%" stopColor="#966e1b" />
          </linearGradient>

          {/* Botanical Olive & Gold Leaf Gradient */}
          <linearGradient id="botanicalGoldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7a8d5e" />
            <stop offset="50%" stopColor="#c59b27" />
            <stop offset="100%" stopColor="#5d7344" />
          </linearGradient>

          {/* Embossed Drop Shadow for Royal Stationery Depth */}
          <filter id="royalSealEmboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#220408" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#dfb76c" floodOpacity="0.3" />
          </filter>

          <filter id="goldShimmerGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#dfb76c" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Outer Circular Royal Seal Ring */}
        <circle
          cx="120"
          cy="92"
          r="66"
          fill="none"
          stroke="url(#antiqueGoldMetallic)"
          strokeWidth="1.8"
          filter="url(#royalSealEmboss)"
        />

        {/* Inner Concentric Beaded Halo Ring */}
        <circle
          cx="120"
          cy="92"
          r="61"
          fill="none"
          stroke="url(#antiqueGoldMetallic)"
          strokeWidth="0.8"
          strokeDasharray="2.5 3"
          opacity="0.85"
        />

        {/* Royal Crown Pinnacle / Kalash Accent at Top of Ring */}
        <g transform="translate(120, 20)" filter="url(#goldShimmerGlow)">
          <path
            d="M 0 -8 C -3 -8 -4 -3 0 2 C 4 -3 3 -8 0 -8 Z"
            fill="url(#antiqueGoldMetallic)"
          />
          <circle cx="0" cy="5" r="1.8" fill="url(#champagneGold)" />
          <path
            d="M -7 6 C -4 3 0 4 0 7 C 0 4 4 3 7 6 C 5 8 -5 8 -7 6 Z"
            fill="url(#antiqueGoldMetallic)"
          />
        </g>

        {/* Delicate Botanical Olive / Jasmine Leaf Wreath on Lower-Left Arc */}
        <g
          className="botanical-wreath"
          stroke="url(#botanicalGoldLeaf)"
          fill="url(#botanicalGoldLeaf)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Curving Vine Stem hugging the circle */}
          <path
            d="M 56 84 C 52 110 66 138 104 153 C 116 157 128 156 142 151"
            fill="none"
            strokeWidth="1.6"
          />

          {/* Outer Paired Leaves */}
          <path d="M 53 92 C 44 90 41 83 44 79 C 50 80 53 85 53 92 Z" />
          <path d="M 50 104 C 40 105 36 98 39 93 C 45 94 49 99 50 104 Z" />
          <path d="M 54 116 C 46 120 41 115 42 109 C 48 109 52 113 54 116 Z" />
          <path d="M 64 128 C 54 134 50 129 51 123 C 57 122 62 125 64 128 Z" />
          <path d="M 75 140 C 68 148 62 145 62 138 C 67 136 72 138 75 140 Z" />
          <path d="M 92 148 C 86 157 80 155 79 148 C 85 145 90 146 92 148 Z" />
          <path d="M 111 154 C 108 163 101 163 99 156 C 104 152 109 152 111 154 Z" />
          <path d="M 129 152 C 131 161 125 164 121 158 C 123 153 127 151 129 152 Z" />

          {/* Inward Graceful Leaflets */}
          <path d="M 62 98 C 66 92 72 94 73 100 C 68 102 64 100 62 98 Z" />
          <path d="M 68 112 C 73 107 79 109 80 115 C 75 116 71 115 68 112 Z" />
          <path d="M 80 126 C 86 122 91 125 91 131 C 86 131 82 129 80 126 Z" />
          <path d="M 98 137 C 104 134 109 137 109 143 C 103 143 100 140 98 137 Z" />
        </g>

        {/* Intertwined Calligraphic Initials H and S */}
        <g className="monogram-initials" filter="url(#royalSealEmboss)">
          {/* Classical Roman Serif Letter H */}
          <g className="letter-h-shapes" fill="url(#antiqueGoldMetallic)">
            {/* Left Vertical Stem */}
            <path d="M 85 62 H 97 V 67 H 93 V 116 H 97 V 121 H 85 V 116 H 89 V 67 H 85 Z" />
            {/* Horizontal Crossbar */}
            <path d="M 92.5 88.5 H 119.5 V 93 H 92.5 Z" />
            {/* Right Vertical Stem */}
            <path d="M 115 62 H 127 V 67 H 123 V 116 H 127 V 121 H 115 V 116 H 119 V 67 H 115 Z" />
          </g>

          {/* Antique Gold Flourish Ampersand Accent */}
          <text
            x="122"
            y="98"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="24"
            fontStyle="italic"
            fontWeight="500"
            fill="url(#antiqueGoldMetallic)"
            textAnchor="middle"
            opacity="0.9"
          >
            &amp;
          </text>

          {/* Graceful Calligraphic Serif Letter S Intertwining over H */}
          <path
            className="letter-s-curve"
            d="M 149 74 C 147 68 142 63 134 63 C 124 63 117 69 117 76 C 117 84 123 88 131 91 C 142 95 149 100 149 108 C 149 116 141 122 131 122 C 121 122 114 116 112 109 L 117.5 107 C 118.5 113 123 118 131 118 C 138 118 144 114 144 108 C 144 101 138 97 129 94 C 119 90 112 85 112 77 C 112 70 119 60 134 60 C 142 60 149 65 152 72 Z"
            fill="url(#antiqueGoldMetallic)"
          />
        </g>

        {/* Base Lotus Bud Finial below the seal */}
        <g transform="translate(120, 168)" fill="url(#antiqueGoldMetallic)">
          <path d="M 0 -4 C -4 0 -4 4 0 8 C 4 4 4 0 0 -4 Z" />
          <circle cx="0" cy="11" r="1.5" />
        </g>
      </svg>

      {/* Complete Logo Lockup: Names directly below emblem */}
      <div className="logo-lockup-text">
        <h2 className="lockup-names-title">{namesText}</h2>
        <div className="lockup-rule-wrap" aria-hidden="true">
          <span className="lockup-rule-line" />
          <span className="lockup-rule-diamond">✦</span>
          <span className="lockup-rule-line" />
        </div>
        <p className="lockup-celebration-subtitle">WEDDING CELEBRATION</p>
      </div>
    </div>
  );
};
