import React, { useState } from 'react';
import { StoryPhotoItem, SupportedLanguage } from '../../types/invitation';

interface StoryArtworkProps {
  photo: StoryPhotoItem;
  language: SupportedLanguage;
  isLarge?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Story Artwork & Photo Renderer.
 * Displays real high-resolution photograph if provided (`src`).
 * Otherwise, renders bespoke royal Indian wedding symbolic art folios
 * that embody each milestone without using misleading generic stock photos.
 */
export const StoryArtwork: React.FC<StoryArtworkProps> = ({
  photo,
  language,
  isLarge = false,
  className = '',
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const altText = photo.alt[language] || photo.alt.en;

  // Render authentic symbolic vector art folio
  const renderSymbolicIllustration = () => {
    switch (photo.symbolicType) {
      case 'first-meeting':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-first-meeting"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="bgMeeting" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f7eee1" />
                <stop offset="60%" stopColor="#faecd8" />
                <stop offset="100%" stopColor="#f3deb8" />
              </linearGradient>
              <linearGradient id="goldArch" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dfb76c" />
                <stop offset="50%" stopColor="#fdf0cd" />
                <stop offset="100%" stopColor="#b8861d" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="40%" r="45%">
                <stop offset="0%" stopColor="#fffaed" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#fde0a5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fde0a5" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Canvas */}
            <rect width="600" height="400" fill="url(#bgMeeting)" />
            <circle cx="300" cy="180" r="170" fill="url(#sunGlow)" />

            {/* Distant Royal Garden Trees & Pavilion Silhouettes */}
            <path
              d="M0 310 Q70 280 140 305 Q220 270 300 295 Q380 270 460 305 Q530 280 600 310 L600 400 L0 400 Z"
              fill="#e6c99c"
              opacity="0.5"
            />
            <path
              d="M0 340 Q150 315 300 330 Q450 315 600 340 L600 400 L0 400 Z"
              fill="#dfb882"
              opacity="0.6"
            />

            {/* Grand Scalloped Mughal Jharokha Arch */}
            <path
              d="M60 400 L60 160 C60 80, 160 50, 300 40 C440 50, 540 80, 540 160 L540 400"
              fill="none"
              stroke="url(#goldArch)"
              strokeWidth="5"
            />
            <path
              d="M78 400 L78 170 C78 100, 170 70, 300 60 C430 70, 522 100, 522 170 L522 400"
              fill="none"
              stroke="#dfb76c"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Scallop cusps on the arch */}
            <path
              d="M130 190 Q170 140 210 170 Q250 120 300 135 Q350 120 390 170 Q430 140 470 190"
              fill="none"
              stroke="url(#goldArch)"
              strokeWidth="2.5"
            />

            {/* Hanging Jasmine / Mogra Garlands */}
            <g stroke="#dfb76c" strokeWidth="1" fill="#fff" opacity="0.9">
              <path d="M140 180 Q145 230 140 280" fill="none" />
              <circle cx="140" cy="200" r="3.5" />
              <circle cx="142" cy="225" r="3.5" />
              <circle cx="141" cy="250" r="3.5" />
              <circle cx="140" cy="275" r="4.5" fill="#dfb76c" />

              <path d="M460 180 Q455 230 460 280" fill="none" />
              <circle cx="460" cy="200" r="3.5" />
              <circle cx="458" cy="225" r="3.5" />
              <circle cx="459" cy="250" r="3.5" />
              <circle cx="460" cy="275" r="4.5" fill="#dfb76c" />
            </g>

            {/* Intricate Carved Marble Table with Two Tea / Coffee Cups */}
            <g transform="translate(240, 260)">
              {/* Marble Tabletop */}
              <ellipse cx="60" cy="60" rx="75" ry="16" fill="#fffdf9" stroke="#b8861d" strokeWidth="2" />
              <path d="M5 60 Q60 76 115 60 L115 70 Q60 86 5 70 Z" fill="#dfb76c" />
              {/* Table Column */}
              <path d="M50 70 L50 115 L70 115 L70 70 Z" fill="#c59a3f" />
              <ellipse cx="60" cy="115" rx="35" ry="8" fill="#a47728" />

              {/* Cup 1 (Groom) */}
              <ellipse cx="40" cy="55" rx="10" ry="4" fill="#faf6ee" stroke="#721625" strokeWidth="1.2" />
              <path d="M30 55 C30 65 50 65 50 55" fill="#721625" />
              <path d="M48 57 C53 57 53 62 48 62" fill="none" stroke="#721625" strokeWidth="1" />
              {/* Steam whisper */}
              <path d="M38 50 Q36 43 40 37" fill="none" stroke="#dfb76c" strokeWidth="1" strokeLinecap="round" opacity="0.7" />

              {/* Cup 2 (Bride) */}
              <ellipse cx="80" cy="55" rx="10" ry="4" fill="#faf6ee" stroke="#721625" strokeWidth="1.2" />
              <path d="M70 55 C70 65 90 65 90 55" fill="#721625" />
              <path d="M88 57 C93 57 93 62 88 62" fill="none" stroke="#721625" strokeWidth="1" />
              {/* Steam whisper */}
              <path d="M78 50 Q80 43 76 37" fill="none" stroke="#dfb76c" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            </g>

            {/* Auspicious Inscription Watermark */}
            <text
              x="300"
              y="388"
              textAnchor="middle"
              fill="#8d6419"
              fontSize="12"
              fontFamily="serif"
              letterSpacing="3"
              opacity="0.8"
            >
              ✦ शुभ आरम्भ • A DESTINED BEGINNING ✦
            </text>
          </svg>
        );

      case 'first-crush':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-first-crush"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="bgCrush" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c1624" />
                <stop offset="50%" stopColor="#4f243b" />
                <stop offset="100%" stopColor="#6e2d43" />
              </linearGradient>
              <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff3db" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#dfb76c" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#dfb76c" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="600" height="400" fill="url(#bgCrush)" />

            {/* Glowing Moon & Starlight */}
            <circle cx="480" cy="110" r="45" fill="url(#moonGlow)" />
            <path
              d="M480 80 C500 80 515 95 515 115 C515 135 499 150 480 150 C472 150 464 147 458 142 C475 142 490 128 490 110 C490 96 480 84 466 82 C470 81 475 80 480 80 Z"
              fill="#fff7e0"
            />

            {/* Twinkling Fireflies */}
            <g fill="#ffe082" opacity="0.85">
              <circle cx="120" cy="160" r="2.5" />
              <circle cx="210" cy="220" r="3" />
              <circle cx="290" cy="140" r="2" />
              <circle cx="360" cy="260" r="3.5" />
              <circle cx="410" cy="190" r="2.5" />
              <circle cx="180" cy="90" r="2" />
              <circle cx="260" cy="70" r="2.5" />
              <circle cx="340" cy="100" r="2" />
            </g>

            {/* Palace Jharokha Balcony Silhouette with Fine Jaali Trellis */}
            <path
              d="M0 310 L600 310 L600 400 L0 400 Z"
              fill="#1f0f1a"
            />
            <path
              d="M0 310 Q300 290 600 310"
              stroke="#dfb76c"
              strokeWidth="3"
              fill="none"
            />
            {/* Balustrade railing */}
            <g stroke="#b8861d" strokeWidth="2" opacity="0.75">
              {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((x) => (
                <line key={x} x1={x} y1="310" x2={x} y2="380" />
              ))}
            </g>

            {/* Fluttering Golden Butterflies (The Butterflies in the Stomach) */}
            <g transform="translate(220, 130)">
              {/* Butterfly 1 */}
              <path
                d="M40 50 C20 20, 10 35, 30 55 C10 65, 20 80, 42 60 C48 60, 50 55, 40 50 Z"
                fill="#dfb76c"
                opacity="0.9"
              />
              <path
                d="M45 50 C65 20, 75 35, 55 55 C75 65, 65 80, 43 60 C37 60, 35 55, 45 50 Z"
                fill="#dfb76c"
                opacity="0.9"
              />
              <circle cx="42.5" cy="55" r="2" fill="#fff" />
            </g>
            <g transform="translate(300, 170) scale(0.75)">
              {/* Butterfly 2 */}
              <path
                d="M40 50 C20 20, 10 35, 30 55 C10 65, 20 80, 42 60 C48 60, 50 55, 40 50 Z"
                fill="#fadb8f"
                opacity="0.85"
              />
              <path
                d="M45 50 C65 20, 75 35, 55 55 C75 65, 65 80, 43 60 C37 60, 35 55, 45 50 Z"
                fill="#fadb8f"
                opacity="0.85"
              />
              <circle cx="42.5" cy="55" r="2" fill="#fff" />
            </g>

            <text
              x="300"
              y="370"
              textAnchor="middle"
              fill="#dfb76c"
              fontSize="12"
              fontFamily="serif"
              letterSpacing="3"
            >
              ✦ पहला क्रश • THOSE SWEET BUTTERFLIES ✦
            </text>
          </svg>
        );

      case 'sharing-feelings':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-sharing-feelings"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="bgScroll" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#faf5ec" />
                <stop offset="100%" stopColor="#f3e8cf" />
              </linearGradient>
            </defs>

            <rect width="600" height="400" fill="url(#bgScroll)" />

            {/* Glowing Golden Diya Lantern */}
            <g transform="translate(110, 160)">
              <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffecb3" stopOpacity="1" />
                <stop offset="60%" stopColor="#ffa000" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffa000" stopOpacity="0" />
              </radialGradient>
              <circle cx="30" cy="20" r="45" fill="url(#flameGlow)" />
              {/* Brass Diya Vessel */}
              <path
                d="M0 45 C0 65, 60 65, 60 45 L50 45 C50 55, 10 55, 10 45 Z"
                fill="#b8861d"
              />
              <ellipse cx="30" cy="45" rx="30" ry="6" fill="#dfb76c" />
              {/* Flame */}
              <path
                d="M30 45 Q38 30 30 15 Q22 30 30 45 Z"
                fill="#ff6f00"
              />
              <path
                d="M30 42 Q34 32 30 22 Q26 32 30 42 Z"
                fill="#fff9c4"
              />
            </g>

            {/* Royal Illuminated Letter / Parchment Scroll */}
            <g transform="translate(200, 70)">
              {/* Scroll Shadow */}
              <rect x="15" y="15" width="260" height="230" rx="8" fill="#d9c39c" opacity="0.4" />
              {/* Scroll Body */}
              <rect x="0" y="0" width="260" height="230" rx="8" fill="#fffdf9" stroke="#dfb76c" strokeWidth="2" />
              <rect x="8" y="8" width="244" height="214" rx="4" fill="none" stroke="#e6cba3" strokeWidth="1" strokeDasharray="3 3" />

              {/* Gold Floral Stamp Header */}
              <circle cx="130" cy="40" r="16" fill="#721625" />
              <text x="130" y="45" textAnchor="middle" fill="#dfb76c" fontSize="13" fontFamily="serif">H&amp;S</text>

              {/* Hand-written poetic lines simulation */}
              <line x1="40" y1="80" x2="220" y2="80" stroke="#b8861d" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
              <line x1="40" y1="105" x2="200" y2="105" stroke="#b8861d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <line x1="40" y1="130" x2="215" y2="130" stroke="#b8861d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <line x1="40" y1="155" x2="180" y2="155" stroke="#b8861d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

              {/* Intertwined Heart Wax Seal */}
              <circle cx="210" cy="185" r="18" fill="#721625" stroke="#dfb76c" strokeWidth="1.5" />
              <path
                d="M210 193 l-1.2-1.1 C204 187 202 184 202 181 C202 178 204 176 207 176 C208.5 176 209.5 177 210 178 C210.5 177 211.5 176 213 176 C216 176 218 178 218 181 C218 184 216 187 211.2 191.9 Z"
                fill="#dfb76c"
              />
            </g>

            {/* Peacock Feather Quill */}
            <g transform="translate(430, 200) rotate(35)">
              <path
                d="M0 0 Q50 -80 15 -140 Q-10 -80 0 0"
                fill="#2e5d4b"
                opacity="0.85"
              />
              <circle cx="12" cy="-90" r="12" fill="#1b3b6f" />
              <circle cx="12" cy="-90" r="7" fill="#c59a3f" />
              <circle cx="12" cy="-90" r="3.5" fill="#1b3b6f" />
              {/* Shaft */}
              <line x1="0" y1="10" x2="16" y2="-140" stroke="#dfb76c" strokeWidth="2" strokeLinecap="round" />
            </g>

            <text
              x="300"
              y="370"
              textAnchor="middle"
              fill="#721625"
              fontSize="12"
              fontFamily="serif"
              letterSpacing="3"
            >
              ✦ दिल से दिल की बात • WHEN HEARTS CONVERGED ✦
            </text>
          </svg>
        );

