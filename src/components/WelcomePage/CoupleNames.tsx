import React from 'react';

interface CoupleNamesProps {
  groom?: string;
  bride?: string;
  ampersand?: string;
}

/**
 * CoupleNames Component:
 * Displays the groom and bride names with monumental elegance:
 * - Hitesh
 * - & (Refined antique-gold treatment with subtle floridity)
 * - Shivanee
 * The most visually prominent typography in the hero section.
 */
export const CoupleNames: React.FC<CoupleNamesProps> = ({
  groom = 'Hitesh',
  bride = 'Shivanee',
  ampersand = '&',
}) => {
  return (
    <div className="welcome-couple-names-lockup" aria-label={`${groom} and ${bride}`}>
      <h1 className="welcome-groom-name">{groom}</h1>
      <div className="welcome-ampersand-wrap" aria-hidden="true">
        <span className="ampersand-flourish-left" />
        <span className="welcome-ampersand">{ampersand}</span>
        <span className="ampersand-flourish-right" />
      </div>
      <h1 className="welcome-bride-name">{bride}</h1>
    </div>
  );
};
