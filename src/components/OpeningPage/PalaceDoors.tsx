import React from 'react';
import { DoorTheme } from '../../types/invitation';
import { doorThemes, defaultDoorTheme } from '../../config/doorThemes.config';

interface PalaceDoorsProps {
  isOpen: boolean;
  onOpen?: () => void;
  theme?: DoorTheme;
}

/**
 * Grand Double Palace Doors with:
 * - Traditional Indian wedding Nagada (नगाड़े) and Shehnai (शहनाई) at the center of both doors
 * - Clean royal architectural door leaves without monogram clutter
 * - 3D perspective outward swinging doors that automatically open on page load
 */
export const PalaceDoors: React.FC<PalaceDoorsProps> = ({
  isOpen,
  theme = defaultDoorTheme,
}) => {
  const currentTheme = doorThemes[theme] || doorThemes[defaultDoorTheme];

  return (
    <div
      className={`palace-doors-3d-stage ${isOpen ? 'doors-open' : 'doors-closed'}`}
      aria-hidden="true"
    >
      {/* LEFT PALACE DOOR */}
      <div className="palace-door-leaf door-left" aria-hidden="true">
        <svg
          className="door-vector-svg"
          viewBox="0 0 280 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Themed Door Lacquer Gradient (Left) */}
            <linearGradient id="doorLacquarLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentTheme.doorGradStops[0]} />
              <stop offset="35%" stopColor={currentTheme.doorGradStops[1]} />
              <stop offset="75%" stopColor={currentTheme.doorGradStops[2]} />
              <stop offset="100%" stopColor={currentTheme.doorGradStops[3]} />
            </linearGradient>

            {/* Antique Gold Metallic Trim */}
            <linearGradient id="doorGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#966e1b" />
              <stop offset="25%" stopColor="#dfb76c" />
              <stop offset="50%" stopColor="#fff2c7" />
              <stop offset="75%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#805710" />
            </linearGradient>

            {/* Recessed Panel Inner Shadow */}
            <radialGradient id="panelDepthLeft" cx="80%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.12" />
              <stop offset="60%" stopColor={currentTheme.recessedDepthBase} stopOpacity="0.4" />
              <stop offset="100%" stopColor={currentTheme.recessedDepthBase} stopOpacity="0.8" />
            </radialGradient>

            {/* Brass Stud Highlight */}
            <radialGradient id="brassStudGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fff8e7" />
              <stop offset="40%" stopColor="#dfb76c" />
              <stop offset="85%" stopColor="#8f6414" />
              <stop offset="100%" stopColor="#4d3408" />
            </radialGradient>

            {/* Crimson Silk Tassel Red */}
            <linearGradient id="tasselRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d32f2f" />
              <stop offset="100%" stopColor="#7f0000" />
            </linearGradient>
          </defs>

          {/* Door Base Plate */}
          <rect width="280" height="720" fill="url(#doorLacquarLeft)" />
          <rect width="280" height="720" fill="url(#panelDepthLeft)" />

          {/* Outer Carved Beveled Margin */}
          <rect
            x="12"
            y="14"
            width="256"
            height="692"
            stroke="url(#doorGoldGrad)"
            strokeWidth="2.5"
            rx="4"
          />

          {/* Inset Gold Beaded Trim */}
          <rect
            x="20"
            y="22"
            width="240"
            height="676"
            stroke="url(#doorGoldGrad)"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.85"
          />

          {/* UPPER CARVED ARCHED PANEL */}
          <g className="door-panel-upper">
            <path
              d="
                M 36 210
                V 70
                C 36 50 50 38 72 38
                H 228
                C 250 38 264 50 264 70
                V 210
                Z
              "
              fill={currentTheme.recessedUpper}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
            />
            {/* Jaali Cutwork Lattice */}
            <g stroke="url(#doorGoldGrad)" strokeWidth="0.8" opacity="0.45">
              <line x1="50" y1="50" x2="250" y2="190" />
              <line x1="90" y1="50" x2="260" y2="170" />
              <line x1="130" y1="50" x2="260" y2="140" />
              <line x1="50" y1="90" x2="210" y2="200" />
              <line x1="50" y1="130" x2="170" y2="210" />

              <line x1="250" y1="50" x2="50" y2="190" />
              <line x1="210" y1="50" x2="40" y2="170" />
              <line x1="170" y1="50" x2="40" y2="140" />
              <line x1="250" y1="90" x2="90" y2="200" />
              <line x1="250" y1="130" x2="130" y2="210" />
            </g>
            <circle cx="150" cy="85" r="14" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
            <circle cx="150" cy="85" r="5" fill="url(#doorGoldGrad)" opacity="0.8" />
          </g>

          {/* CENTER PANEL: AUSPICIOUS WEDDING SHEHNAI & NAGADA (LEFT SIDE) */}
          <g className="door-panel-center">
            <rect
              x="36"
              y="228"
              width="228"
              height="260"
              fill={currentTheme.recessedCenter}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
              rx="4"
            />
            <rect
              x="46"
              y="238"
              width="208"
              height="240"
              stroke="url(#doorGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.65"
            />

            {/* Sacred Lotus Crest Header above Nagada */}
            <g transform="translate(150, 268)">
              <circle r="18" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
              <circle r="4" fill="url(#doorGoldGrad)" />
              {/* Petal flourishes */}
              <path d="M 0 -18 C -6 -10 6 -10 0 -18 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
              <path d="M -18 0 C -10 -6 -10 6 -18 0 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
              <path d="M 18 0 C 10 -6 10 6 18 0 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
            </g>

            {/* LEFT NAGADA (नगाड़ा / Kettledrum) */}
            <g className="nagada-drum-left" transform="translate(118, 385)">
              {/* Copper/Brass Kettle Drum Bowl */}
              <path
                d="M -34 0 C -34 32 34 32 34 0 Z"
                fill="url(#brassStudGrad)"
                stroke="#5a3d0a"
                strokeWidth="1.2"
              />
              {/* Drumhead Rim Ring */}
              <ellipse cx="0" cy="0" rx="34" ry="10" fill="#fdf8e6" stroke="url(#doorGoldGrad)" strokeWidth="1.4" />
              {/* Inner Tanned Leather Skin Head */}
              <ellipse cx="0" cy="0" rx="28" ry="7" fill="#f3e8cf" stroke="#8f6414" strokeWidth="0.8" />
              {/* Center Sound Spot (Syahi) */}
              <ellipse cx="0" cy="0" rx="10" ry="3" fill="#2d1c07" opacity="0.75" />

              {/* Traditional Leather Zigzag Lacing Cords (Chot / Badhi) */}
              <g stroke="#6e4612" strokeWidth="1" opacity="0.85">
                <line x1="-30" y1="5" x2="-22" y2="24" />
                <line x1="-22" y1="24" x2="-12" y2="8" />
                <line x1="-12" y1="8" x2="0" y2="26" />
                <line x1="0" y1="26" x2="12" y2="8" />
                <line x1="12" y1="8" x2="22" y2="24" />
                <line x1="22" y1="24" x2="30" y2="5" />
              </g>

              {/* Wooden Drumstick (Danka / Chob) */}
              <g transform="translate(-18, -12) rotate(32)">
                <path d="M 0 0 L 0 38" stroke="#dfb76c" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="4.5" fill="url(#brassStudGrad)" stroke="#4d3408" strokeWidth="0.8" />
              </g>
            </g>

            {/* LEFT SHEHNAI (शहनाई / Auspicious Wedding Oboe) */}
            <g className="shehnai-pipe-left" transform="translate(196, 325) rotate(-34)">
              {/* Slender Tapered Wooden Body */}
              <path
                d="M -4 -48 L 4 -48 L 7 36 L -7 36 Z"
                fill="#2c1a0e"
                stroke="url(#doorGoldGrad)"
                strokeWidth="1"
              />
              {/* Brass Sound Holes */}
              {[-32, -20, -8, 4, 16, 28].map((y, i) => (
                <circle key={`hole-l-${i}`} cx="0" cy={y} r="2" fill="url(#brassStudGrad)" />
              ))}

              {/* Flared Brass Bell (Pyala) at the base */}
              <path
                d="M -7 36 C -18 42 -22 56 0 56 C 22 56 18 42 7 36 Z"
                fill="url(#brassStudGrad)"
                stroke="#5a3d0a"
                strokeWidth="1.2"
              />
              <ellipse cx="0" cy="56" rx="16" ry="4" fill="#fff8e7" opacity="0.6" />

              {/* Top Reed Mouthpiece (Patti / Nal) */}
              <path d="M -2 -48 L 2 -48 L 1 -58 L -1 -58 Z" fill="url(#doorGoldGrad)" />
              <ellipse cx="0" cy="-58" rx="2.5" ry="1.2" fill="#dfb76c" />

              {/* Auspicious Silk Tassels (Latkan) hanging from bell */}
              <g transform="translate(0, 56)">
                <line x1="0" y1="0" x2="-8" y2="16" stroke="#c59b27" strokeWidth="1" />
                <circle cx="-8" cy="16" r="2.5" fill="url(#tasselRed)" />
                <path d="M -10 18 L -6 18 L -8 26 Z" fill="url(#tasselRed)" />

                <line x1="0" y1="0" x2="8" y2="16" stroke="#c59b27" strokeWidth="1" />
                <circle cx="8" cy="16" r="2.5" fill="url(#tasselRed)" />
                <path d="M 6 18 L 10 18 L 8 26 Z" fill="url(#tasselRed)" />
              </g>
            </g>

            {/* Bottom Auspicious Decorative Scroll */}
            <g transform="translate(150, 452)" stroke="url(#doorGoldGrad)" fill="none" opacity="0.7">
              <path d="M -48 0 C -24 8 24 8 48 0" strokeWidth="1.2" />
              <circle cx="0" cy="5" r="3" fill="url(#doorGoldGrad)" />
              <circle cx="-24" cy="4" r="1.5" fill="url(#doorGoldGrad)" />
              <circle cx="24" cy="4" r="1.5" fill="url(#doorGoldGrad)" />
            </g>
          </g>

          {/* LOWER CARVED GEOMETRIC CHEVRON PANEL */}
          <g className="door-panel-lower">
            <rect
              x="36"
              y="506"
              width="228"
              height="180"
              fill={currentTheme.recessedLower}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
              rx="4"
            />
            <rect
              x="46"
              y="516"
              width="208"
              height="160"
              stroke="url(#doorGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.65"
            />
            <g stroke="url(#doorGoldGrad)" strokeWidth="1" opacity="0.45">
              <path d="M 60 596 L 150 550 L 240 596" fill="none" />
              <path d="M 60 616 L 150 570 L 240 616" fill="none" />
              <path d="M 60 636 L 150 590 L 240 636" fill="none" />
            </g>
          </g>

          {/* BRASS STUDS (SHINGAAR KEEL) */}
          <g className="brass-studs-group">
            {[45, 120, 200, 280, 360, 440, 520, 600, 675].map((y, i) => (
              <g key={`stud-l-${i}`} transform={`translate(26, ${y})`}>
                <circle cx="0" cy="0" r="5.5" fill="url(#brassStudGrad)" />
                <circle cx="0" cy="0" r="6.5" stroke="#4d3408" strokeWidth="0.6" fill="none" />
              </g>
            ))}
          </g>

          {/* LEFT DOOR KNOCKER (BRASS KUNDA & ROSETTE) */}
          <g className="door-knocker left-knocker" transform="translate(254, 400)">
            <circle cx="0" cy="0" r="16" fill="url(#doorGoldGrad)" />
            <circle cx="0" cy="0" r="18" stroke="#4d3408" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="13" stroke="#fff8e7" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
            <path
              d="M -12 6 C -12 24 12 24 12 6 C 10 2 6 0 0 0 C -6 0 -10 2 -12 6 Z"
              fill="url(#brassStudGrad)"
              stroke="#5a3d0a"
              strokeWidth="1.2"
              filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.6))"
            />
            <circle cx="0" cy="0" r="5" fill="#fff8e7" />
          </g>

          {/* Center Astragal Overlap Lip */}
          <rect x="274" y="0" width="6" height="720" fill="url(#doorGoldGrad)" opacity="0.9" />
        </svg>

        <div className="door-lighting-overlay" />
      </div>

      {/* RIGHT PALACE DOOR */}
      <div className="palace-door-leaf door-right" aria-hidden="true">
        <svg
          className="door-vector-svg"
          viewBox="0 0 280 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="doorLacquarRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentTheme.doorGradStops[0]} />
              <stop offset="35%" stopColor={currentTheme.doorGradStops[1]} />
              <stop offset="75%" stopColor={currentTheme.doorGradStops[2]} />
              <stop offset="100%" stopColor={currentTheme.doorGradStops[3]} />
            </linearGradient>

            <radialGradient id="panelDepthRight" cx="20%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.12" />
              <stop offset="60%" stopColor={currentTheme.recessedDepthBase} stopOpacity="0.4" />
              <stop offset="100%" stopColor={currentTheme.recessedDepthBase} stopOpacity="0.8" />
            </radialGradient>
          </defs>

          <rect width="280" height="720" fill="url(#doorLacquarRight)" />
          <rect width="280" height="720" fill="url(#panelDepthRight)" />

          <rect
            x="12"
            y="14"
            width="256"
            height="692"
            stroke="url(#doorGoldGrad)"
            strokeWidth="2.5"
            rx="4"
          />

          <rect
            x="20"
            y="22"
            width="240"
            height="676"
            stroke="url(#doorGoldGrad)"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.85"
          />

          {/* UPPER CARVED ARCHED PANEL */}
          <g className="door-panel-upper">
            <path
              d="
                M 16 210
                V 70
                C 16 50 30 38 52 38
                H 244
                C 264 38 274 50 274 70
                V 210
                Z
              "
              fill={currentTheme.recessedUpper}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
            />
            <g stroke="url(#doorGoldGrad)" strokeWidth="0.8" opacity="0.45">
              <line x1="30" y1="50" x2="230" y2="190" />
              <line x1="70" y1="50" x2="240" y2="170" />
              <line x1="110" y1="50" x2="240" y2="140" />
              <line x1="30" y1="90" x2="190" y2="200" />
              <line x1="30" y1="130" x2="150" y2="210" />

              <line x1="230" y1="50" x2="30" y2="190" />
              <line x1="190" y1="50" x2="20" y2="170" />
              <line x1="150" y1="50" x2="20" y2="140" />
              <line x1="230" y1="90" x2="70" y2="200" />
              <line x1="230" y1="130" x2="110" y2="210" />
            </g>
            <circle cx="130" cy="85" r="14" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
            <circle cx="130" cy="85" r="5" fill="url(#doorGoldGrad)" opacity="0.8" />
          </g>

          {/* CENTER PANEL: AUSPICIOUS WEDDING SHEHNAI & NAGADA (RIGHT SIDE - MIRRORED) */}
          <g className="door-panel-center">
            <rect
              x="16"
              y="228"
              width="228"
              height="260"
              fill={currentTheme.recessedCenter}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
              rx="4"
            />
            <rect
              x="26"
              y="238"
              width="208"
              height="240"
              stroke="url(#doorGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.65"
            />

            {/* Sacred Lotus Crest Header above Nagada */}
            <g transform="translate(130, 268)">
              <circle r="18" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
              <circle r="4" fill="url(#doorGoldGrad)" />
              <path d="M 0 -18 C -6 -10 6 -10 0 -18 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
              <path d="M -18 0 C -10 -6 -10 6 -18 0 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
              <path d="M 18 0 C 10 -6 10 6 18 0 Z" fill="url(#doorGoldGrad)" opacity="0.8" />
            </g>

            {/* RIGHT NAGADA (नगाड़ा / Kettledrum) */}
            <g className="nagada-drum-right" transform="translate(162, 385)">
              <path
                d="M -34 0 C -34 32 34 32 34 0 Z"
                fill="url(#brassStudGrad)"
                stroke="#5a3d0a"
                strokeWidth="1.2"
              />
              <ellipse cx="0" cy="0" rx="34" ry="10" fill="#fdf8e6" stroke="url(#doorGoldGrad)" strokeWidth="1.4" />
              <ellipse cx="0" cy="0" rx="28" ry="7" fill="#f3e8cf" stroke="#8f6414" strokeWidth="0.8" />
              <ellipse cx="0" cy="0" rx="10" ry="3" fill="#2d1c07" opacity="0.75" />

              <g stroke="#6e4612" strokeWidth="1" opacity="0.85">
                <line x1="-30" y1="5" x2="-22" y2="24" />
                <line x1="-22" y1="24" x2="-12" y2="8" />
                <line x1="-12" y1="8" x2="0" y2="26" />
                <line x1="0" y1="26" x2="12" y2="8" />
                <line x1="12" y1="8" x2="22" y2="24" />
                <line x1="22" y1="24" x2="30" y2="5" />
              </g>

              {/* Wooden Drumstick (Danka / Chob) */}
              <g transform="translate(18, -12) rotate(-32)">
                <path d="M 0 0 L 0 38" stroke="#dfb76c" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="4.5" fill="url(#brassStudGrad)" stroke="#4d3408" strokeWidth="0.8" />
              </g>
            </g>

            {/* RIGHT SHEHNAI (शहनाई / Auspicious Wedding Oboe - Angled toward Center) */}
            <g className="shehnai-pipe-right" transform="translate(84, 325) rotate(34)">
              <path
                d="M -4 -48 L 4 -48 L 7 36 L -7 36 Z"
                fill="#2c1a0e"
                stroke="url(#doorGoldGrad)"
                strokeWidth="1"
              />
              {[-32, -20, -8, 4, 16, 28].map((y, i) => (
                <circle key={`hole-r-${i}`} cx="0" cy={y} r="2" fill="url(#brassStudGrad)" />
              ))}

              <path
                d="M -7 36 C -18 42 -22 56 0 56 C 22 56 18 42 7 36 Z"
                fill="url(#brassStudGrad)"
                stroke="#5a3d0a"
                strokeWidth="1.2"
              />
              <ellipse cx="0" cy="56" rx="16" ry="4" fill="#fff8e7" opacity="0.6" />

              <path d="M -2 -48 L 2 -48 L 1 -58 L -1 -58 Z" fill="url(#doorGoldGrad)" />
              <ellipse cx="0" cy="-58" rx="2.5" ry="1.2" fill="#dfb76c" />

              {/* Silk Tassels */}
              <g transform="translate(0, 56)">
                <line x1="0" y1="0" x2="-8" y2="16" stroke="#c59b27" strokeWidth="1" />
                <circle cx="-8" cy="16" r="2.5" fill="url(#tasselRed)" />
                <path d="M -10 18 L -6 18 L -8 26 Z" fill="url(#tasselRed)" />

                <line x1="0" y1="0" x2="8" y2="16" stroke="#c59b27" strokeWidth="1" />
                <circle cx="8" cy="16" r="2.5" fill="url(#tasselRed)" />
                <path d="M 6 18 L 10 18 L 8 26 Z" fill="url(#tasselRed)" />
              </g>
            </g>

            {/* Bottom Auspicious Decorative Scroll */}
            <g transform="translate(130, 452)" stroke="url(#doorGoldGrad)" fill="none" opacity="0.7">
              <path d="M -48 0 C -24 8 24 8 48 0" strokeWidth="1.2" />
              <circle cx="0" cy="5" r="3" fill="url(#doorGoldGrad)" />
              <circle cx="-24" cy="4" r="1.5" fill="url(#doorGoldGrad)" />
              <circle cx="24" cy="4" r="1.5" fill="url(#doorGoldGrad)" />
            </g>
          </g>

          {/* LOWER CARVED GEOMETRIC CHEVRON PANEL */}
          <g className="door-panel-lower">
            <rect
              x="16"
              y="506"
              width="228"
              height="180"
              fill={currentTheme.recessedLower}
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
              rx="4"
            />
            <rect
              x="26"
              y="516"
              width="208"
              height="160"
              stroke="url(#doorGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.65"
            />
            <g stroke="url(#doorGoldGrad)" strokeWidth="1" opacity="0.45">
              <path d="M 40 596 L 130 550 L 220 596" fill="none" />
              <path d="M 40 616 L 130 570 L 220 616" fill="none" />
              <path d="M 40 636 L 130 590 L 220 636" fill="none" />
            </g>
          </g>

          {/* BRASS STUDS */}
          <g className="brass-studs-group">
            {[45, 120, 200, 280, 360, 440, 520, 600, 675].map((y, i) => (
              <g key={`stud-r-${i}`} transform={`translate(254, ${y})`}>
                <circle cx="0" cy="0" r="5.5" fill="url(#brassStudGrad)" />
                <circle cx="0" cy="0" r="6.5" stroke="#4d3408" strokeWidth="0.6" fill="none" />
              </g>
            ))}
          </g>

          {/* RIGHT DOOR KNOCKER */}
          <g className="door-knocker right-knocker" transform="translate(26, 400)">
            <circle cx="0" cy="0" r="16" fill="url(#doorGoldGrad)" />
            <circle cx="0" cy="0" r="18" stroke="#4d3408" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="13" stroke="#fff8e7" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
            <path
              d="M -12 6 C -12 24 12 24 12 6 C 10 2 6 0 0 0 C -6 0 -10 2 -12 6 Z"
              fill="url(#brassStudGrad)"
              stroke="#5a3d0a"
              strokeWidth="1.2"
              filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.6))"
            />
            <circle cx="0" cy="0" r="5" fill="#fff8e7" />
          </g>

          {/* Center Astragal Overlap Molding Strip */}
          <rect x="0" y="0" width="6" height="720" fill="url(#doorGoldGrad)" opacity="0.9" />
        </svg>

        <div className="door-lighting-overlay" />
      </div>
    </div>
  );
};
