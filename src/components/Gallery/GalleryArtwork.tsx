import React, { useState } from 'react';
import { GalleryPhoto, SupportedLanguage } from '../../types/invitation';

interface GalleryArtworkProps {
  photo: GalleryPhoto;
  language: SupportedLanguage;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  className?: string;
  onClick?: () => void;
  showCaptionOverlay?: boolean;
}

/**
 * High-fidelity artwork and photo renderer for the Royal Wedding Gallery.
 * - Renders real photographs if `src` is provided (with smooth lazy loading & zoom).
 * - When real photos are pending, renders bespoke royal Indian wedding symbolic art folios
 *   crafted with traditional motifs, palace arches, and serene color palettes.
 * - Never shows fake stock photography of random strangers.
 */
export const GalleryArtwork: React.FC<GalleryArtworkProps> = ({
  photo,
  language,
  aspectRatio = photo.aspectRatio || 'landscape',
  className = '',
  onClick,
  showCaptionOverlay = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const altText = photo.alt[language] || photo.alt.en;
  const caption = photo.caption?.[language] || photo.caption?.en;

  const renderSymbolicArtwork = () => {
    switch (photo.symbolicType) {
      case 'sacred-ceremony':
        return (
          <svg
            viewBox="0 0 600 400"
            className="gallery-svg-folio svg-sacred-ceremony"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="scBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c0a10" />
                <stop offset="50%" stopColor="#4a111b" />
                <stop offset="100%" stopColor="#20060b" />
              </linearGradient>
              <linearGradient id="scGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf3d8" />
                <stop offset="50%" stopColor="#dfb76c" />
                <stop offset="100%" stopColor="#966c1b" />
              </linearGradient>
              <radialGradient id="scFire" cx="50%" cy="65%" r="45%">
                <stop offset="0%" stopColor="#ffe699" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#f39c12" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#c0392b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c0392b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="400" fill="url(#scBg)" />
            <circle cx="300" cy="240" r="140" fill="url(#scFire)" />
            {/* Mughal Arch Frame */}
            <path
              d="M 60 380 L 60 170 C 60 70, 200 40, 300 20 C 400 40, 540 70, 540 170 L 540 380"
              fill="none"
              stroke="url(#scGold)"
              strokeWidth="2.5"
              strokeDasharray="4,3"
              opacity="0.8"
            />
            {/* Sacred Havankund Steps */}
            <polygon points="210,310 390,310 370,350 230,350" fill="#dfb76c" opacity="0.3" stroke="url(#scGold)" strokeWidth="2" />
            <polygon points="230,350 370,350 350,375 250,375" fill="#dfb76c" opacity="0.4" stroke="url(#scGold)" strokeWidth="1.5" />
            {/* Sacred Flame */}
            <path
              d="M 300 170 C 275 220, 280 270, 300 310 C 320 270, 325 220, 300 170 Z"
              fill="#ffeaa7"
              opacity="0.95"
            />
            <path
              d="M 300 210 C 285 245, 290 280, 300 310 C 310 280, 315 245, 300 210 Z"
              fill="#e17055"
              opacity="0.9"
            />
            {/* Marigold Garland festoons */}
            <path d="M 60 170 Q 180 230 300 190 Q 420 230 540 170" fill="none" stroke="#f39c12" strokeWidth="6" strokeDasharray="6,8" opacity="0.85" />
            <path d="M 120 180 Q 300 240 480 180" fill="none" stroke="#e67e22" strokeWidth="4" strokeDasharray="5,7" opacity="0.75" />
            {/* Hanging Temple Bell */}
            <path d="M 300 20 L 300 85" stroke="url(#scGold)" strokeWidth="2" />
            <path d="M 285 110 C 285 90, 315 90, 315 110 L 320 120 L 280 120 Z" fill="url(#scGold)" />
            <circle cx="300" cy="126" r="3.5" fill="url(#scGold)" />
            <text x="300" y="388" textAnchor="middle" fill="#dfb76c" fontSize="12" letterSpacing="3" fontFamily="'Cinzel', serif" opacity="0.8">
              SACRED UNION & BLESSINGS
            </text>
          </svg>
        );

      case 'first-coffee':
        return (
          <svg
            viewBox="0 0 450 600"
            className="gallery-svg-folio svg-first-coffee"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="fcBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d2314" />
                <stop offset="60%" stopColor="#251208" />
                <stop offset="100%" stopColor="#150904" />
              </linearGradient>
              <linearGradient id="fcGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7e1b5" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#8c6d23" />
              </linearGradient>
              <radialGradient id="fcSteam" cx="50%" cy="40%" r="45%">
                <stop offset="0%" stopColor="#fff5eb" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fff5eb" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="450" height="600" fill="url(#fcBg)" />
            <circle cx="225" cy="300" r="180" fill="url(#fcSteam)" />
            {/* Palace Arch Border */}
            <path
              d="M 40 560 L 40 180 C 40 90, 150 40, 225 30 C 300 40, 410 90, 410 180 L 410 560"
              fill="none"
              stroke="url(#fcGold)"
              strokeWidth="2"
              opacity="0.7"
            />
            {/* Two Coffee Cups meeting */}
            <ellipse cx="225" cy="420" rx="140" ry="24" fill="#1b0c05" stroke="url(#fcGold)" strokeWidth="2" />
            {/* Left Cup */}
            <path d="M 140 340 L 150 410 C 150 425, 200 425, 200 410 L 210 340 Z" fill="#4a2511" stroke="url(#fcGold)" strokeWidth="1.5" />
            <path d="M 140 360 C 120 365, 120 395, 145 395" fill="none" stroke="url(#fcGold)" strokeWidth="2" />
            {/* Right Cup */}
            <path d="M 240 340 L 250 410 C 250 425, 300 425, 300 410 L 310 340 Z" fill="#4a2511" stroke="url(#fcGold)" strokeWidth="1.5" />
            <path d="M 310 360 C 330 365, 330 395, 305 395" fill="none" stroke="url(#fcGold)" strokeWidth="2" />
            {/* Steam swirling together */}
            <path d="M 175 320 C 160 270, 210 240, 190 190 C 180 160, 215 130, 225 110" fill="none" stroke="#f7e1b5" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 275 320 C 290 270, 240 240, 260 190 C 270 160, 235 130, 225 110" fill="none" stroke="#f7e1b5" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            {/* Gentle heart at intersection */}
            <path d="M 225 115 C 220 105, 208 105, 208 116 C 208 126, 225 138, 225 138 C 225 138, 242 126, 242 116 C 242 105, 230 105, 225 115 Z" fill="url(#fcGold)" opacity="0.8" />
            <text x="225" y="490" textAnchor="middle" fill="#d4af37" fontSize="13" letterSpacing="2" fontFamily="'Cinzel', serif">
              A FIRST CONVERSATION
            </text>
            <text x="225" y="515" textAnchor="middle" fill="#a89279" fontSize="11" fontFamily="'Great Vibes', cursive">
              where quiet magic began
            </text>
          </svg>
        );

      case 'palace-sunset':
        return (
          <svg
            viewBox="0 0 600 400"
            className="gallery-svg-folio svg-palace-sunset"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="psSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c1a4d" />
                <stop offset="35%" stopColor="#7c2a55" />
                <stop offset="70%" stopColor="#c85a47" />
                <stop offset="100%" stopColor="#f39c12" />
              </linearGradient>
              <linearGradient id="psWater" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e67e22" />
                <stop offset="40%" stopColor="#6c3483" />
                <stop offset="100%" stopColor="#1a0f2e" />
              </linearGradient>
              <radialGradient id="psSun" cx="50%" cy="58%" r="40%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#f39c12" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f39c12" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="250" fill="url(#psSky)" />
            <circle cx="300" cy="220" r="110" fill="url(#psSun)" />
            <circle cx="300" cy="220" r="42" fill="#fff9db" />
            {/* Water */}
            <rect y="250" width="600" height="150" fill="url(#psWater)" />
            {/* Water shimmer lines */}
            <ellipse cx="300" cy="265" rx="90" ry="3" fill="#fff3b0" opacity="0.6" />
            <ellipse cx="280" cy="280" rx="140" ry="3" fill="#ffd166" opacity="0.5" />
            <ellipse cx="320" cy="300" rx="110" ry="2.5" fill="#ffd166" opacity="0.4" />
            <ellipse cx="300" cy="325" rx="70" ry="2" fill="#ffd166" opacity="0.3" />
            {/* Palace Skyline Silhouette */}
            <path
              d="M 0 250 L 50 250 L 50 210 L 80 210 L 80 180 C 80 160, 110 160, 110 180 L 110 210 L 140 210 L 140 250 L 220 250 L 220 195 L 250 195 C 250 170, 290 170, 290 195 L 310 195 C 310 170, 350 170, 350 195 L 380 195 L 380 250 L 460 250 L 460 205 L 490 205 C 490 185, 520 185, 520 205 L 550 205 L 550 250 L 600 250 L 600 260 L 0 260 Z"
              fill="#220e29"
            />
            {/* Traditional boat silhouette */}
            <path d="M 420 285 C 450 285, 470 290, 480 300 L 410 300 C 412 292, 415 285, 420 285 Z" fill="#1a0f2e" />
            <line x1="445" y1="275" x2="445" y2="295" stroke="#1a0f2e" strokeWidth="2" />
            <text x="300" y="380" textAnchor="middle" fill="#fdf3d8" fontSize="12" letterSpacing="3" fontFamily="'Cinzel', serif" opacity="0.85">
              LAKE PICHOLA • UDAIPUR
            </text>
          </svg>
        );

      case 'festival-lights':
        return (
          <svg
            viewBox="0 0 500 500"
            className="gallery-svg-folio svg-festival-lights"
            role="img"
            aria-label={altText}
          >
            <defs>
              <radialGradient id="flGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#401408" />
                <stop offset="60%" stopColor="#250904" />
                <stop offset="100%" stopColor="#120301" />
              </radialGradient>
              <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#f39c12" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#c0392b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c0392b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="500" height="500" fill="url(#flGlow)" />
            {/* Rangoli circular pattern */}
            <circle cx="250" cy="270" r="160" fill="none" stroke="#dfb76c" strokeWidth="1" strokeDasharray="3,4" opacity="0.5" />
            <circle cx="250" cy="270" r="110" fill="none" stroke="#dfb76c" strokeWidth="1" opacity="0.4" />
            {/* Multiple gentle Diyas */}
            {/* Center large Diya */}
            <circle cx="250" cy="245" r="95" fill="url(#lampGlow)" />
            <path d="M 180 270 Q 250 330 320 270 Q 250 290 180 270 Z" fill="#b3541e" stroke="#dfb76c" strokeWidth="1.5" />
            <path d="M 250 205 C 235 235, 240 255, 250 272 C 260 255, 265 235, 250 205 Z" fill="#fffae6" />
            <path d="M 250 225 C 242 245, 245 258, 250 270 C 255 258, 258 245, 250 225 Z" fill="#f39c12" />
            {/* Side smaller diyas */}
            <g transform="translate(-110, 20)">
              <circle cx="250" cy="255" r="50" fill="url(#lampGlow)" opacity="0.8" />
              <path d="M 210 270 Q 250 310 290 270 Q 250 285 210 270 Z" fill="#8c3d13" stroke="#dfb76c" strokeWidth="1" />
              <path d="M 250 230 C 240 250, 243 260, 250 270 C 257 260, 260 250, 250 230 Z" fill="#fff3b0" />
            </g>
            <g transform="translate(110, 20)">
              <circle cx="250" cy="255" r="50" fill="url(#lampGlow)" opacity="0.8" />
              <path d="M 210 270 Q 250 310 290 270 Q 250 285 210 270 Z" fill="#8c3d13" stroke="#dfb76c" strokeWidth="1" />
              <path d="M 250 230 C 240 250, 243 260, 250 270 C 257 260, 260 250, 250 230 Z" fill="#fff3b0" />
            </g>
            {/* Fresh Marigold Petals */}
            <circle cx="200" cy="310" r="5" fill="#f39c12" opacity="0.85" />
            <circle cx="220" cy="330" r="6" fill="#e67e22" opacity="0.85" />
            <circle cx="250" cy="340" r="7" fill="#f1c40f" opacity="0.85" />
            <circle cx="280" cy="330" r="6" fill="#e67e22" opacity="0.85" />
            <circle cx="300" cy="310" r="5" fill="#f39c12" opacity="0.85" />
            <text x="250" y="440" textAnchor="middle" fill="#dfb76c" fontSize="13" letterSpacing="3" fontFamily="'Cinzel', serif">
              FESTIVAL OF LIGHTS
            </text>
            <text x="250" y="465" textAnchor="middle" fill="#e0a96d" fontSize="11" fontFamily="'Great Vibes', cursive">
              bright memories with family
            </text>
          </svg>
        );

      case 'starlit-promise':
        return (
          <svg
            viewBox="0 0 450 600"
            className="gallery-svg-folio svg-starlit-promise"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="spNight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#080e1e" />
                <stop offset="60%" stopColor="#151f38" />
                <stop offset="100%" stopColor="#2c334d" />
              </linearGradient>
            </defs>
            <rect width="450" height="600" fill="url(#spNight)" />
            {/* Twinkling stars */}
            <circle cx="80" cy="90" r="1.5" fill="#ffffff" opacity="0.9" />
            <circle cx="140" cy="130" r="2" fill="#fff5cc" opacity="0.8" />
            <circle cx="220" cy="80" r="2.5" fill="#ffffff" opacity="0.95" />
            <circle cx="310" cy="110" r="1.5" fill="#fff5cc" opacity="0.75" />
            <circle cx="370" cy="70" r="2" fill="#ffffff" opacity="0.9" />
            <circle cx="100" cy="220" r="1.5" fill="#ffffff" opacity="0.7" />
            <circle cx="350" cy="240" r="2" fill="#fff5cc" opacity="0.85" />
            {/* Luminous Crescent Moon */}
            <path
              d="M 330 140 A 45 45 0 0 0 350 215 A 55 55 0 1 1 330 140 Z"
              fill="#fff9e6"
              filter="drop-shadow(0 0 10px rgba(255, 249, 230, 0.7))"
            />
            {/* Royal Jharokha Balcony Arch */}
            <path
              d="M 50 600 L 50 320 C 50 200, 160 160, 225 150 C 290 160, 400 200, 400 320 L 400 600"
              fill="none"
              stroke="#dfb76c"
              strokeWidth="2"
              opacity="0.75"
            />
            {/* Jharokha Trellis Railing */}
            <rect x="50" y="440" width="350" height="160" fill="#101524" stroke="#dfb76c" strokeWidth="2" />
            <line x1="50" y1="480" x2="400" y2="480" stroke="#dfb76c" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="520" x2="400" y2="520" stroke="#dfb76c" strokeWidth="1.5" opacity="0.6" />
            {/* Trellis diamonds */}
            <path d="M 80 440 L 105 480 L 80 520 L 55 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 130 440 L 155 480 L 130 520 L 105 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 180 440 L 205 480 L 180 520 L 155 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 230 440 L 255 480 L 230 520 L 205 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 280 440 L 305 480 L 280 520 L 255 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 330 440 L 355 480 L 330 520 L 305 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            <path d="M 380 440 L 405 480 L 380 520 L 355 480 Z" fill="none" stroke="#dfb76c" opacity="0.4" />
            {/* Couple holding hands in silhouette */}
            <circle cx="205" cy="360" r="18" fill="#0b0f1a" />
            <path d="M 185 440 L 195 385 C 195 378, 220 378, 220 385 L 225 440 Z" fill="#0b0f1a" />
            <circle cx="245" cy="365" r="16" fill="#0b0f1a" />
            <path d="M 230 440 L 235 390 C 235 384, 260 384, 260 390 L 265 440 Z" fill="#0b0f1a" />
            {/* Entwined hands */}
            <path d="M 215 410 Q 225 416 235 410" stroke="#dfb76c" strokeWidth="2.5" fill="none" opacity="0.9" />
            <text x="225" y="560" textAnchor="middle" fill="#dfb76c" fontSize="13" letterSpacing="3" fontFamily="'Cinzel', serif">
              A PROMISE UNDER STARS
            </text>
          </svg>
        );

      case 'mountain-mist':
        return (
          <svg
            viewBox="0 0 600 400"
            className="gallery-svg-folio svg-mountain-mist"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="mmSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3c50" />
                <stop offset="50%" stopColor="#5d8aa8" />
                <stop offset="100%" stopColor="#c5d8e2" />
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#mmSky)" />
            {/* Far mountains */}
            <polygon points="0,400 120,220 280,400" fill="#3a5a70" opacity="0.5" />
            <polygon points="180,400 360,180 520,400" fill="#2d495d" opacity="0.6" />
            <polygon points="380,400 500,240 600,400" fill="#325266" opacity="0.5" />
            {/* Mid mountain with snow caps */}
            <polygon points="60,400 240,200 420,400" fill="#243c4d" opacity="0.85" />
            <polygon points="215,228 240,200 265,228 250,222 240,230 230,222" fill="#ffffff" opacity="0.9" />
            {/* Mist bands */}
            <ellipse cx="300" cy="300" rx="280" ry="25" fill="#f0f7fa" opacity="0.4" />
            <ellipse cx="250" cy="340" rx="320" ry="30" fill="#e2edf2" opacity="0.5" />
            {/* Pine tree silhouettes */}
            <polygon points="480,400 495,310 510,400" fill="#11202b" />
            <polygon points="515,400 530,280 545,400" fill="#0d1922" />
            <polygon points="545,400 560,320 575,400" fill="#11202b" />
            <polygon points="60,400 75,300 90,400" fill="#0f1d27" />
            <polygon points="85,400 100,330 115,400" fill="#142430" />
            <text x="300" y="380" textAnchor="middle" fill="#11202b" fontSize="12" letterSpacing="3" fontFamily="'Cinzel', serif" opacity="0.9">
              PINE TRAILS & FRESH AIR
            </text>
          </svg>
        );

      case 'monsoon-tea':
        return (
          <svg
            viewBox="0 0 450 600"
            className="gallery-svg-folio svg-monsoon-tea"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="mtBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a2e26" />
                <stop offset="60%" stopColor="#12201a" />
                <stop offset="100%" stopColor="#0b1410" />
              </linearGradient>
            </defs>
            <rect width="450" height="600" fill="url(#mtBg)" />
            {/* Gentle rain streaks */}
            <g stroke="#a8d5c2" strokeWidth="1.2" opacity="0.4" strokeDasharray="12,18">
              <line x1="50" y1="0" x2="30" y2="600" />
              <line x1="120" y1="0" x2="100" y2="600" />
              <line x1="190" y1="0" x2="170" y2="600" />
              <line x1="260" y1="0" x2="240" y2="600" />
              <line x1="330" y1="0" x2="310" y2="600" />
              <line x1="400" y1="0" x2="380" y2="600" />
            </g>
            {/* Veranda wooden window frame */}
            <rect x="35" y="40" width="380" height="520" fill="none" stroke="#c49b66" strokeWidth="3" />
            <rect x="50" y="55" width="350" height="490" fill="none" stroke="#dfb76c" strokeWidth="1" strokeDasharray="4,4" />
            {/* Traditional brass chai kettle */}
            <path d="M 120 450 L 130 360 C 130 320, 210 320, 210 360 L 220 450 Z" fill="#b8861d" stroke="#fdf0cd" strokeWidth="1.5" />
            <path d="M 105 390 C 85 370, 85 340, 105 320 L 135 345" fill="none" stroke="#fdf0cd" strokeWidth="3" />
            <path d="M 215 370 C 245 360, 260 330, 255 315" fill="none" stroke="#fdf0cd" strokeWidth="4" strokeLinecap="round" />
            {/* Two terracotta kulhad cups */}
            <polygon points="260,400 310,400 300,460 270,460" fill="#a0522d" stroke="#dfb76c" strokeWidth="1.5" />
            <polygon points="320,410 365,410 355,460 330,460" fill="#8b4513" stroke="#dfb76c" strokeWidth="1.5" />
            {/* Swirling chai steam */}
            <path d="M 285 385 C 275 345, 310 320, 290 280" fill="none" stroke="#f0fff0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 345 395 C 335 355, 370 330, 350 290" fill="none" stroke="#f0fff0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <text x="225" y="515" textAnchor="middle" fill="#dfb76c" fontSize="13" letterSpacing="3" fontFamily="'Cinzel', serif">
              MONSOON CONVERSATIONS
            </text>
            <text x="225" y="540" textAnchor="middle" fill="#98b5a5" fontSize="11" fontFamily="'Great Vibes', cursive">
              chai, raindrops & endless warmth
            </text>
          </svg>
        );

      case 'ring-exchange':
        return (
          <svg
            viewBox="0 0 500 500"
            className="gallery-svg-folio svg-ring-exchange"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="reBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b0a13" />
                <stop offset="60%" stopColor="#25050b" />
                <stop offset="100%" stopColor="#140206" />
              </linearGradient>
              <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff6d6" />
                <stop offset="50%" stopColor="#dfb76c" />
                <stop offset="100%" stopColor="#966c1b" />
              </linearGradient>
              <radialGradient id="ringGlow" cx="50%" cy="50%" r="45%">
                <stop offset="0%" stopColor="#fffaed" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#dfb76c" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#dfb76c" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="500" height="500" fill="url(#reBg)" />
            <circle cx="250" cy="230" r="130" fill="url(#ringGlow)" />
            {/* Velvet Ring Cushion */}
            <path
              d="M 120 280 C 120 250, 380 250, 380 280 C 380 340, 120 340, 120 280 Z"
              fill="#520f18"
              stroke="url(#goldRing)"
              strokeWidth="2"
            />
            {/* Cushion tufting creases */}
            <path d="M 210 270 Q 250 290 290 270" stroke="#dfb76c" strokeWidth="1" opacity="0.4" fill="none" />
            <path d="M 180 290 Q 250 315 320 290" stroke="#dfb76c" strokeWidth="1" opacity="0.4" fill="none" />
            {/* Two Intertwined Golden Rings */}
            {/* Left Ring */}
            <ellipse
              cx="220"
              cy="210"
              rx="45"
              ry="55"
              fill="none"
              stroke="url(#goldRing)"
              strokeWidth="9"
              transform="rotate(-20 220 210)"
            />
            {/* Right Ring with Solitaire Spark */}
            <ellipse
              cx="280"
              cy="210"
              rx="45"
              ry="55"
              fill="none"
              stroke="url(#goldRing)"
              strokeWidth="9"
              transform="rotate(20 280 210)"
            />
            {/* Diamond Sparkle */}
            <polygon points="280,145 285,155 295,160 285,165 280,175 275,165 265,160 275,155" fill="#ffffff" filter="drop-shadow(0 0 6px rgba(255,255,255,0.9))" />
            {/* Fresh Rose Petals around cushion */}
            <path d="M 140 330 C 130 320, 135 305, 150 310 C 165 315, 155 335, 140 330 Z" fill="#a01828" opacity="0.85" />
            <path d="M 350 325 C 360 315, 355 300, 340 305 C 325 310, 335 330, 350 325 Z" fill="#a01828" opacity="0.85" />
            <path d="M 250 340 C 240 330, 245 315, 260 320 C 275 325, 265 345, 250 340 Z" fill="#b82034" opacity="0.9" />
            <text x="250" y="420" textAnchor="middle" fill="#dfb76c" fontSize="13" letterSpacing="3" fontFamily="'Cinzel', serif">
              ETERNAL PROMISE
            </text>
            <text x="250" y="445" textAnchor="middle" fill="#fdf0cd" fontSize="11" fontFamily="'Great Vibes', cursive">
              two lives joined in eternal love
            </text>
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 500 400"
            className="gallery-svg-folio svg-default-folio"
            role="img"
            aria-label={altText}
          >
            <defs>
              <linearGradient id="dfBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c0a10" />
                <stop offset="100%" stopColor="#140206" />
              </linearGradient>
            </defs>
            <rect width="500" height="400" fill="url(#dfBg)" />
            <path
              d="M 50 360 L 50 150 C 50 70, 160 40, 250 30 C 340 40, 450 70, 450 150 L 450 360"
              fill="none"
              stroke="#dfb76c"
              strokeWidth="2"
              opacity="0.8"
            />
            <circle cx="250" cy="180" r="45" fill="none" stroke="#dfb76c" strokeWidth="2" />
            <text x="250" y="190" textAnchor="middle" fill="#dfb76c" fontSize="26" fontFamily="'Cinzel', serif">
              H & S
            </text>
            <text x="250" y="270" textAnchor="middle" fill="#fdf0cd" fontSize="13" letterSpacing="2" fontFamily="'Cinzel', serif">
              CHERISHED MOMENT
            </text>
          </svg>
        );
    }
  };

  const hasRealPhoto = Boolean(photo.src && !imageError);

  return (
    <div
      className={`gallery-artwork-frame aspect-${aspectRatio} ${className} ${hasRealPhoto ? 'has-real-photo' : 'is-symbolic-art'}`}
      onClick={onClick}
    >
      {hasRealPhoto ? (
        <>
          {!imageLoaded && (
            <div className="gallery-image-skeleton" aria-hidden="true">
              <div className="skeleton-monogram">H & S</div>
            </div>
          )}
          <img
            src={photo.src}
            alt={altText}
            loading="lazy"
            decoding="async"
            className={`gallery-real-img ${imageLoaded ? 'is-loaded' : 'is-loading'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </>
      ) : (
        <div className="gallery-symbolic-container">
          {renderSymbolicArtwork()}
          <div className="symbolic-art-badge" aria-hidden="true">
            <span className="badge-sparkle">✦</span>
            <span className="badge-text">
              {language === 'hi' ? 'अनमोल संस्मरण' : 'Cherished Memory'}
            </span>
          </div>
        </div>
      )}

      {/* Decorative Gold Filigree Corner Accents */}
      <span className="gold-filigree-corner corner-tl" aria-hidden="true" />
      <span className="gold-filigree-corner corner-tr" aria-hidden="true" />
      <span className="gold-filigree-corner corner-bl" aria-hidden="true" />
      <span className="gold-filigree-corner corner-br" aria-hidden="true" />

      {/* Optional Hover / Caption Overlay */}
      {showCaptionOverlay && caption && (
        <div className="gallery-card-overlay">
          <p className="card-overlay-caption">{caption}</p>
          <span className="card-overlay-zoom-hint">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>{language === 'hi' ? 'विस्तार से देखें' : 'View Full Size'}</span>
          </span>
        </div>
      )}
    </div>
  );
};
