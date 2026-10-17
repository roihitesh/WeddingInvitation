import React from 'react';

interface OrnamentalBorderProps {
  className?: string;
}

/**
 * Thin, intricate gold ornamental border framing the entire viewport.
 * Features 4 authentic Indian wedding corner filigrees and dual-stroke framing.
 */
export const OrnamentalBorder: React.FC<OrnamentalBorderProps> = ({ className = '' }) => {
  return (
    <div className={`page-ornamental-border-container ${className}`} aria-hidden="true">
      {/* 4 Traditional Indian Corner Filigrees */}
      <div className="border-corner corner-top-left">
        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6 H48 M6 6 V48 M6 6 L28 28 M16 6 C16 20 20 26 34 26 M6 16 C20 16 26 20 26 34"
            stroke="url(#pageBorderGold)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="28" cy="28" r="2" fill="url(#pageBorderGold)" />
        </svg>
      </div>

      <div className="border-corner corner-top-right">
        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48 6 H6 M48 6 V48 M48 6 L26 28 M38 6 C38 20 34 26 20 26 M48 16 C34 16 28 20 28 34"
            stroke="url(#pageBorderGold)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="26" cy="28" r="2" fill="url(#pageBorderGold)" />
        </svg>
      </div>

      <div className="border-corner corner-bottom-left">
        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 48 H48 M6 48 V6 M6 48 L28 26 M16 48 C16 34 20 28 34 28 M6 38 C20 38 26 34 26 20"
            stroke="url(#pageBorderGold)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="28" cy="26" r="2" fill="url(#pageBorderGold)" />
        </svg>
      </div>

      <div className="border-corner corner-bottom-right">
        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48 48 H6 M48 48 V6 M48 48 L26 26 M38 48 C38 34 34 28 20 28 M48 38 C34 38 28 34 28 20"
            stroke="url(#pageBorderGold)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="26" cy="26" r="2" fill="url(#pageBorderGold)" />
        </svg>
      </div>
    </div>
  );
};
