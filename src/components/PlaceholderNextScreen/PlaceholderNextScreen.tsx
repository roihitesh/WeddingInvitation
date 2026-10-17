import React from 'react';
import './PlaceholderNextScreen.css';

interface PlaceholderNextScreenProps {
  onBack: () => void;
}

/**
 * Placeholder component for the next screen.
 * Appears when the user clicks "OPEN OUR INVITATION", verifying that the
 * interaction works seamlessly while respecting the instruction to not build
 * subsequent screens yet.
 */
export const PlaceholderNextScreen: React.FC<PlaceholderNextScreenProps> = ({ onBack }) => {
  return (
    <section className="placeholder-screen-container" aria-label="Invitation Details Preview">
      <div className="placeholder-card">
        <span className="placeholder-lotus-icon" aria-hidden="true">
          🪷
        </span>
        <h2 className="placeholder-heading">Shubh Vivah Festivities</h2>
        <p className="placeholder-message">
          The wedding invitation details for Hitesh &amp; Shivanee will be revealed here.
        </p>
        <button
          type="button"
          className="placeholder-back-btn"
          onClick={onBack}
          aria-label="Return to opening invitation card"
        >
          ← Return to Opening Card
        </button>
      </div>
    </section>
  );
};
