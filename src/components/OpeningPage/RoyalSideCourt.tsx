import React from 'react';

/**
 * RoyalSideCourt Component:
 * Adds authentic royal Indian wedding palace ambience to the left and right flanks of the viewport.
 * Features:
 * 1. Traditional Hanging Brass Deepams / Diyas with live flickering golden flames and ambient light aura.
 * 2. Cascading Fresh Marigold (गेंदें) & Jasmine (मोगरा) Toran Strings with golden brass ghungroo bells swaying in the breeze.
 * 3. Royal Heritage Emblems in antique gold filigree:
 *    - Left: Auspicious Royal Ceremonial Elephant (गजराज) raising trunk in blessing (मंगल आशीर्वाद), mirrored toward center.
 *    - Right: Auspicious Royal Ceremonial Elephant (गजराज) raising trunk in blessing (मंगल आशीर्वाद), facing toward center.
 * 4. Carved Sandstone Palace Columns & Jharokha Arches.
 * 5. Traditional Hammered Brass Urli Bowls with floating lotuses and illuminated floating diyas at the bottom corners.
 * 6. Live "Pushpa Vrishti" (auspicious shower of drifting rose and marigold petals) on the side flanks.
 */
export const RoyalSideCourt: React.FC = () => {
  return (
    <div className="royal-side-court-container" aria-hidden="true">
      {/* ====================================================================
          LEFT FLANK: Palace Pillar, Hanging Deepam, Toran, Royal Elephant, Urli
          ==================================================================== */}
      <aside className="palace-side-flank flank-left">
        {/* Architectural Palace Column & Jharokha Bracket */}
        <svg
          className="flank-pillar-svg"
          viewBox="0 0 160 880"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flankPillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d9be8c" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#faecd5" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ecd5af" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c5a36b" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="flankGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6e4206" />
              <stop offset="25%" stopColor="#dfb76c" />
              <stop offset="50%" stopColor="#fff8e1" />
              <stop offset="75%" stopColor="#c59b27" />
              <stop offset="100%" stopColor="#5d3604" />
            </linearGradient>

            <linearGradient id="flankMarigold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffa000" />
              <stop offset="50%" stopColor="#ff6f00" />
              <stop offset="100%" stopColor="#e65100" />
            </linearGradient>

            <linearGradient id="flankJasmine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fffde7" />
              <stop offset="100%" stopColor="#ffe082" />
            </linearGradient>

            <radialGradient id="diyaFlameCore" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fff176" />
              <stop offset="65%" stopColor="#ff9800" />
              <stop offset="100%" stopColor="#d84315" />
            </radialGradient>

            <filter id="diyaGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Vertical Sandstone Pillar Shaft (Symmetrically Centered) */}
          <rect x="62" y="0" width="36" height="880" fill="url(#flankPillarGrad)" />
          <line x1="62" y1="0" x2="62" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="98" y1="0" x2="98" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="80" y1="0" x2="80" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="0.6" strokeDasharray="6 4" strokeOpacity="0.4" />

          {/* Top Capital & Scalloped Bracket */}
          <path
            d="
              M 48 0
              L 112 0
              L 106 28
              C 126 32 138 56 142 90
              C 126 84 116 82 98 84
              L 98 110
              L 62 110
              L 62 84
              C 44 82 34 84 18 90
              C 22 56 34 32 54 28
              Z
            "
            fill="url(#flankPillarGrad)"
            stroke="url(#flankGoldTrim)"
            strokeWidth="1.2"
          />

          {/* Carved Jaali Chevron Molding along the shaft */}
          {[160, 240, 320, 400, 480, 560, 640, 720].map((yVal, idx) => (
            <g key={`l-chev-${idx}`} transform={`translate(68, ${yVal})`}>
              <path d="M 0 0 L 12 8 L 24 0" stroke="url(#flankGoldTrim)" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="12" cy="14" r="2" fill="url(#flankGoldTrim)" opacity="0.6" />
            </g>
          ))}

          {/* Base Plinth Molding */}
          <path
            d="
              M 48 880
              L 48 830
              L 62 810
              L 98 810
              L 112 830
              L 112 880
              Z
            "
            fill="url(#flankPillarGrad)"
            stroke="url(#flankGoldTrim)"
            strokeWidth="1.2"
          />
        </svg>

        {/* 1. Hanging Brass Diya Lamp with Live Flickering Flame */}
        <div className="hanging-deepam-unit deepam-left">
          {/* Suspension Brass Chain */}
          <div className="deepam-chain" />
          
          <svg
            className="deepam-fixture-svg"
            viewBox="0 0 90 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Hanging Ring */}
            <circle cx="45" cy="12" r="7" stroke="url(#flankGoldTrim)" strokeWidth="2.2" fill="none" />
            <circle cx="45" cy="22" r="3.5" fill="url(#flankGoldTrim)" />
            
            {/* Brass Canopy Bell */}
            <path
              d="M 32 30 C 32 24 58 24 58 30 L 64 42 C 45 46 45 46 26 42 Z"
              fill="url(#flankGoldTrim)"
            />

            {/* Connecting Triple Chain Rods */}
            <line x1="30" y1="42" x2="22" y2="76" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />
            <line x1="45" y1="42" x2="45" y2="74" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />
            <line x1="60" y1="42" x2="68" y2="76" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />

            {/* Main Oil Bowl (Deepam Cup) with Ornamental Rim */}
            <path
              d="
                M 16 76
                C 16 92 74 92 74 76
                L 70 74
                C 45 78 45 78 20 74
                Z
              "
              fill="url(#flankGoldTrim)"
            />
            {/* Bottom Kalash Teardrop Finial */}
            <path
              d="M 45 92 L 48 102 C 48 108 42 108 42 102 Z"
              fill="url(#flankGoldTrim)"
            />
            <circle cx="45" cy="111" r="2.5" fill="url(#flankGoldTrim)" />

            {/* LIVE ANIMATED FLICKERING DIYA FLAME */}
            <g className="live-diya-flame-group" filter="url(#diyaGlowFilter)">
              {/* Golden Outer Aura */}
              <ellipse cx="45" cy="62" rx="14" ry="20" fill="url(#diyaFlameCore)" opacity="0.35" className="flame-outer-aura" />
              {/* Flame Tongue */}
              <path
                d="
                  M 45 42
                  C 48 50 53 58 51 66
                  C 49 72 41 72 39 66
                  C 37 58 42 50 45 42
                  Z
                "
                fill="url(#diyaFlameCore)"
                className="flame-core-tongue"
              />
              {/* Inner White-Hot Flame Spark */}
              <ellipse cx="45" cy="64" rx="2.5" ry="6" fill="#ffffff" />
            </g>
          </svg>

          {/* Ambient Warm Golden Glow Radiance Puddle */}
          <div className="deepam-ambient-glow" />
        </div>

        {/* 2. Cascading Fresh Marigold & Jasmine Toran Strings */}
        <div className="cascading-toran-unit toran-left">
          <svg
            className="toran-string-svg"
            viewBox="0 0 60 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hanging String 1 (Longer) */}
            <line x1="22" y1="0" x2="22" y2="440" stroke="#b8861d" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
            {/* Hanging String 2 (Shorter offset) */}
            <line x1="42" y1="0" x2="42" y2="360" stroke="#b8861d" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />

            {/* String 1 Blooms (Alternating Marigold & Jasmine) */}
            {[
              { y: 24, type: 'm' },
              { y: 56, type: 'j' },
              { y: 88, type: 'm' },
              { y: 120, type: 'j' },
              { y: 152, type: 'm' },
              { y: 184, type: 'j' },
              { y: 216, type: 'm' },
              { y: 248, type: 'j' },
              { y: 280, type: 'm' },
              { y: 312, type: 'j' },
              { y: 344, type: 'm' },
              { y: 376, type: 'j' },
              { y: 408, type: 'm' },
            ].map((bloom, i) => (
              <g key={`ts1-${i}`} transform={`translate(22, ${bloom.y})`}>
                <circle
                  r={bloom.type === 'm' ? 7 : 5.5}
                  fill={bloom.type === 'm' ? 'url(#flankMarigold)' : 'url(#flankJasmine)'}
                  filter="drop-shadow(0 2px 3px rgba(110, 66, 6, 0.28))"
                />
                <circle r={bloom.type === 'm' ? 2 : 1.5} fill="#fff9c4" />
              </g>
            ))}

            {/* Brass Bell at tip of String 1 */}
            <g transform="translate(22, 442)">
              <path d="M -5 0 L 5 0 L 7 12 L -7 12 Z" fill="url(#flankGoldTrim)" />
              <circle cx="0" cy="14" r="2.5" fill="url(#flankGoldTrim)" />
            </g>

            {/* String 2 Blooms */}
            {[
              { y: 36, type: 'j' },
              { y: 68, type: 'm' },
              { y: 100, type: 'j' },
              { y: 132, type: 'm' },
              { y: 164, type: 'j' },
              { y: 196, type: 'm' },
              { y: 228, type: 'j' },
              { y: 260, type: 'm' },
              { y: 292, type: 'j' },
              { y: 324, type: 'm' },
            ].map((bloom, i) => (
              <g key={`ts2-${i}`} transform={`translate(42, ${bloom.y})`}>
                <circle
                  r={bloom.type === 'm' ? 6.5 : 5}
                  fill={bloom.type === 'm' ? 'url(#flankMarigold)' : 'url(#flankJasmine)'}
                  filter="drop-shadow(0 2px 3px rgba(110, 66, 6, 0.28))"
                />
                <circle r={bloom.type === 'm' ? 1.8 : 1.2} fill="#fff9c4" />
              </g>
            ))}

            {/* Brass Bell at tip of String 2 */}
            <g transform="translate(42, 362)">
              <path d="M -4 0 L 4 0 L 6 10 L -6 10 Z" fill="url(#flankGoldTrim)" />
              <circle cx="0" cy="12" r="2" fill="url(#flankGoldTrim)" />
            </g>
          </svg>
        </div>

        {/* 3. Bottom Ornamental Brass Plate with Standing Royal Elephant (Gajraj - Left Flank facing center) */}
        <div className="bottom-sculpture-thali-unit plinth-left">
          {/* Standing Royal Elephant Sculpture (Mirrored to face inward towards invitation card) */}
          <div className="plate-sculpture-figure">
            <svg
              className="elephant-artwork-svg"
              viewBox="0 0 140 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Auspicious Royal Elephant Standing on Ceremonial Brass Plate"
            >
              {/* Prabhavali Oval Frame */}
              <ellipse
                cx="70"
                cy="90"
                rx="62"
                ry="80"
                stroke="url(#flankGoldTrim)"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                opacity="0.6"
              />
              <ellipse
                cx="70"
                cy="90"
                rx="56"
                ry="74"
                stroke="url(#flankGoldTrim)"
                strokeWidth="0.6"
                opacity="0.4"
              />

              {/* Lotus Base */}
              <path
                d="M 22 148 C 45 140 95 140 118 148 C 114 154 90 156 70 156 C 50 156 26 154 22 148 Z"
                fill="url(#flankGoldTrim)"
              />
              <g transform="translate(70, 154)">
                <path d="M 0 -8 C -14 -12 -18 4 0 6 C 18 4 14 -12 0 -8 Z" fill="url(#flankGoldTrim)" opacity="0.9" />
                <path d="M -12 4 C -24 0 -18 8 -8 8 Z" fill="url(#flankGoldTrim)" opacity="0.7" />
                <path d="M 12 4 C 24 0 18 8 8 8 Z" fill="url(#flankGoldTrim)" opacity="0.7" />
              </g>

              {/* Royal Ceremonial Elephant with Raised Trunk Holding Lotus (Gajraj Ashirwad - Mirrored to face inward towards invitation card) */}
              <g transform="translate(104, 70) scale(-1, 1)">
                {/* Elephant Body */}
                <path
                  d="
                    M 72 78
                    C 72 65 70 48 56 42
                    C 45 37 32 40 24 48
                    C 16 56 18 78 18 78
                    L 24 78 L 26 62
                    L 40 62 L 40 78
                    L 48 78 L 50 62
                    L 64 62 L 66 78
                    Z
                  "
                  fill="url(#flankGoldTrim)"
                />

                {/* Head & Majestic Raised Trunk */}
                <path
                  d="
                    M 26 48
                    C 22 42 16 38 12 40
                    C 8 42 6 48 6 56
                    C 6 64 2 68 0 64
                    C -2 58 4 48 8 40
                    C 12 32 18 26 26 28
                    C 30 30 32 38 32 44
                    Z
                  "
                  fill="url(#flankGoldTrim)"
                />

                {/* Golden Lotus held at tip of trunk */}
                <circle cx="-1" cy="62" r="3" fill="#ffb300" />
                <path d="M -4 60 C -6 56 -1 54 -1 60 Z" fill="#fff8e7" />

                {/* Fan Ear with Gold Detailing */}
                <path
                  d="M 30 38 C 38 34 42 46 36 54 C 32 56 28 50 30 38 Z"
                  fill="url(#flankGoldTrim)"
                  stroke="#5d3604"
                  strokeWidth="0.8"
                />

                {/* White Ivory Tusk */}
                <path d="M 16 52 C 12 55 10 60 12 62 C 14 62 16 56 18 53 Z" fill="#fffef7" />

                {/* Royal Embroidered Saddle Cloth (Jhool) */}
                <path
                  d="M 32 48 L 62 48 L 60 62 L 34 62 Z"
                  fill="#800020"
                  stroke="url(#flankGoldTrim)"
                  strokeWidth="1"
                />
                <circle cx="47" cy="55" r="2.5" fill="url(#flankGoldTrim)" />
                {/* Hanging Tassels on Jhool */}
                <line x1="38" y1="62" x2="38" y2="66" stroke="url(#flankGoldTrim)" strokeWidth="1" />
                <line x1="47" y1="62" x2="47" y2="67" stroke="url(#flankGoldTrim)" strokeWidth="1" />
                <line x1="56" y1="62" x2="56" y2="66" stroke="url(#flankGoldTrim)" strokeWidth="1" />

                {/* Howdah Finial Crown */}
                <path d="M 42 42 L 52 42 L 47 34 Z" fill="url(#flankGoldTrim)" />
                <circle cx="47" cy="33" r="1.5" fill="#fff8e7" />
              </g>
            </svg>
          </div>

          {/* Ceremonial Brass Plate / Urli Base */}
          <div className="plate-base-bowl">
            <svg
              className="urli-svg"
              viewBox="0 0 150 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Brass Bowl Rim & Body */}
              <ellipse cx="75" cy="50" rx="68" ry="24" fill="#a07018" />
              <ellipse cx="75" cy="46" rx="65" ry="20" fill="url(#flankGoldTrim)" />
              {/* Water Surface in Urli */}
              <ellipse cx="75" cy="46" rx="58" ry="16" fill="#1b3a4b" opacity="0.85" />
              
              {/* Floating Pink Lotus Blossom & Diya */}
              <g transform="translate(75, 45)">
                <ellipse cx="0" cy="0" rx="16" ry="6" fill="#f06292" opacity="0.8" />
                <ellipse cx="0" cy="-2" rx="10" ry="4" fill="#f8bbd0" />
                <circle cx="0" cy="-2" r="3.5" fill="#ffb300" />
                <circle cx="0" cy="-4" r="1.8" fill="#ffffff" className="urli-diya-flicker" />
              </g>

              {/* Brass Handles on Sides */}
              <path d="M 10 46 C 4 46 2 54 8 58 C 14 58 14 48 10 46 Z" fill="url(#flankGoldTrim)" />
              <path d="M 140 46 C 146 46 148 54 142 58 C 136 58 136 48 140 46 Z" fill="url(#flankGoldTrim)" />
            </svg>
          </div>
        </div>
      </aside>

      {/* ====================================================================
          RIGHT FLANK: Symmetrical Pillar, Deepam, Toran, Royal Elephant, Urli
          ==================================================================== */}
      <aside className="palace-side-flank flank-right">
        {/* Architectural Palace Column & Jharokha Bracket (Mirrored) */}
        <svg
          className="flank-pillar-svg"
          viewBox="0 0 160 880"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Vertical Sandstone Pillar Shaft (Symmetrically Centered) */}
          <rect x="62" y="0" width="36" height="880" fill="url(#flankPillarGrad)" />
          <line x1="62" y1="0" x2="62" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="98" y1="0" x2="98" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="80" y1="0" x2="80" y2="880" stroke="url(#flankGoldTrim)" strokeWidth="0.6" strokeDasharray="6 4" strokeOpacity="0.4" />

          {/* Top Capital & Scalloped Bracket */}
          <path
            d="
              M 48 0
              L 112 0
              L 106 28
              C 126 32 138 56 142 90
              C 126 84 116 82 98 84
              L 98 110
              L 62 110
              L 62 84
              C 44 82 34 84 18 90
              C 22 56 34 32 54 28
              Z
            "
            fill="url(#flankPillarGrad)"
            stroke="url(#flankGoldTrim)"
            strokeWidth="1.2"
          />

          {/* Carved Jaali Chevron Molding along the shaft */}
          {[160, 240, 320, 400, 480, 560, 640, 720].map((yVal, idx) => (
            <g key={`r-chev-${idx}`} transform={`translate(68, ${yVal})`}>
              <path d="M 0 0 L 12 8 L 24 0" stroke="url(#flankGoldTrim)" strokeWidth="1" fill="none" opacity="0.6" />
              <circle cx="12" cy="14" r="2" fill="url(#flankGoldTrim)" opacity="0.6" />
            </g>
          ))}

          {/* Base Plinth Molding */}
          <path
            d="
              M 48 880
              L 48 830
              L 62 810
              L 98 810
              L 112 830
              L 112 880
              Z
            "
            fill="url(#flankPillarGrad)"
            stroke="url(#flankGoldTrim)"
            strokeWidth="1.2"
          />
        </svg>

        {/* 1. Hanging Brass Diya Lamp with Live Flickering Flame */}
        <div className="hanging-deepam-unit deepam-right">
          <div className="deepam-chain" />
          
          <svg
            className="deepam-fixture-svg"
            viewBox="0 0 90 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="45" cy="12" r="7" stroke="url(#flankGoldTrim)" strokeWidth="2.2" fill="none" />
            <circle cx="45" cy="22" r="3.5" fill="url(#flankGoldTrim)" />
            
            <path
              d="M 32 30 C 32 24 58 24 58 30 L 64 42 C 45 46 45 46 26 42 Z"
              fill="url(#flankGoldTrim)"
            />

            <line x1="30" y1="42" x2="22" y2="76" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />
            <line x1="45" y1="42" x2="45" y2="74" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />
            <line x1="60" y1="42" x2="68" y2="76" stroke="url(#flankGoldTrim)" strokeWidth="1.5" />

            <path
              d="
                M 16 76
                C 16 92 74 92 74 76
                L 70 74
                C 45 78 45 78 20 74
                Z
              "
              fill="url(#flankGoldTrim)"
            />
            <path
              d="M 45 92 L 48 102 C 48 108 42 108 42 102 Z"
              fill="url(#flankGoldTrim)"
            />
            <circle cx="45" cy="111" r="2.5" fill="url(#flankGoldTrim)" />

            {/* LIVE FLICKERING FLAME */}
            <g className="live-diya-flame-group" filter="url(#diyaGlowFilter)">
              <ellipse cx="45" cy="62" rx="14" ry="20" fill="url(#diyaFlameCore)" opacity="0.35" className="flame-outer-aura" />
              <path
                d="
                  M 45 42
                  C 48 50 53 58 51 66
                  C 49 72 41 72 39 66
                  C 37 58 42 50 45 42
                  Z
                "
                fill="url(#diyaFlameCore)"
                className="flame-core-tongue"
              />
              <ellipse cx="45" cy="64" rx="2.5" ry="6" fill="#ffffff" />
            </g>
          </svg>

          <div className="deepam-ambient-glow" />
        </div>

        {/* 2. Cascading Fresh Marigold & Jasmine Toran Strings */}
        <div className="cascading-toran-unit toran-right">
          <svg
            className="toran-string-svg"
            viewBox="0 0 60 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="38" y1="0" x2="38" y2="440" stroke="#b8861d" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
            <line x1="18" y1="0" x2="18" y2="360" stroke="#b8861d" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />

            {/* String 1 Blooms */}
            {[
              { y: 24, type: 'm' },
              { y: 56, type: 'j' },
              { y: 88, type: 'm' },
              { y: 120, type: 'j' },
              { y: 152, type: 'm' },
              { y: 184, type: 'j' },
              { y: 216, type: 'm' },
              { y: 248, type: 'j' },
              { y: 280, type: 'm' },
              { y: 312, type: 'j' },
              { y: 344, type: 'm' },
              { y: 376, type: 'j' },
              { y: 408, type: 'm' },
            ].map((bloom, i) => (
              <g key={`r-ts1-${i}`} transform={`translate(38, ${bloom.y})`}>
                <circle
                  r={bloom.type === 'm' ? 7 : 5.5}
                  fill={bloom.type === 'm' ? 'url(#flankMarigold)' : 'url(#flankJasmine)'}
                  filter="drop-shadow(0 2px 3px rgba(110, 66, 6, 0.28))"
                />
                <circle r={bloom.type === 'm' ? 2 : 1.5} fill="#fff9c4" />
              </g>
            ))}

            <g transform="translate(38, 442)">
              <path d="M -5 0 L 5 0 L 7 12 L -7 12 Z" fill="url(#flankGoldTrim)" />
              <circle cx="0" cy="14" r="2.5" fill="url(#flankGoldTrim)" />
            </g>

            {/* String 2 Blooms */}
            {[
              { y: 36, type: 'j' },
              { y: 68, type: 'm' },
              { y: 100, type: 'j' },
              { y: 132, type: 'm' },
              { y: 164, type: 'j' },
              { y: 196, type: 'm' },
              { y: 228, type: 'j' },
              { y: 260, type: 'm' },
              { y: 292, type: 'j' },
              { y: 324, type: 'm' },
            ].map((bloom, i) => (
              <g key={`r-ts2-${i}`} transform={`translate(18, ${bloom.y})`}>
                <circle
                  r={bloom.type === 'm' ? 6.5 : 5}
                  fill={bloom.type === 'm' ? 'url(#flankMarigold)' : 'url(#flankJasmine)'}
                  filter="drop-shadow(0 2px 3px rgba(110, 66, 6, 0.28))"
                />
                <circle r={bloom.type === 'm' ? 1.8 : 1.2} fill="#fff9c4" />
              </g>
            ))}

            <g transform="translate(18, 362)">
              <path d="M -4 0 L 4 0 L 6 10 L -6 10 Z" fill="url(#flankGoldTrim)" />
              <circle cx="0" cy="12" r="2" fill="url(#flankGoldTrim)" />
            </g>
          </svg>
        </div>

        {/* 3. Bottom Ornamental Brass Plate with Standing Royal Elephant (Gajraj) */}
        <div className="bottom-sculpture-thali-unit plinth-right">
          {/* Standing Royal Elephant Sculpture */}
          <div className="plate-sculpture-figure">
            <svg
              className="elephant-artwork-svg"
              viewBox="0 0 140 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Auspicious Royal Elephant Standing on Ceremonial Brass Plate"
            >
              {/* Prabhavali Oval Frame */}
              <ellipse
                cx="70"
                cy="90"
                rx="62"
                ry="80"
                stroke="url(#flankGoldTrim)"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                opacity="0.6"
              />
              <ellipse
                cx="70"
                cy="90"
                rx="56"
                ry="74"
                stroke="url(#flankGoldTrim)"
                strokeWidth="0.6"
                opacity="0.4"
              />

              {/* Lotus Base */}
              <path
                d="M 22 148 C 45 140 95 140 118 148 C 114 154 90 156 70 156 C 50 156 26 154 22 148 Z"
                fill="url(#flankGoldTrim)"
              />
              <g transform="translate(70, 154)">
                <path d="M 0 -8 C -14 -12 -18 4 0 6 C 18 4 14 -12 0 -8 Z" fill="url(#flankGoldTrim)" opacity="0.9" />
                <path d="M -12 4 C -24 0 -18 8 -8 8 Z" fill="url(#flankGoldTrim)" opacity="0.7" />
                <path d="M 12 4 C 24 0 18 8 8 8 Z" fill="url(#flankGoldTrim)" opacity="0.7" />
              </g>

              {/* Royal Ceremonial Elephant with Raised Trunk Holding Lotus (Gajraj Ashirwad - Feet Grounded on Pedestal) */}
              <g transform="translate(36, 70)">
                {/* Elephant Body */}
                <path
                  d="
                    M 72 78
                    C 72 65 70 48 56 42
                    C 45 37 32 40 24 48
                    C 16 56 18 78 18 78
                    L 24 78 L 26 62
                    L 40 62 L 40 78
                    L 48 78 L 50 62
                    L 64 62 L 66 78
                    Z
                  "
                  fill="url(#flankGoldTrim)"
                />

                {/* Head & Majestic Raised Trunk */}
                <path
                  d="
                    M 26 48
                    C 22 42 16 38 12 40
                    C 8 42 6 48 6 56
                    C 6 64 2 68 0 64
                    C -2 58 4 48 8 40
                    C 12 32 18 26 26 28
                    C 30 30 32 38 32 44
                    Z
                  "
                  fill="url(#flankGoldTrim)"
                />

                {/* Golden Lotus held at tip of trunk */}
                <circle cx="-1" cy="62" r="3" fill="#ffb300" />
                <path d="M -4 60 C -6 56 -1 54 -1 60 Z" fill="#fff8e7" />

                {/* Fan Ear with Gold Detailing */}
                <path
                  d="M 30 38 C 38 34 42 46 36 54 C 32 56 28 50 30 38 Z"
                  fill="url(#flankGoldTrim)"
                  stroke="#5d3604"
                  strokeWidth="0.8"
                />

                {/* White Ivory Tusk */}
                <path d="M 16 52 C 12 55 10 60 12 62 C 14 62 16 56 18 53 Z" fill="#fffef7" />

                {/* Royal Embroidered Saddle Cloth (Jhool) */}
                <path
                  d="M 32 48 L 62 48 L 60 62 L 34 62 Z"
                  fill="#800020"
                  stroke="url(#flankGoldTrim)"
                  strokeWidth="1"
                />
                <circle cx="47" cy="55" r="2.5" fill="url(#flankGoldTrim)" />
                {/* Hanging Tassels on Jhool */}
                <line x1="38" y1="62" x2="38" y2="66" stroke="url(#flankGoldTrim)" strokeWidth="1" />
                <line x1="47" y1="62" x2="47" y2="67" stroke="url(#flankGoldTrim)" strokeWidth="1" />
                <line x1="56" y1="62" x2="56" y2="66" stroke="url(#flankGoldTrim)" strokeWidth="1" />

                {/* Howdah Finial Crown */}
                <path d="M 42 42 L 52 42 L 47 34 Z" fill="url(#flankGoldTrim)" />
                <circle cx="47" cy="33" r="1.5" fill="#fff8e7" />
              </g>
            </svg>
          </div>

          {/* Ceremonial Brass Plate / Urli Base */}
          <div className="plate-base-bowl">
            <svg
              className="urli-svg"
              viewBox="0 0 150 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="75" cy="50" rx="68" ry="24" fill="#a07018" />
              <ellipse cx="75" cy="46" rx="65" ry="20" fill="url(#flankGoldTrim)" />
              <ellipse cx="75" cy="46" rx="58" ry="16" fill="#1b3a4b" opacity="0.85" />
              
              <g transform="translate(75, 45)">
                <ellipse cx="0" cy="0" rx="16" ry="6" fill="#f06292" opacity="0.8" />
                <ellipse cx="0" cy="-2" rx="10" ry="4" fill="#f8bbd0" />
                <circle cx="0" cy="-2" r="3.5" fill="#ffb300" />
                <circle cx="0" cy="-4" r="1.8" fill="#ffffff" className="urli-diya-flicker" />
              </g>

              <path d="M 10 46 C 4 46 2 54 8 58 C 14 58 14 48 10 46 Z" fill="url(#flankGoldTrim)" />
              <path d="M 140 46 C 146 46 148 54 142 58 C 136 58 136 48 140 46 Z" fill="url(#flankGoldTrim)" />
            </svg>
          </div>
        </div>
      </aside>

      {/* ====================================================================
          5. PUSHPA VRISHTI: Live Drifting Rose & Marigold Wedding Petals
          ==================================================================== */}
      <div className="pushpa-vrishti-layer" aria-hidden="true">
        {/* Left Side Drifting Petals */}
        <span className="wedding-petal petal-rose p1" />
        <span className="wedding-petal petal-marigold p2" />
        <span className="wedding-petal petal-rose p3" />
        <span className="wedding-petal petal-jasmine p4" />
        <span className="wedding-petal petal-marigold p5" />
        <span className="wedding-petal petal-rose p6" />

        {/* Right Side Drifting Petals */}
        <span className="wedding-petal petal-marigold p7" />
        <span className="wedding-petal petal-rose p8" />
        <span className="wedding-petal petal-jasmine p9" />
        <span className="wedding-petal petal-rose p10" />
        <span className="wedding-petal petal-marigold p11" />
        <span className="wedding-petal petal-rose p12" />
      </div>
    </div>
  );
};
