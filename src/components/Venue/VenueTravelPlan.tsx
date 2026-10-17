import React from 'react';
import { TravelOption, SupportedLanguage } from '../../types/invitation';

interface VenueTravelPlanProps {
  heading: { en: string; hi: string };
  subtitle: { en: string; hi: string };
  options: TravelOption[];
  language: SupportedLanguage;
}

/**
 * Plan Your Visit (Getting There) Component.
 * Presents clear, practical transit and travel cards (airport, railway, parking, etc.).
 * Only renders options that are configured.
 */
export const VenueTravelPlan: React.FC<VenueTravelPlanProps> = ({
  heading,
  subtitle,
  options,
  language,
}) => {
  const isHindi = language === 'hi';
  const headingText = heading[language] || heading.en;
  const subtitleText = subtitle[language] || subtitle.en;

  if (!options || options.length === 0) {
    return null;
  }

  return (
    <section className="venue-travel-plan-section" aria-label="Travel & Transit Information">
      <div className="travel-plan-header">
        <div className="travel-pill">
          <span className="pill-star">✦</span>
          <span className="pill-text">
            {isHindi ? 'यात्रा मार्ग निर्देश' : 'Transit & Directions'}
          </span>
          <span className="pill-star">✦</span>
        </div>

        <h3 className={`travel-heading ${isHindi ? 'font-devanagari' : ''}`}>
          {headingText}
        </h3>

        <p className={`travel-subtitle ${isHindi ? 'font-devanagari' : ''}`}>
          {subtitleText}
        </p>
      </div>

      <div className="travel-options-grid">
        {options.map((option) => {
          const title = option.title[language] || option.title.en;
          const description = option.description[language] || option.description.en;
          const distance = option.distanceOrTime?.[language] || option.distanceOrTime?.en;

          return (
            <article key={option.id} className="travel-card" aria-label={title}>
              <div className="travel-card-icon-wrap" aria-hidden="true">
                <span className="travel-icon">{option.icon || '🚗'}</span>
              </div>

              <div className="travel-card-content">
                <h4 className={`travel-card-title ${isHindi ? 'font-devanagari' : ''}`}>
                  {title}
                </h4>
                <p className={`travel-card-desc ${isHindi ? 'font-devanagari' : ''}`}>
                  {description}
                </p>

                {distance && (
                  <span className="travel-card-distance">
                    ⏱️ {distance}
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
