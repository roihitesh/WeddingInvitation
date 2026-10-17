import React from 'react';

interface PalaceDoorsProps {
  isOpen: boolean;
  onOpen: () => void;
  children?: React.ReactNode;
}

/**
 * Grand Maroon & Antique Gold Double Palace Doors.
 * Features 3D perspective outward swinging doors with authentic Indian palace carvings,
 * brass boss studs (shingaar keel), jaali cutwork panels, and antique brass door knockers (kunda).
 */
export const PalaceDoors: React.FC<PalaceDoorsProps> = ({
  isOpen,
  onOpen,
  children,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className={`palace-doors-3d-stage ${isOpen ? 'doors-open' : 'doors-closed'}`}
      role="button"
      tabIndex={0}
      onClick={!isOpen ? onOpen : undefined}
      onKeyDown={!isOpen ? handleKeyDown : undefined}
      aria-label="Palace double doors - click to open invitation"
      aria-expanded={isOpen}
    >
      {/* LEFT PALACE DOOR */}
      <div className="palace-door-leaf door-left" aria-hidden="true">
        {/* Door Surface Woodgrain & Carving Vector */}
        <svg
          className="door-vector-svg"
          viewBox="0 0 280 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Deep Royal Maroon Door Lacquer */}
            <linearGradient id="doorMaroonLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a0f18" />
              <stop offset="40%" stopColor="#3b0a12" />
              <stop offset="80%" stopColor="#29040a" />
              <stop offset="100%" stopColor="#1f0207" />
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
              <stop offset="60%" stopColor="#1a0206" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0102" stopOpacity="0.75" />
            </radialGradient>

            {/* Brass Stud Shadow */}
            <radialGradient id="brassStudGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#fff8e7" />
              <stop offset="40%" stopColor="#dfb76c" />
              <stop offset="85%" stopColor="#8f6414" />
              <stop offset="100%" stopColor="#4d3408" />
            </radialGradient>
          </defs>

          {/* Door Base Plate */}
          <rect width="280" height="720" fill="url(#doorMaroonLeft)" />
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
            opacity="0.8"
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
              fill="#2b0409"
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
            />
            {/* Jaali Cutwork Lattice in Upper Arch */}
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
            {/* Arched Panel Crest */}
            <circle cx="150" cy="85" r="14" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
            <circle cx="150" cy="85" r="5" fill="url(#doorGoldGrad)" opacity="0.8" />
          </g>

          {/* CENTER CARVED LOTUS ROSETTE PANEL */}
          <g className="door-panel-center">
            <rect
              x="36"
              y="228"
              width="228"
              height="260"
              fill="#240307"
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
              rx="4"
            />
            {/* Inner Gold Frame */}
            <rect
              x="46"
              y="238"
              width="208"
              height="240"
              stroke="url(#doorGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              opacity="0.6"
            />
            {/* Lotus Medallion Rosette */}
            <g transform="translate(150, 358)">
              <circle r="36" stroke="url(#doorGoldGrad)" strokeWidth="1.2" fill="none" opacity="0.8" />
              <circle r="26" stroke="url(#doorGoldGrad)" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.7" />
              {/* 8-Petal Lotus */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <path
                  key={i}
                  d="M 0 0 C -4 -12 0 -22 0 -22 C 0 -22 4 -12 0 0 Z"
                  fill="url(#doorGoldGrad)"
                  opacity="0.75"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle r="6" fill="url(#doorGoldGrad)" />
            </g>
          </g>

          {/* LOWER CARVED GEOMETRIC PANEL */}
          <g className="door-panel-lower">
            <rect
              x="36"
              y="506"
              width="228"
              height="180"
              fill="#240307"
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
              opacity="0.6"
            />
            {/* Traditional Chevron Gold Lines */}
            <g stroke="url(#doorGoldGrad)" strokeWidth="1" opacity="0.4">
              <path d="M 60 596 L 150 550 L 240 596" fill="none" />
              <path d="M 60 616 L 150 570 L 240 616" fill="none" />
              <path d="M 60 636 L 150 590 L 240 636" fill="none" />
            </g>
          </g>

          {/* BRASS STUDS (SHINGAAR KEEL) - Vertical Rows */}
          <g className="brass-studs-group">
            {[45, 120, 200, 280, 360, 440, 520, 600, 675].map((y, i) => (
              <g key={`stud-l-${i}`} transform={`translate(26, ${y})`}>
                <circle cx="0" cy="0" r="5.5" fill="url(#brassStudGrad)" />
                <circle cx="0" cy="0" r="6.5" stroke="#4d3408" strokeWidth="0.6" fill="none" />
              </g>
            ))}
          </g>

          {/* LEFT DOOR KNOCKER (BRASS KUNDA & ROSETTE) - Right Edge */}
          <g className="door-knocker left-knocker" transform="translate(254, 380)">
            {/* Ornamental Flower Backplate */}
            <circle cx="0" cy="0" r="16" fill="url(#doorGoldGrad)" />
            <circle cx="0" cy="0" r="18" stroke="#4d3408" strokeWidth="1" fill="none" />
            {/* Beaded ring */}
            <circle cx="0" cy="0" r="13" stroke="#fff8e7" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
            {/* Hanging Heavy Brass Ring */}
            <path
              d="M -12 6 C -12 24 12 24 12 6 C 10 2 6 0 0 0 C -6 0 -10 2 -12 6 Z"
              fill="url(#brassStudGrad)"
              stroke="#5a3d0a"
              strokeWidth="1.2"
              filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.6))"
            />
            {/* Center Boss */}
            <circle cx="0" cy="0" r="5" fill="#fff8e7" />
          </g>
        </svg>

        {/* Dynamic 3D lighting shadow overlay as door swings */}
        <div className="door-lighting-overlay" />
      </div>

      {/* RIGHT PALACE DOOR */}
      <div className="palace-door-leaf door-right" aria-hidden="true">
        {/* Door Surface Woodgrain & Carving Vector */}
        <svg
          className="door-vector-svg"
          viewBox="0 0 280 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Mirrored Maroon Gradient */}
            <linearGradient id="doorMaroonRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a0f18" />
              <stop offset="40%" stopColor="#3b0a12" />
              <stop offset="80%" stopColor="#29040a" />
              <stop offset="100%" stopColor="#1f0207" />
            </linearGradient>

            <radialGradient id="panelDepthRight" cx="20%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#1a0206" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0102" stopOpacity="0.75" />
            </radialGradient>
          </defs>

          {/* Door Base Plate */}
          <rect width="280" height="720" fill="url(#doorMaroonRight)" />
          <rect width="280" height="720" fill="url(#panelDepthRight)" />

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
            opacity="0.8"
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
              fill="#2b0409"
              stroke="url(#doorGoldGrad)"
              strokeWidth="1.5"
            />
            {/* Jaali Cutwork Lattice in Upper Arch */}
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
            {/* Arched Panel Crest */}
            <circle cx="130" cy="85" r="14" stroke="url(#doorGoldGrad)" strokeWidth="1" fill="none" opacity="0.7" />
            <circle cx="130" cy="85" r="5" fill="url(#doorGoldGrad)" opacity="0.8" />
          </g>

          {/* CENTER CARVED LOTUS ROSETTE PANEL */}
          <g className="door-panel-center">
            <rect
              x="16"
              y="228"
              width="228"
              height="260"
              fill="#240307"
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
              opacity="0.6"
            />
            {/* Lotus Medallion Rosette */}
            <g transform="translate(130, 358)">
              <circle r="36" stroke="url(#doorGoldGrad)" strokeWidth="1.2" fill="none" opacity="0.8" />
              <circle r="26" stroke="url(#doorGoldGrad)" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.7" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <path
                  key={i}
                  d="M 0 0 C -4 -12 0 -22 0 -22 C 0 -22 4 -12 0 0 Z"
                  fill="url(#doorGoldGrad)"
                  opacity="0.75"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle r="6" fill="url(#doorGoldGrad)" />
            </g>
          </g>

          {/* LOWER CARVED GEOMETRIC PANEL */}
          <g className="door-panel-lower">
            <rect
              x="16"
              y="506"
              width="228"
              height="180"
              fill="#240307"
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
              opacity="0.6"
            />
            {/* Traditional Chevron Gold Lines */}
            <g stroke="url(#doorGoldGrad)" strokeWidth="1" opacity="0.4">
              <path d="M 40 596 L 130 550 L 220 596" fill="none" />
              <path d="M 40 616 L 130 570 L 220 616" fill="none" />
              <path d="M 40 636 L 130 590 L 220 636" fill="none" />
            </g>
          </g>

          {/* BRASS STUDS (SHINGAAR KEEL) - Vertical Rows on Right stile */}
          <g className="brass-studs-group">
            {[45, 120, 200, 280, 360, 440, 520, 600, 675].map((y, i) => (
              <g key={`stud-r-${i}`} transform={`translate(254, ${y})`}>
                <circle cx="0" cy="0" r="5.5" fill="url(#brassStudGrad)" />
                <circle cx="0" cy="0" r="6.5" stroke="#4d3408" strokeWidth="0.6" fill="none" />
              </g>
            ))}
          </g>

          {/* RIGHT DOOR KNOCKER (BRASS KUNDA & ROSETTE) - Left Edge */}
          <g className="door-knocker right-knocker" transform="translate(26, 380)">
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

          {/* Center Astragal Overlap Molding Strip (Palla Patti) */}
          <g className="center-astragal-lip">
            <rect x="0" y="0" width="8" height="720" fill="url(#doorGoldGrad)" />
            <line x1="4" y1="0" x2="4" y2="720" stroke="#fff8e7" strokeWidth="1" opacity="0.6" />
          </g>
        </svg>

        {/* Dynamic 3D lighting shadow overlay as door swings */}
        <div className="door-lighting-overlay" />
      </div>

      {/* Central Content Layer (Placed over the closed portal, cross-fades gracefully when doors open) */}
      <div className="doors-content-overlay">{children}</div>
    </div>
  );
};