      case 'trip-main':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-trip-main"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="skyTrip" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e2c3b" />
                <stop offset="45%" stopColor="#435668" />
                <stop offset="70%" stopColor="#c5976b" />
                <stop offset="100%" stopColor="#e8c292" />
              </linearGradient>
              <linearGradient id="lakeWater" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b49372" />
                <stop offset="100%" stopColor="#304457" />
              </linearGradient>
            </defs>

            <rect width="600" height="270" fill="url(#skyTrip)" />
            <rect y="270" width="600" height="130" fill="url(#lakeWater)" />

            {/* Stars & Golden Astrolabe Compass in Sky */}
            <g fill="#ffe599" opacity="0.8">
              <circle cx="80" cy="50" r="1.5" />
              <circle cx="170" cy="70" r="2" />
              <circle cx="480" cy="40" r="2" />
              <circle cx="530" cy="80" r="1.5" />
            </g>
            <g transform="translate(100, 70) scale(0.8)">
              <circle cx="0" cy="0" r="24" fill="none" stroke="#dfb76c" strokeWidth="1" strokeDasharray="2 3" />
              <polygon points="0,-22 4,-5 22,0 4,5 0,22 -4,5 -22,0 -4,-5" fill="#dfb76c" />
              <circle cx="0" cy="0" r="3" fill="#721625" />
            </g>

