import React from 'react';

interface TopFlourishProps {
  mantra?: string;
  className?: string;
}

/**
 * Sacred Lord Ganesha (विघ्नहर्ता श्री गणेश) Emblem & Invocation.
 * Features an authentic traditional Indian wedding vector of Lord Ganesha with
 * royal mukut (crown), curved trunk holding modak, sacred tilak, and divine halo,
 * followed by the auspicious invocation ॥ श्री गणेशाय नमः ॥.
 */
export const TopFlourish: React.FC<TopFlourishProps> = ({
  mantra = '॥ श्री गणेशाय नमः ॥',
  className = '',
}) => {
  return (
    <div className={`top-ganesha-invocation ${className}`}>
      {/* 1. Sacred Lord Ganesha Vector Artwork */}
      <div className="ganesha-artwork-wrapper" aria-hidden="true">
        <svg
          className="ganesha-vector-svg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Lord Ganesha Auspicious Wedding Emblem"
        >
          <defs>
            {/* Radiant Antique Gold Foil Metallic Gradient */}
            <linearGradient id="ganeshGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8e7" />
              <stop offset="25%" stopColor="#dfb76c" />
              <stop offset="50%" stopColor="#c59b27" />
              <stop offset="75%" stopColor="#e2bc70" />
              <stop offset="100%" stopColor="#875c13" />
            </linearGradient>

            {/* Sacred Kumkum Red Gradient for Tilak */}
            <linearGradient id="kumkumRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e53935" />
              <stop offset="100%" stopColor="#b71c1c" />
            </linearGradient>

            {/* Soft Ambient Radiance Shadow */}
            <filter id="ganeshGlow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#875c13" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Divine Radiance Halo (Prabhavali) */}
          <circle
            cx="50"
            cy="48"
            r="38"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="0.8"
            strokeDasharray="2.5 2"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="48"
            r="42"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="0.6"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* Ganesha Form Group */}
          <g filter="url(#ganeshGlow)">
            {/* Royal Crown / Mukut */}
            <path
              d="
                M 42 24
                L 50 10
                L 58 24
                L 54 26
                L 50 22
                L 46 26
                Z
              "
              fill="url(#ganeshGoldGrad)"
              stroke="#5a3d0a"
              strokeWidth="0.6"
            />
            {/* Crown Kalash Jewel */}
            <circle cx="50" cy="8" r="2" fill="url(#ganeshGoldGrad)" />
            {/* Crown Base Band */}
            <rect x="40" y="24" width="20" height="4" rx="1.5" fill="url(#ganeshGoldGrad)" />

            {/* Sacred Ears (Surpakarna) */}
            {/* Left Fan Ear */}
            <path
              d="M 38 28 C 22 26 20 44 32 48 C 36 49 38 46 38 42"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Right Fan Ear */}
            <path
              d="M 62 28 C 78 26 80 44 68 48 C 64 49 62 46 62 42"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Forehead / Head Brow */}
            <path
              d="M 38 32 C 44 29 56 29 62 32"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="2"
            />

            {/* Sacred Trishul / Tilak on Forehead */}
            <path
              d="M 50 25 V 36 M 47 28 C 47 33 50 36 50 36 C 50 36 53 33 53 28"
              stroke="url(#kumkumRedGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="50" cy="38" r="1.4" fill="url(#kumkumRedGrad)" />

            {/* Auspicious Ganesha Eyes */}
            <path d="M 43 35 Q 46 34 47 36" stroke="url(#ganeshGoldGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 57 35 Q 54 34 53 36" stroke="url(#ganeshGoldGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Sacred Curved Trunk (Vakratunda) turning gracefully to Left */}
            <path
              d="
                M 50 39
                C 50 48 48 56 42 62
                C 36 68 28 64 26 58
                C 24 52 30 48 34 50
              "
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Golden Sweet Modak (Laddu) held at Trunk tip */}
            <circle cx="34" cy="50" r="3.5" fill="url(#ganeshGoldGrad)" stroke="#5a3d0a" strokeWidth="0.6" />
            <circle cx="34" cy="49" r="1.2" fill="#fff8e7" />

            {/* Right Tusk (Ekadanta) */}
            <path
              d="M 53 44 L 57 44 L 55 48 Z"
              fill="#fff8e7"
              stroke="#8f6414"
              strokeWidth="0.5"
            />

            {/* Lower Body Outline & Seated Lotus Base */}
            <path
              d="
                M 36 68
                C 32 76 68 76 64 68
              "
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Lotus Petal Base */}
            <g transform="translate(50, 76)">
              <path d="M 0 -3 C -10 -8 -16 2 0 4 C 16 2 10 -8 0 -3 Z" fill="url(#ganeshGoldGrad)" opacity="0.8" />
              <path d="M -12 2 C -24 0 -18 6 -8 6 Z" fill="url(#ganeshGoldGrad)" opacity="0.6" />
              <path d="M 12 2 C 24 0 18 6 8 6 Z" fill="url(#ganeshGoldGrad)" opacity="0.6" />
            </g>
          </g>
        </svg>
      </div>

      {/* 2. Symmetrical Flanking Vines & Sanskrit Invocation */}
      <div className="mantra-ribbon-block">
        {/* Left Delicate Vine */}
        <svg
          className="top-flourish-side side-left"
          viewBox="0 0 90 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 90 10 C 65 10 50 3 32 10 C 20 15 12 11 0 10"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="10" r="2" fill="url(#ganeshGoldGrad)" />
          <circle cx="48" cy="7" r="1.6" fill="url(#ganeshGoldGrad)" />
          <path d="M 64 10 C 59 5 52 6 54 11 C 60 12 63 11 64 10 Z" fill="url(#ganeshGoldGrad)" />
          <path d="M 32 10 C 27 5 20 6 22 11 C 28 12 31 11 32 10 Z" fill="url(#ganeshGoldGrad)" />
        </svg>

        {/* Central Sacred Invocation Badge */}
        <div className="top-mantra-badge">
          <span className="flourish-symbol" aria-hidden="true">
            ꧁
          </span>
          <span className="mantra-text">{mantra}</span>
          <span className="flourish-symbol" aria-hidden="true">
            ꧂
          </span>
        </div>

        {/* Right Delicate Vine (Mirrored) */}
        <svg
          className="top-flourish-side side-right"
          viewBox="0 0 90 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 0 10 C 25 10 40 3 58 10 C 70 15 78 11 90 10"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="74" cy="10" r="2" fill="url(#ganeshGoldGrad)" />
          <circle cx="42" cy="7" r="1.6" fill="url(#ganeshGoldGrad)" />
          <path d="M 26 10 C 31 5 38 6 36 11 C 30 12 27 11 26 10 Z" fill="url(#ganeshGoldGrad)" />
          <path d="M 58 10 C 63 5 70 6 68 11 C 62 12 59 11 58 10 Z" fill="url(#ganeshGoldGrad)" />
        </svg>
      </div>
    </div>
  );
};
