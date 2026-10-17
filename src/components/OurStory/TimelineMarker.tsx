import React from 'react';
import { TimelineMarkerType } from '../../types/invitation';

interface TimelineMarkerProps {
  type: TimelineMarkerType;
  order: number;
  label?: string;
}

/**
 * Ornamental timeline marker for Hitesh & Shivanee's Love Story.
 * Provides custom SVG Indian wedding ornaments for all 6 milestones:
 * 1. Floral motif (first meeting)
 * 2. Heart-inspired ornament (first butterflies)
 * 3. Intertwined motif (sharing feelings)
 * 4. Travel / celestial compass (trips and memories)
 * 5. Sacred lotus / blessings (choosing forever with family)
 * 6. Traditional wedding knot / Gathbandhan (tying the knot)
 */
export const TimelineMarker: React.FC<TimelineMarkerProps> = ({
  type,
  order,
  label,
}) => {
  const formattedOrder = order < 10 ? `0${order}` : `${order}`;

  const renderOrnamentSvg = () => {
    switch (type) {
      case 'floral':
        return (
          // Traditional 8-petal Indian Jasmine / Chameli bloom
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            <circle cx="12" cy="12" r="3" fill="var(--marker-gold-dark, #b8861d)" />
            <path
              d="M12 2 C13.5 6, 13.5 6, 12 9 C10.5 6, 10.5 6, 12 2 Z"
              fill="currentColor"
            />
            <path
              d="M12 22 C13.5 18, 13.5 18, 12 15 C10.5 18, 10.5 18, 12 22 Z"
              fill="currentColor"
            />
            <path
              d="M2 12 C6 13.5, 6 13.5, 9 12 C6 10.5, 6 10.5, 2 12 Z"
              fill="currentColor"
            />
            <path
              d="M22 12 C18 13.5, 18 13.5, 15 12 C18 10.5, 18 10.5, 22 12 Z"
              fill="currentColor"
            />
            <path
              d="M5 5 C8.5 7, 8.5 7, 10 10 C7 8.5, 7 8.5, 5 5 Z"
              fill="currentColor"
            />
            <path
              d="M19 19 C15.5 17, 15.5 17, 14 14 C17 15.5, 17 15.5, 19 19 Z"
              fill="currentColor"
            />
            <path
              d="M19 5 C17 8.5, 17 8.5, 14 10 C15.5 7, 15.5 7, 19 5 Z"
              fill="currentColor"
            />
            <path
              d="M5 19 C7 15.5, 7 15.5, 10 14 C8.5 17, 8.5 17, 5 19 Z"
              fill="currentColor"
            />
          </svg>
        );

      case 'heart':
        // Royal peacock-tail curved hearts with a central radiant jewel
        return (
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7 C11 9, 9 10, 8 11 M12 7 C13 9, 15 10, 16 11"
              stroke="var(--marker-gold-dark, #b8861d)"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="12" cy="11.5" r="2.2" fill="var(--marker-maroon, #721625)" />
            <circle cx="12" cy="11.5" r="1" fill="#dfb76c" />
          </svg>
        );

      case 'intertwined':
        // Intertwined golden infinity rings / two souls speaking
        return (
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            <circle
              cx="9"
              cy="12"
              r="5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <circle
              cx="15"
              cy="12"
              r="5.5"
              fill="none"
              stroke="var(--marker-gold-dark, #b8861d)"
              strokeWidth="1.7"
            />
            <path
              d="M9 7 C10 8.5 10 15.5 9 17"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="12" cy="12" r="1.5" fill="var(--marker-maroon, #721625)" />
          </svg>
        );

      case 'travel':
        // Travel celestial compass & guiding star
        return (
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            <circle
              cx="12"
              cy="12"
              r="9.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="1.5 2.5"
            />
            <polygon
              points="12,3 14,10 21,12 14,14 12,21 10,14 3,12 10,10"
              fill="currentColor"
            />
            <circle cx="12" cy="12" r="2" fill="var(--marker-maroon, #721625)" />
            <circle cx="12" cy="12" r="0.8" fill="#fff" />
          </svg>
        );

      case 'lotus':
        // Sacred blooming lotus with rising blessings
        return (
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            {/* Center petal */}
            <path
              d="M12 4 C10 8, 10 13, 12 18 C14 13, 14 8, 12 4 Z"
              fill="currentColor"
            />
            {/* Left petal */}
            <path
              d="M12 18 C9 15, 6 12, 6 8 C9 8, 11 12, 12 18 Z"
              fill="var(--marker-gold-dark, #b8861d)"
            />
            {/* Right petal */}
            <path
              d="M12 18 C15 15, 18 12, 18 8 C15 8, 13 12, 12 18 Z"
              fill="var(--marker-gold-dark, #b8861d)"
            />
            {/* Base water line */}
            <path
              d="M5 20 C8 19, 16 19, 19 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );

      case 'wedding-knot':
        // Auspicious Gathbandhan / Sacred knot & Kalash
        return (
          <svg viewBox="0 0 24 24" className="marker-svg" aria-hidden="true">
            {/* Sacred knot */}
            <path
              d="M6 14 C6 8, 11 8, 12 11 C13 14, 18 14, 18 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 8 C6 14, 11 14, 12 11 C13 8, 18 8, 18 14"
              fill="none"
              stroke="var(--marker-gold-dark, #b8861d)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="11" r="2.2" fill="var(--marker-maroon, #721625)" />
            <circle cx="12" cy="11" r="1" fill="#dfb76c" />
            <path
              d="M12 15 L12 21 M10 19 L14 19"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`timeline-marker-node marker-${type}`} aria-label={label || `Milestone ${order}`}>
      {/* Outer subtle glowing halo */}
      <div className="marker-glow-ring" aria-hidden="true" />

      {/* Main ornamental circular disc */}
      <div className="marker-disc">
        {/* Step number badge */}
        <span className="marker-order-number">{formattedOrder}</span>

        {/* Customized SVG ornament */}
        <div className="marker-icon-wrap">{renderOrnamentSvg()}</div>
      </div>
    </div>
  );
};
