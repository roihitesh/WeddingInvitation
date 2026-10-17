import React from 'react';

interface PalaceArchProps {
  className?: string;
}

/**
 * Grand Symmetrical Indian Palace Archway & Portal (Toran Mehraab).
 * Frames the maroon double-door palace entrance with multi-cusped cusps,
 * carved sandstone pillars, and traditional marigold & jasmine floral garlands (toran).
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
        {/* Antique Gold Metallic Foil Linear Gradient */}
        <linearGradient id="portalArchGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#966e1b" />
          <stop offset="25%" stopColor="#dfb76c" />
          <stop offset="50%" stopColor="#fff2c7" />
          <stop offset="75%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#805710" />
        </linearGradient>

        {/* Marigold Orange / Saffron Gradient */}
        <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb300" />
          <stop offset="50%" stopColor="#f57c00" />
          <stop offset="100%" stopColor="#e65100" />
        </linearGradient>

        {/* Jasmine Cream Gradient */}
        <linearGradient id="jasmineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fff9e6" />
          <stop offset="100%" stopColor="#ffe082" />
        </linearGradient>

        {/* Spandrel Botanical Vine Gold */}
        <linearGradient id="portalVineGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a8d5e" />
          <stop offset="50%" stopColor="#c59b27" />
          <stop offset="100%" stopColor="#7a8d5e" />
        </linearGradient>

        {/* Outer Shadow for Layered Palace Architecture */}
        <filter id="portalFrameShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#3a0810" floodOpacity="0.22" />
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#966e1b" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#portalFrameShadow)">
        {/* Outer Rectangular Border with Inset Corner Notches */}
        <rect
          x="16"
          y="16"
          width="568"
          height="728"
          rx="12"
          stroke="url(#portalArchGold)"
          strokeWidth="2"
        />

        {/* Secondary Fine Dash Border */}
        <rect
          x="24"
          y="24"
          width="552"
          height="712"
          rx="8"
          stroke="url(#portalArchGold)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.75"
        />

        {/* TOP PINNACLE / KALASH KEYSTONE CROWN */}
        <g transform="translate(300, 42)">
          {/* Central Sacred Kalash Finial */}
          <path
            d="M 0 -22 C -4 -22 -6 -14 0 -6 C 6 -14 4 -22 0 -22 Z"
            fill="url(#portalArchGold)"
          />
          <circle cx="0" cy="-3" r="3" fill="#fff8e7" />
          <path
            d="M -12 6 C -12 1 -4 -1 0 0 C 4 -1 12 1 12 6 Z"
            fill="url(#portalArchGold)"
          />
          <path
            d="M -8 7 L 8 7 L 5 15 C 3 18 -3 18 -5 15 Z"
            fill="url(#portalArchGold)"
          />
          {/* Side Lotus Petals */}
          <path d="M -14 8 C -22 6 -20 0 -14 4 Z" fill="url(#portalArchGold)" />
          <path d="M 14 8 C 22 6 20 0 14 4 Z" fill="url(#portalArchGold)" />
        </g>

        {/* SYMMETRICAL MULTI-CUSPED INDIAN PALACE ARCH (MEHRAAB) */}
        {/* Outer Heavy Arch Line */}
        <path
          d="
            M 52 710
            V 260
            C 52 215 76 182 115 162
            C 138 149 166 142 195 142
            C 216 128 238 114 264 104
            C 284 94 296 82 300 60
            C 304 82 316 94 336 104
            C 362 114 384 128 405 142
            C 434 142 462 149 485 162
            C 524 182 548 215 548 260
            V 710
          "
          stroke="url(#portalArchGold)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Delicate Cusped Scallop */}
        <path
          d="
            M 66 710
            V 266
            C 66 226 86 196 122 177
            C 144 165 168 159 194 159
            C 214 145 233 133 257 123
            C 277 114 290 102 300 84
            C 310 102 323 114 343 123
            C 367 133 386 145 406 159
            C 432 159 456 165 478 177
            C 514 196 534 226 534 266
            V 710
          "
          stroke="url(#portalArchGold)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.8"
        />

        {/* LEFT SPANDREL BOTANICAL VINES & BLOOMS */}
        <g stroke="url(#portalVineGold)" fill="url(#portalArchGold)" opacity="0.8">
          <path
            d="M 52 190 C 56 125 104 68 198 56"
            strokeWidth="1.4"
            fill="none"
          />
          {/* Leaves along vine */}
          <path d="M 72 152 C 60 148 60 136 68 132 C 75 136 78 145 72 152 Z" />
          <path d="M 102 118 C 92 110 96 98 105 100 C 110 106 108 114 102 118 Z" />
          <path d="M 142 88 C 134 78 142 70 150 72 C 153 80 148 86 142 88 Z" />
          <path d="M 182 66 C 178 56 188 50 196 54 C 195 62 190 66 182 66 Z" />
          {/* Flowers */}
          <circle cx="94" cy="136" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="94" cy="136" r="1.5" />
          <circle cx="156" cy="86" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="156" cy="86" r="1.5" />
        </g>

        {/* RIGHT SPANDREL BOTANICAL VINES & BLOOMS (MIRRORED) */}
        <g stroke="url(#portalVineGold)" fill="url(#portalArchGold)" opacity="0.8">
          <path
            d="M 548 190 C 544 125 496 68 402 56"
            strokeWidth="1.4"
            fill="none"
          />
          <path d="M 528 152 C 540 148 540 136 532 132 C 525 136 522 145 528 152 Z" />
          <path d="M 498 118 C 508 110 504 98 495 100 C 490 106 492 114 498 118 Z" />
          <path d="M 458 88 C 466 78 458 70 450 72 C 447 80 452 86 458 88 Z" />
          <path d="M 418 66 C 422 56 412 50 404 54 C 405 62 410 66 418 66 Z" />
          <circle cx="506" cy="136" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="506" cy="136" r="1.5" />
          <circle cx="444" cy="86" r="3.5" fill="none" strokeWidth="1" />
          <circle cx="444" cy="86" r="1.5" />
        </g>

        {/* TRADITIONAL MARIGOLD & JASMINE WEDDING FLORAL GARLAND (TORAN) */}
        {/* Drapes along the arch curve like real auspicious wedding festoons */}
        <g className="wedding-toran-festoon">
          {/* Swag 1: Left Arch Arc */}
          <path
            d="M 70 270 Q 140 230 200 180"
            stroke="#c59b27"
            strokeWidth="1"
            strokeDasharray="2 2"
            fill="none"
            opacity="0.6"
          />
          {/* Alternating Marigold and Jasmine blooms along left drape */}
          {[
            { x: 80, y: 260, type: 'm' },
            { x: 105, y: 242, type: 'j' },
            { x: 130, y: 224, type: 'm' },
            { x: 155, y: 206, type: 'j' },
            { x: 180, y: 190, type: 'm' },
          ].map((flower, i) => (
            <g key={`tf-l-${i}`} transform={`translate(${flower.x}, ${flower.y})`}>
              <circle
                r={flower.type === 'm' ? 5.5 : 4.5}
                fill={flower.type === 'm' ? 'url(#marigoldGrad)' : 'url(#jasmineGrad)'}
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
              />
              <circle
                r={1.5}
                fill={flower.type === 'm' ? '#fff8e7' : '#ffd54f'}
              />
            </g>
          ))}

          {/* Swag 2: Center Arch Crown Apex Garland Accent (Kept high to eliminate frame overlap) */}
          <g transform="translate(300, 66)">
            <circle cx="0" cy="5" r="4.5" fill="url(#marigoldGrad)" />
            <circle cx="0" cy="13" r="3.5" fill="url(#jasmineGrad)" />
            <path d="M -2.5 15 L 2.5 15 L 0 20 Z" fill="url(#portalArchGold)" />
          </g>

          {/* Swag 3: Right Arch Arc */}
          <path
            d="M 530 270 Q 460 230 400 180"
            stroke="#c59b27"
            strokeWidth="1"
            strokeDasharray="2 2"
            fill="none"
            opacity="0.6"
          />
          {[
            { x: 520, y: 260, type: 'm' },
            { x: 495, y: 242, type: 'j' },
            { x: 470, y: 224, type: 'm' },
            { x: 445, y: 206, type: 'j' },
            { x: 420, y: 190, type: 'm' },
          ].map((flower, i) => (
            <g key={`tf-r-${i}`} transform={`translate(${flower.x}, ${flower.y})`}>
              <circle
                r={flower.type === 'm' ? 5.5 : 4.5}
                fill={flower.type === 'm' ? 'url(#marigoldGrad)' : 'url(#jasmineGrad)'}
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
              />
              <circle
                r={1.5}
                fill={flower.type === 'm' ? '#fff8e7' : '#ffd54f'}
              />
            </g>
          ))}
        </g>

        {/* LEFT PILLAR CAPITAL & MOLDED BASE */}
        <g stroke="url(#portalArchGold)" fill="url(#portalArchGold)">
          {/* Left Capital with Lotus Petal Molding */}
          <rect x="44" y="256" width="20" height="6" rx="1" strokeWidth="1" />
          <path d="M 46 262 L 62 262 L 58 270 L 50 270 Z" strokeWidth="1" />
          {/* Left Base Plinth */}
          <rect x="44" y="700" width="20" height="8" rx="1" strokeWidth="1" />
          <path d="M 48 700 L 60 700 L 62 692 L 46 692 Z" strokeWidth="1" />
        </g>

        {/* RIGHT PILLAR CAPITAL & MOLDED BASE */}
        <g stroke="url(#portalArchGold)" fill="url(#portalArchGold)">
          {/* Right Capital */}
          <rect x="536" y="256" width="20" height="6" rx="1" strokeWidth="1" />
          <path d="M 538 262 L 554 262 L 550 270 L 542 270 Z" strokeWidth="1" />
          {/* Right Base Plinth */}
          <rect x="536" y="700" width="20" height="8" rx="1" strokeWidth="1" />
          <path d="M 540 700 L 552 700 L 554 692 L 538 692 Z" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
};
