import React from 'react';

interface VenueArtworkProps {
  altText: string;
  imageSrc?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * Bespoke Royal Heritage Palace Vector Artwork for Venue Hero & Gallery.
 * Renders a high-detail sandstone palace facade with traditional Rajasthani Jharokhas,
 * chhatri domes, lotus fountain, and warm golden hour sunlight.
 * Renders an actual <img> tag if a real photograph source is provided.
 */
export const VenueArtwork: React.FC<VenueArtworkProps> = ({
  altText,
  imageSrc,
  className = '',
  onClick,
}) => {
  if (imageSrc) {
    return (
      <div
        className={`venue-art-stage ${className}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <img src={imageSrc} alt={altText} className="venue-real-img" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`venue-art-stage ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={altText}
    >
      <svg
        viewBox="0 0 900 500"
        className="venue-palace-svg"
        role="img"
        aria-label={altText}
      >
        <defs>
          <linearGradient id="venueSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7e6d0" />
            <stop offset="45%" stopColor="#faecd8" />
            <stop offset="85%" stopColor="#f4dac0" />
            <stop offset="100%" stopColor="#e2bc93" />
          </linearGradient>
          <radialGradient id="venueSun" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#fde0a5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fde0a5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="palaceStone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8c79a" />
            <stop offset="50%" stopColor="#dbb078" />
            <stop offset="100%" stopColor="#c5965a" />
          </linearGradient>
          <linearGradient id="goldDome" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8861d" />
            <stop offset="50%" stopColor="#fdf0cd" />
            <stop offset="100%" stopColor="#dfb76c" />
          </linearGradient>
        </defs>

        {/* Golden Hour Sky & Radiant Sun */}
        <rect width="900" height="500" fill="url(#venueSky)" />
        <circle cx="450" cy="180" r="260" fill="url(#venueSun)" />

        {/* Distant Aravali Hills Backdrop */}
        <path
          d="M0 320 Q120 270 240 310 Q360 250 480 300 Q600 240 720 295 Q820 260 900 310 L900 500 L0 500 Z"
          fill="#d4a373"
          opacity="0.45"
        />

        {/* Grand Heritage Palace Facade */}
        <g transform="translate(150, 140)">
          {/* Main Palace Body */}
          <rect x="60" y="140" width="480" height="150" fill="url(#palaceStone)" />
          {/* Decorative Cornice */}
          <rect x="40" y="130" width="520" height="15" fill="#a4743c" />
          <rect x="50" y="125" width="500" height="8" fill="#dfb76c" />

          {/* Central Grand Mughal Entrance Arch */}
          <path
            d="M240 290 L240 190 C240 150 270 140 300 135 C330 140 360 150 360 190 L360 290 Z"
            fill="#3b060d"
            stroke="url(#goldDome)"
            strokeWidth="3.5"
          />
          {/* Inward Scallops */}
          <path
            d="M260 210 Q280 185 300 180 Q320 185 340 210"
            fill="none"
            stroke="#dfb76c"
            strokeWidth="2"
          />

          {/* Side Arched Jharokha Windows */}
          {[-120, -60, 60, 120].map((offset) => (
            <g key={offset} transform={`translate(${300 + offset}, 180)`}>
              <rect x="-18" y="0" width="36" height="50" rx="18" fill="#2d130a" stroke="#dfb76c" strokeWidth="1.5" />
              <path d="M-18 18 L18 18 M0 0 L0 50" stroke="#dfb76c" strokeWidth="1" opacity="0.6" />
            </g>
          ))}

          {/* Majestic Central Dome (Chhatri) */}
          <g transform="translate(300, 125)">
            <rect x="-35" y="-30" width="70" height="30" fill="url(#palaceStone)" />
            {/* Fluted Gold Dome */}
            <path
              d="M-45 -30 C-45 -75 0 -95 0 -105 C0 -95 45 -75 45 -30 Z"
              fill="url(#goldDome)"
              stroke="#a4743c"
              strokeWidth="1.5"
            />
            {/* Kalash on top */}
            <circle cx="0" cy="-110" r="4.5" fill="#dfb76c" />
            <line x1="0" y1="-105" x2="0" y2="-118" stroke="#dfb76c" strokeWidth="2" />
          </g>

          {/* Flanking Corner Pavilions (Chhatris) */}
          <g transform="translate(100, 125)">
            <rect x="-20" y="-20" width="40" height="20" fill="url(#palaceStone)" />
            <path d="M-28 -20 C-28 -55 0 -68 0 -75 C0 -68 28 -55 28 -20 Z" fill="url(#goldDome)" />
            <circle cx="0" cy="-78" r="3.5" fill="#dfb76c" />
          </g>
          <g transform="translate(500, 125)">
            <rect x="-20" y="-20" width="40" height="20" fill="url(#palaceStone)" />
            <path d="M-28 -20 C-28 -55 0 -68 0 -75 C0 -68 28 -55 28 -20 Z" fill="url(#goldDome)" />
            <circle cx="0" cy="-78" r="3.5" fill="#dfb76c" />
          </g>
        </g>

        {/* Manicured Royal Courtyard Lawn & Marble Fountain */}
        <path d="M0 430 L900 430 L900 500 L0 500 Z" fill="#2d5032" />
        <path d="M100 430 L800 430 L850 500 L50 500 Z" fill="#386641" />

        {/* Carved Marble Fountain in Foreground */}
        <g transform="translate(450, 445)">
          <ellipse cx="0" cy="20" rx="90" ry="20" fill="#fffdf9" stroke="#b8861d" strokeWidth="2" />
          <ellipse cx="0" cy="18" rx="80" ry="16" fill="#8ecae6" opacity="0.8" />
          {/* Center Tier */}
          <ellipse cx="0" cy="5" rx="35" ry="9" fill="#fffdf9" stroke="#b8861d" strokeWidth="1.5" />
          <path d="M0 5 Q0 -25 0 -35" stroke="#e0f2fe" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
          <circle cx="0" cy="-35" r="3" fill="#fff" />
        </g>

        {/* Auspicious Watermark Inscription */}
        <text
          x="450"
          y="488"
          textAnchor="middle"
          fill="#fffdf9"
          fontSize="13"
          fontFamily="serif"
          letterSpacing="4"
          opacity="0.9"
        >
          ✦ रॉयल हेरिटेज विवाह स्थल • ROYAL WEDDING VENUE ✦
        </text>
      </svg>
    </div>
  );
};