            {/* Aravali Mountain Ranges Silhouettes */}
            <path
              d="M0 240 L80 180 L160 220 L250 160 L350 230 L450 170 L540 210 L600 175 L600 270 L0 270 Z"
              fill="#334658"
              opacity="0.8"
            />
            <path
              d="M0 260 L120 220 L220 250 L310 210 L410 245 L500 225 L600 255 L600 270 L0 270 Z"
              fill="#263442"
            />

            {/* Majestic Heritage Palace on Water (Jal Mahal / Lake Palace) */}
            <g transform="translate(230, 195)">
              <rect x="20" y="45" width="100" height="30" fill="#dfb76c" />
              {/* Domes (Chhatris) */}
              <path d="M20 45 Q35 25 50 45 Z" fill="#b8861d" />
              <path d="M90 45 Q105 25 120 45 Z" fill="#b8861d" />
              <path d="M55 45 Q70 15 85 45 Z" fill="#721625" />
              <circle cx="70" cy="15" r="2.5" fill="#dfb76c" />
              {/* Arched windows */}
              <path d="M40 55 Q45 50 50 55 L50 65 L40 65 Z" fill="#263442" />
              <path d="M65 52 Q70 47 75 52 L75 65 L65 65 Z" fill="#263442" />
              <path d="M90 55 Q95 50 100 55 L100 65 L90 65 Z" fill="#263442" />
            </g>

