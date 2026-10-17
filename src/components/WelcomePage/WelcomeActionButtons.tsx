import React from 'react';

interface WelcomeActionButtonsProps {
  primaryText: string;
  secondaryText: string;
  onExplore: () => void;
  onWishes: () => void;
}

/**
 * WelcomeActionButtons Component:
 * - Primary Action: Deep-maroon luxury button with refined gold trim & arrow
 * - Secondary Action: Subtle ivory button with antique-gold outline
 * Accessible with touch-friendly targets, focus rings, and smooth hover elevation.
 */
export const WelcomeActionButtons: React.FC<WelcomeActionButtonsProps> = ({
  primaryText,
  secondaryText,
  onExplore,
  onWishes,
}) => {
  return (
    <div className="welcome-action-buttons-wrap" role="group" aria-label="Wedding Actions">
      {/* Primary Action Button */}
      <button
        type="button"
        className="welcome-btn welcome-btn-primary"
        onClick={onExplore}
        aria-label={primaryText}
      >
        <span className="btn-text">{primaryText}</span>
        <span className="btn-gold-arrow" aria-hidden="true">→</span>
      </button>

      {/* Secondary Action Button */}
      <button
        type="button"
        className="welcome-btn welcome-btn-secondary"
        onClick={onWishes}
        aria-label={secondaryText}
      >
        <span className="btn-lotus-sparkle" aria-hidden="true">✦</span>
        <span className="btn-text">{secondaryText}</span>
      </button>
    </div>
  );
};
