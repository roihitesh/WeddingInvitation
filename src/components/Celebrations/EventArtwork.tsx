import React from 'react';
import { CelebrationEventType } from '../../types/invitation';

interface EventArtworkProps {
  type: CelebrationEventType;
  altText: string;
  imageSrc?: string;
  isProminent?: boolean;
}

/**
 * Bespoke Royal SVG Event Artwork for Hitesh & Shivanee's Wedding Celebrations.
 * Renders custom artistic folios tailored to each ceremony's distinct colors and cultural motifs:
 * 1. Haldi: Turmeric marigold bowl (Urli), genda phool garlands, cheerful sunshine.
 * 2. Mehendi: Henna mandala, herbal paste cones, earthy green vines.
 * 3. Sangeet: Royal Dholak, sitar & shehnai notes, festive chandeliers.
 * 4. Wedding Ceremony: Grand imperial Mandap, sacred Agni flames, Gathbandhan knot.
 * 5. Reception: Champagne chandeliers, crystal goblets, regal floral banquet stage.
 */
export const EventArtwork: React.FC<EventArtworkProps> = ({
  type,
  altText,
  imageSrc,
  isProminent = false,
}) => {
  if (imageSrc) {
    return (
      <div className={`event-art-container ${isProminent ? 'art-prominent' : ''}`}>
        <img src={imageSrc} alt={altText} className="event-real-img" loading="lazy" />
      </div>
    );
  }

  const renderVectorScene = () => {
    switch (type) {
      case 'haldi':
        return (
          <svg viewBox="0 0 600 380" className="event-art-svg svg-haldi" role="img" aria-label={altText}>
            <defs>
              <linearGradient id="bgHaldi" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fffdf0" />
                <stop offset="60%" stopColor="#fff8db" />
                <stop offset="100%" stopColor="#feeeb0" />
              </linearGradient>
              <radialGradient id="haldiGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="600" height="380" fill="url(#bgHaldi)" />
            <circle cx="300" cy="190" r="160" fill="url(#haldiGlow)" />

            {/* Auspicious Mango Leaf & Marigold Toran overhead */}
            <path d="M0 40 Q300 100 600 40" stroke="#b45309" strokeWidth="2" fill="none" />
            <g fill="#2d6a4f">
              {[80, 150, 220, 290, 360, 430, 500].map((x) => (
                <path key={x} d={`M${x} 55 C${x - 10} 75, ${x - 5} 90, ${x} 98 C${x + 5} 90, ${x + 10} 75, ${x} 55 Z`} />
              ))}
            </g>
            <g fill="#f59e0b">
              {[50, 115, 185, 255, 325, 395, 465, 535].map((x) => (
                <circle key={x} cx={x} cy="58" r="9" />
              ))}
            </g>

            {/* Traditional Brass / Bronze Urli Bowl filled with fragrant Turmeric Paste */}
            <g transform="translate(300, 215)">
              {/* Urli Shadow */}
              <ellipse cx="0" cy="55" rx="140" ry="24" fill="#d97706" opacity="0.25" />

              {/* Urli Outer Rim */}
              <ellipse cx="0" cy="30" rx="130" ry="32" fill="#b45309" />
              <ellipse cx="0" cy="27" rx="124" ry="28" fill="#d97706" />

              {/* Glowing Golden Turmeric Paste */}
              <ellipse cx="0" cy="25" rx="118" ry="24" fill="#fbbf24" />
              <ellipse cx="0" cy="25" rx="100" ry="18" fill="#fde047" opacity="0.9" />

              {/* Floating Marigold Petals */}
              <g fill="#ea580c">
                <circle cx="-50" cy="20" r="6" />
                <circle cx="-35" cy="28" r="5" />
                <circle cx="45" cy="22" r="6" />
                <circle cx="65" cy="18" r="5" />
                <circle cx="10" cy="15" r="7" />
                <circle cx="0" cy="30" r="5.5" />
              </g>

              {/* Ornate Handles */}
              <path d="M-130 20 C-155 20 -155 45 -130 45" stroke="#b45309" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M130 20 C155 20 155 45 130 45" stroke="#b45309" strokeWidth="6" fill="none" strokeLinecap="round" />
            </g>

            {/* Diya of Auspicious Blessings */}
            <g transform="translate(140, 240)">
              <ellipse cx="0" cy="15" rx="22" ry="7" fill="#b45309" />
              <path d="M0 12 Q8 0 0 -14 Q-8 0 0 12 Z" fill="#f97316" />
              <circle cx="0" cy="-4" r="3" fill="#fef08a" />
            </g>
            <g transform="translate(460, 240)">
              <ellipse cx="0" cy="15" rx="22" ry="7" fill="#b45309" />
              <path d="M0 12 Q8 0 0 -14 Q-8 0 0 12 Z" fill="#f97316" />
              <circle cx="0" cy="-4" r="3" fill="#fef08a" />
            </g>

            <text x="300" y="348" textAnchor="middle" fill="#92400e" fontSize="12" fontFamily="serif" letterSpacing="3">
              ✦ पीताम्बरी हल्दी • A GOLDEN CELEBRATION ✦
            </text>
          </svg>
        );

      case 'mehendi':
        return (
          <svg viewBox="0 0 600 380" className="event-art-svg svg-mehendi" role="img" aria-label={altText}>
            <defs>
              <linearGradient id="bgMehendi" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f8f5" />
                <stop offset="60%" stopColor="#e6f1ec" />
                <stop offset="100%" stopColor="#d5e6de" />
              </linearGradient>
            </defs>

            <rect width="600" height="380" fill="url(#bgMehendi)" />

            {/* Delicate Green Leaf Vines Framing Arch */}
            <path d="M50 380 L50 140 Q50 40 300 40 Q550 40 550 140 L550 380" fill="none" stroke="#2d6a4f" strokeWidth="2.5" opacity="0.6" />
            {/* Vine Leaves */}
            <g fill="#40916c" opacity="0.8">
              {[80, 140, 200, 260, 340, 400, 460, 520].map((x) => (
                <g key={x}>
                  <circle cx={x} cy={60 + Math.sin(x) * 15} r="5" />
                  <path d={`M${x} 60 C${x + 8} 50, ${x + 12} 65, ${x} 70 Z`} />
                </g>
              ))}
            </g>

            {/* Central Intricate Henna Mandala Motif */}
            <g transform="translate(300, 180)">
              {/* Outer Henna Rings */}
              <circle cx="0" cy="0" r="85" fill="none" stroke="#1b4332" strokeWidth="1.5" strokeDasharray="3 4" />
              <circle cx="0" cy="0" r="72" fill="none" stroke="#2d6a4f" strokeWidth="2" />
              <circle cx="0" cy="0" r="58" fill="none" stroke="#1b4332" strokeWidth="1" />

              {/* Mandala Petals */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <path
                  key={deg}
                  d="M0 -58 C-10 -72, 10 -72, 0 -85 C-12 -72, -8 -72, 0 -58 Z"
                  fill="#2d6a4f"
                  transform={`rotate(${deg})`}
                />
              ))}

              {/* Inner Floral Core */}
              <circle cx="0" cy="0" r="38" fill="#52b788" opacity="0.25" />
              <circle cx="0" cy="0" r="28" fill="#2d6a4f" />
              <circle cx="0" cy="0" r="14" fill="#e6f1ec" />
              <circle cx="0" cy="0" r="5" fill="#1b4332" />
            </g>

            {/* Brass Henna Cones & Jasmine Strands */}
            <g transform="translate(180, 270) rotate(-25)">
              <polygon points="0,0 12,-60 -12,-60" fill="#2d6a4f" stroke="#b8861d" strokeWidth="1.5" />
              <circle cx="0" cy="-60" r="12" fill="#52b788" />
            </g>
            <g transform="translate(420, 270) rotate(25)">
              <polygon points="0,0 12,-60 -12,-60" fill="#2d6a4f" stroke="#b8861d" strokeWidth="1.5" />
              <circle cx="0" cy="-60" r="12" fill="#52b788" />
            </g>

            <text x="300" y="348" textAnchor="middle" fill="#1b4332" fontSize="12" fontFamily="serif" letterSpacing="3">
              ✦ सजी मेहंदी • PAINTED WITH LOVE ✦
            </text>
          </svg>
        );

      case 'sangeet':
        return (
          <svg viewBox="0 0 600 380" className="event-art-svg svg-sangeet" role="img" aria-label={altText}>
            <defs>
              <linearGradient id="bgSangeet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#300710" />
                <stop offset="50%" stopColor="#4d0e1b" />
                <stop offset="100%" stopColor="#25050c" />
              </linearGradient>
              <radialGradient id="stageGlow" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#dfb76c" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="600" height="380" fill="url(#bgSangeet)" />
            <circle cx="300" cy="160" r="180" fill="url(#stageGlow)" />

            {/* Festive Hanging Chandeliers & Sparkles */}
            <g fill="#ffe082" opacity="0.85">
              <circle cx="110" cy="60" r="3" />
              <circle cx="180" cy="40" r="2.5" />
              <circle cx="420" cy="40" r="2.5" />
              <circle cx="490" cy="60" r="3" />
            </g>
            <g stroke="#dfb76c" strokeWidth="1" fill="none" opacity="0.6">
              <line x1="150" y1="0" x2="150" y2="70" />
              <polygon points="140,70 160,70 150,90" fill="#dfb76c" />
              <line x1="450" y1="0" x2="450" y2="70" />
              <polygon points="440,70 460,70 450,90" fill="#dfb76c" />
            </g>

            {/* Royal Indian Dholak Drum with Gold Tassels */}
            <g transform="translate(300, 205)">
              {/* Dholak Barrel */}
              <ellipse cx="0" cy="15" rx="110" ry="50" fill="#5c1d11" stroke="#dfb76c" strokeWidth="2.5" />
              <ellipse cx="0" cy="15" rx="85" ry="46" fill="#7a2a1b" />

              {/* Drum Left Head */}
              <ellipse cx="-110" cy="15" rx="16" ry="48" fill="#1f100b" stroke="#dfb76c" strokeWidth="2" />
              <ellipse cx="-110" cy="15" rx="10" ry="32" fill="#3a2016" />

              {/* Drum Right Head */}
              <ellipse cx="110" cy="15" rx="16" ry="48" fill="#1f100b" stroke="#dfb76c" strokeWidth="2" />
              <ellipse cx="110" cy="15" rx="10" ry="32" fill="#3a2016" />

              {/* Golden Lacing Cords (V-pattern) */}
              <g stroke="#dfb76c" strokeWidth="1.8" fill="none">
                <line x1="-100" y1="-25" x2="-60" y2="55" />
                <line x1="-60" y1="55" x2="-20" y2="-30" />
                <line x1="-20" y1="-30" x2="20" y2="58" />
                <line x1="20" y1="58" x2="60" y2="-28" />
                <line x1="60" y1="-28" x2="100" y2="55" />
              </g>

              {/* Golden Tuning Rings (Chhallae) */}
              <circle cx="-40" cy="10" r="6" fill="#b8861d" />
              <circle cx="40" cy="15" r="6" fill="#b8861d" />
            </g>

            {/* Shehnai / Sitar musical flourish notes */}
            <g fill="#dfb76c" opacity="0.9">
              <text x="180" y="140" fontSize="24">♪</text>
              <text x="230" y="110" fontSize="20">♫</text>
              <text x="370" y="110" fontSize="20">♫</text>
              <text x="420" y="140" fontSize="24">♪</text>
            </g>

            <text x="300" y="348" textAnchor="middle" fill="#dfb76c" fontSize="12" fontFamily="serif" letterSpacing="3">
              ✦ सुरमई संगीत • MUSIC &amp; MEMORIES ✦
            </text>
          </svg>
        );

      case 'wedding':
        return (
          <svg viewBox="0 0 600 380" className="event-art-svg svg-wedding" role="img" aria-label={altText}>
            <defs>
              <linearGradient id="bgWedding" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a0812" />
                <stop offset="60%" stopColor="#67101e" />
                <stop offset="100%" stopColor="#310309" />
              </linearGradient>
              <linearGradient id="goldArchShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8861d" />
                <stop offset="50%" stopColor="#fdf3dc" />
                <stop offset="100%" stopColor="#dfb76c" />
              </linearGradient>
            </defs>

            <rect width="600" height="380" fill="url(#bgWedding)" />

            {/* Grand Imperial Mughal Scalloped Arch */}
            <path
              d="M70 380 L70 140 C70 60 160 30 300 25 C440 30 530 60 530 140 L530 380"
              fill="none"
              stroke="url(#goldArchShine)"
              strokeWidth="4"
            />
            <path
              d="M85 380 L85 150 C85 75 170 45 300 40 C430 45 515 75 515 150 L515 380"
              fill="none"
              stroke="#dfb76c"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Mandap Draped Pillars */}
            <rect x="95" y="100" width="16" height="280" fill="url(#goldArchShine)" />
            <rect x="489" y="100" width="16" height="280" fill="url(#goldArchShine)" />

            {/* Hanging Floral Garlands of Marigolds & Roses */}
            <g fill="#f59e0b">
              {[120, 180, 240, 300, 360, 420, 480].map((x) => (
                <g key={x}>
                  <circle cx={x} cy="75" r="5" />
                  <circle cx={x} cy="88" r="4.5" fill="#c2185b" />
                  <circle cx={x} cy="100" r="5" />
                  <circle cx={x} cy="112" r="4" fill="#fff" />
                </g>
              ))}
            </g>

            {/* Sacred Vedic Agni Kund (Hawan Kunda) */}
            <g transform="translate(300, 260)">
              {/* Stepped Base */}
              <polygon points="-80,45 80,45 65,70 -65,70" fill="#dfb76c" />
              <polygon points="-65,22 65,22 55,45 -55,45" fill="#b8861d" />
              <polygon points="-48,0 48,0 40,22 -40,22" fill="#721625" />

              {/* Radiant Holy Fire (Pavitra Agni) */}
              <path d="M-20 0 Q0 -60 12 -90 Q35 -45 20 0 Z" fill="#ff5722" opacity="0.9" />
              <path d="M-12 0 Q0 -50 4 -75 Q20 -35 12 0 Z" fill="#ff9800" />
              <path d="M-4 0 Q0 -35 2 -55 Q10 -25 4 0 Z" fill="#fff9c4" />
            </g>

            {/* Sacred Golden Gathbandhan & Mangalsutra Knot */}
            <g transform="translate(300, 160)">
              <path d="M-100 -15 Q-40 10 -5 10" stroke="#dfb76c" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M100 -15 Q40 10 5 10" stroke="#e11d48" strokeWidth="6" fill="none" strokeLinecap="round" />
              <circle cx="0" cy="10" r="14" fill="#721625" stroke="#dfb76c" strokeWidth="2.5" />
              <circle cx="0" cy="10" r="5" fill="#dfb76c" />
            </g>

            <text x="300" y="355" textAnchor="middle" fill="#dfb76c" fontSize="13" fontFamily="serif" letterSpacing="3">
              ✦ पवित्र पाणिग्रहण संस्कार • SACRED WEDDING CEREMONY ✦
            </text>
          </svg>
        );

      case 'reception':
        return (
          <svg viewBox="0 0 600 380" className="event-art-svg svg-reception" role="img" aria-label={altText}>
            <defs>
              <linearGradient id="bgReception" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e131b" />
                <stop offset="50%" stopColor="#311c2a" />
                <stop offset="100%" stopColor="#170c15" />
              </linearGradient>
              <radialGradient id="champagneGlow" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#faecd8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#faecd8" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="600" height="380" fill="url(#bgReception)" />
            <circle cx="300" cy="160" r="180" fill="url(#champagneGlow)" />

            {/* Elegant Crystal Chandeliers */}
            <g transform="translate(300, 40)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#dfb76c" strokeWidth="2" />
              <ellipse cx="0" cy="40" rx="45" ry="12" fill="none" stroke="#dfb76c" strokeWidth="1.5" />
              <ellipse cx="0" cy="55" rx="30" ry="8" fill="none" stroke="#dfb76c" strokeWidth="1.2" />
              {/* Crystals */}
              {[-35, -20, 0, 20, 35].map((x) => (
                <line key={x} x1={x} y1="40" x2={x} y2="65" stroke="#fff" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
              ))}
              <circle cx="0" cy="72" r="4" fill="#dfb76c" />
            </g>

            {/* Formal Champagne Flutes Clinking in Celebration */}
            <g transform="translate(300, 220)">
              {/* Left Flute */}
              <g transform="rotate(-15) translate(-30, 0)">
                <path d="M-10 -45 L10 -45 L6 5 C6 18 -6 18 -6 5 Z" fill="rgba(253, 230, 138, 0.4)" stroke="#dfb76c" strokeWidth="1.5" />
                <line x1="0" y1="18" x2="0" y2="55" stroke="#dfb76c" strokeWidth="2" />
                <ellipse cx="0" cy="55" rx="15" ry="4" fill="#dfb76c" />
                {/* Champagne liquid */}
                <path d="M-7 -25 L7 -25 L5 5 C5 14 -5 14 -5 5 Z" fill="#fde047" opacity="0.75" />
              </g>

              {/* Right Flute */}
              <g transform="rotate(15) translate(30, 0)">
                <path d="M-10 -45 L10 -45 L6 5 C6 18 -6 18 -6 5 Z" fill="rgba(253, 230, 138, 0.4)" stroke="#dfb76c" strokeWidth="1.5" />
                <line x1="0" y1="18" x2="0" y2="55" stroke="#dfb76c" strokeWidth="2" />
                <ellipse cx="0" cy="55" rx="15" ry="4" fill="#dfb76c" />
                {/* Champagne liquid */}
                <path d="M-7 -25 L7 -25 L5 5 C5 14 -5 14 -5 5 Z" fill="#fde047" opacity="0.75" />
              </g>

              {/* Sparkle of Celebration */}
              <polygon points="0,-35 4,-20 20,-16 4,-12 0,4 -4,-12 -20,-16 -4,-20" fill="#fff9c4" />
            </g>

            <text x="300" y="348" textAnchor="middle" fill="#dfb76c" fontSize="12" fontFamily="serif" letterSpacing="3">
              ✦ स्वागत समारोह • CELEBRATION BANQUET ✦
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`event-art-container ${isProminent ? 'art-prominent' : ''}`}>
      {renderVectorScene()}
    </div>
  );
};