            {/* Water Ripples & Reflections */}
            <g stroke="#dfb76c" strokeWidth="1" opacity="0.6">
              <line x1="260" y1="285" x2="330" y2="285" />
              <line x1="240" y1="298" x2="360" y2="298" />
              <line x1="280" y1="312" x2="320" y2="312" />
            </g>

            {/* Wooden Boat with Couple Silhouette */}
            <g transform="translate(140, 310)">
              <path d="M0 15 Q40 30 80 15 Q50 35 15 30 Z" fill="#1b120c" />
              {/* Oar */}
              <line x1="25" y1="0" x2="45" y2="38" stroke="#dfb76c" strokeWidth="2" strokeLinecap="round" />
              {/* Gentle lantern at bow */}
              <circle cx="76" cy="15" r="4" fill="#ffe082" />
              <circle cx="76" cy="15" r="1.5" fill="#fff" />
            </g>

            <text
              x="300"
              y="385"
              textAnchor="middle"
              fill="#dfb76c"
              fontSize="12"
              fontFamily="serif"
              letterSpacing="3"
            >
              ✦ सफ़र और यादें • LITTLE TRIPS, BIG MEMORIES ✦
            </text>
          </svg>
        );

      case 'trip-snapshot-1':
        return (
          <svg viewBox="0 0 300 220" className="artwork-svg" role="img" aria-label={altText}>
            <rect width="300" height="220" fill="#faebd7" />
            {/* Heritage Archway */}
            <path d="M40 220 L40 90 Q150 20 260 90 L260 220 Z" fill="#e8d5b5" stroke="#dfb76c" strokeWidth="2" />
            {/* Pink Bougainvillea */}
            <g fill="#c2185b" opacity="0.9">
              <circle cx="50" cy="70" r="10" />
              <circle cx="70" cy="60" r="12" />
              <circle cx="95" cy="50" r="11" />
              <circle cx="125" cy="40" r="14" />
              <circle cx="65" cy="85" r="9" />
              <circle cx="210" cy="55" r="12" />
              <circle cx="235" cy="65" r="10" />
            </g>
            <text x="150" y="200" textAnchor="middle" fill="#721625" fontSize="10" letterSpacing="2">SUNLIT ARCHWAYS</text>
          </svg>
        );

      case 'trip-snapshot-2':
        return (
          <svg viewBox="0 0 300 220" className="artwork-svg" role="img" aria-label={altText}>
            <rect width="300" height="220" fill="#1b2333" />
            {/* Starry Sky */}
            <circle cx="60" cy="40" r="1.5" fill="#fff" />
            <circle cx="120" cy="30" r="2" fill="#ffe082" />
            <circle cx="190" cy="50" r="1.5" fill="#fff" />
            <circle cx="240" cy="35" r="2" fill="#fff" />
            {/* Campfire warmth */}
            <radialGradient id="fireGlow" cx="50%" cy="80%" r="60%">
              <stop offset="0%" stopColor="#ff9800" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
            </radialGradient>
            <rect y="100" width="300" height="120" fill="url(#fireGlow)" />
            {/* Fire Flames */}
            <polygon points="140,185 150,150 160,185" fill="#ff5722" />
            <polygon points="145,185 150,160 155,185" fill="#ffeb3b" />
            <text x="150" y="205" textAnchor="middle" fill="#dfb76c" fontSize="10" letterSpacing="2">STARLIT EVENINGS</text>
          </svg>
        );

      case 'family-blessings':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-family-blessings"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="bgFamily" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#faf4e8" />
                <stop offset="100%" stopColor="#f4e5c8" />
              </linearGradient>
            </defs>

            <rect width="600" height="400" fill="url(#bgFamily)" />

            {/* Sacred Radial Lotus Mandala Backdrop */}
            <g transform="translate(300, 190)" opacity="0.35">
              <circle cx="0" cy="0" r="140" fill="none" stroke="#dfb76c" strokeWidth="2" strokeDasharray="4 6" />
              <circle cx="0" cy="0" r="100" fill="none" stroke="#b8861d" strokeWidth="1.5" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <path
                  key={deg}
                  d="M0 0 L0 -100"
                  stroke="#dfb76c"
                  strokeWidth="1.5"
                  transform={`rotate(${deg})`}
                />
              ))}
            </g>

            {/* Auspicious Shubh Kalash with Coconut and Mango Leaves */}
            <g transform="translate(300, 190)">
              {/* Kalash Base */}
              <ellipse cx="0" cy="65" rx="35" ry="8" fill="#b8861d" />
              {/* Kalash Pot (Brass/Gold) */}
              <path
                d="M-35 60 C-50 30, -40 -10, -20 -25 L20 -25 C40 -10, 50 30, 35 60 Z"
                fill="#dfb76c"
                stroke="#b8861d"
                strokeWidth="2"
              />
              {/* Sacred Red Mauli Thread tied around Kalash */}
              <rect x="-24" y="-22" width="48" height="6" fill="#721625" />
              {/* Swastika / Auspicious Mark on Kalash */}
              <text x="0" y="25" textAnchor="middle" fill="#721625" fontSize="22" fontWeight="bold">卐</text>

              {/* Mango Leaves (Aamra Patra) */}
              <path d="M-20 -25 C-45 -55, -25 -75, -5 -40 Z" fill="#386641" />
              <path d="M20 -25 C45 -55, 25 -75, 5 -40 Z" fill="#386641" />
              <path d="M0 -25 C0 -65, 10 -75, 0 -85 C-10 -75, 0 -65, 0 -25 Z" fill="#2d5234" />

              {/* Coconut (Shriphal) */}
              <ellipse cx="0" cy="-45" rx="18" ry="22" fill="#6a4c28" stroke="#dfb76c" strokeWidth="1.5" />
            </g>

            {/* Glowing Diya lamps at flanks */}
            <g transform="translate(150, 240)">
              <ellipse cx="0" cy="10" rx="20" ry="5" fill="#dfb76c" />
              <path d="M0 8 Q6 0 0 -12 Q-6 0 0 8 Z" fill="#ff6f00" />
              <circle cx="0" cy="-4" r="3" fill="#fff9c4" />
            </g>
            <g transform="translate(450, 240)">
              <ellipse cx="0" cy="10" rx="20" ry="5" fill="#dfb76c" />
              <path d="M0 8 Q6 0 0 -12 Q-6 0 0 8 Z" fill="#ff6f00" />
              <circle cx="0" cy="-4" r="3" fill="#fff9c4" />
            </g>

            {/* Golden Lotus Pedestal & Rose Petals */}
            <g fill="#c2185b" opacity="0.8">
              <ellipse cx="240" cy="270" rx="5" ry="3" />
              <ellipse cx="360" cy="275" rx="6" ry="3" />
              <ellipse cx="280" cy="285" rx="5" ry="2.5" />
              <ellipse cx="320" cy="288" rx="6" ry="3" />
            </g>

            <text
              x="300"
              y="370"
              textAnchor="middle"
              fill="#721625"
              fontSize="12"
              fontFamily="serif"
              letterSpacing="3"
            >
              ✦ परिवार का आशीर्वाद • CHOOSING FOREVER TOGETHER ✦
            </text>
          </svg>
        );

      case 'tying-knot':
        return (
          <svg
            viewBox="0 0 600 400"
            className="artwork-svg artwork-tying-knot"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="bgMandap" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d0b13" />
                <stop offset="60%" stopColor="#5a131f" />
                <stop offset="100%" stopColor="#2c050a" />
              </linearGradient>
              <linearGradient id="goldPillar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8861d" />
                <stop offset="50%" stopColor="#faecd8" />
                <stop offset="100%" stopColor="#dfb76c" />
              </linearGradient>
            </defs>

            <rect width="600" height="400" fill="url(#bgMandap)" />

            {/* Royal Mandap Drapes & Pillars */}
            <rect x="70" y="80" width="22" height="320" fill="url(#goldPillar)" />
            <rect x="508" y="80" width="22" height="320" fill="url(#goldPillar)" />

            {/* Velvet Maroon & Gold Canopy Overhead */}
            <path
              d="M50 80 Q300 30 550 80 L550 110 Q300 70 50 110 Z"
              fill="#721625"
              stroke="#dfb76c"
              strokeWidth="2"
            />
            {/* Hanging Floral Garlands (Marigold & Jasmine) */}
            <g fill="#ffa000">
              {[90, 150, 210, 270, 330, 390, 450, 510].map((x) => (
                <g key={x}>
                  <circle cx={x} cy="115" r="4" />
                  <circle cx={x} cy="125" r="3.5" fill="#fff" />
                  <circle cx={x} cy="135" r="4" />
                  <circle cx={x} cy="145" r="4.5" fill="#dfb76c" />
                </g>
              ))}
            </g>

            {/* Sacred Havan Kund (Agni Sthalam) with Golden Holy Flames */}
            <g transform="translate(300, 270)">
              {/* Stepped Kund Base */}
              <polygon points="-90,50 90,50 70,75 -70,75" fill="#dfb76c" />
              <polygon points="-75,25 75,25 65,50 -65,50" fill="#b8861d" />
              <polygon points="-55,0 55,0 45,25 -45,25" fill="#721625" />

              {/* Radiant Holy Fire (Pavitra Agni) */}
              <path
                d="M-25 0 Q0 -65 15 -100 Q40 -50 25 0 Z"
                fill="#ff5722"
                opacity="0.9"
              />
              <path
                d="M-15 0 Q0 -55 5 -80 Q25 -40 15 0 Z"
                fill="#ff9800"
              />
              <path
                d="M-5 0 Q0 -40 2 -60 Q12 -30 5 0 Z"
                fill="#fff9c4"
              />
            </g>

            {/* Sacred Golden Gathbandhan (The Wedding Knot of 7 Lifetimes) */}
            <g transform="translate(300, 170)">
              {/* Groom's golden-bordered stole */}
              <path
                d="M-120 -20 Q-50 10 -5 10"
                stroke="#dfb76c"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              {/* Bride's red embroidered chunari */}
              <path
                d="M120 -20 Q50 10 5 10"
                stroke="#c2185b"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              {/* The Knot with auspicious bell/coin */}
              <circle cx="0" cy="10" r="14" fill="#721625" stroke="#dfb76c" strokeWidth="3" />
              <circle cx="0" cy="10" r="6" fill="#dfb76c" />
              <path d="M0 24 L0 45 M-5 38 L5 38" stroke="#dfb76c" strokeWidth="2" strokeLinecap="round" />
            </g>

            <text
              x="300"
              y="375"
              textAnchor="middle"
              fill="#dfb76c"
              fontSize="13"
              fontFamily="serif"
              letterSpacing="3"
            >
              ✦ सात जन्मों का पवित्र बंधन • FOREVER BEGINS ✦
            </text>
          </svg>
        );

      default:
        return (
          <div className="artwork-generic-placeholder">
            <span className="generic-placeholder-icon">✦</span>
            <span className="generic-placeholder-text">{altText}</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`story-artwork-container ${isLarge ? 'artwork-large' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      aria-label={onClick ? `${altText} (Click to enlarge)` : altText}
    >
      {photo.src ? (
        <div className="real-image-wrapper">
          <img
            src={photo.src}
            alt={altText}
            className={`story-real-image ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="image-skeleton-shimmer" aria-hidden="true" />
          )}
        </div>
      ) : (
        <div className="symbolic-art-wrapper">
          {renderSymbolicIllustration()}
        </div>
      )}

      {/* Subtle zoom magnifier loupe overlay on hover */}
      {onClick && (
        <div className="artwork-zoom-pill" aria-hidden="true">
          <span className="zoom-icon">⌕</span>
          <span className="zoom-text">{language === 'hi' ? 'बड़ा देखें' : 'View'}</span>
        </div>
      )}
    </div>
  );
};
