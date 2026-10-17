import React from 'react';
import { DoorTheme } from '../../types/invitation';
import { doorThemes } from '../../config/doorThemes.config';

interface ThemeSwitcherProps {
  currentTheme: DoorTheme;
  onSelectTheme: (theme: DoorTheme) => void;
}

/**
 * Discreet, luxury Palace Theme Switcher pill.
 * Allows instant live preview between royal palace door finishes:
 * Peacock Sapphire, Royal Maroon, Emerald Gold, and Imperial Teak.
 */
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onSelectTheme,
}) => {
  const themeKeys = Object.keys(doorThemes) as DoorTheme[];

  return (
    <nav
      className="theme-switcher-bar"
      aria-label="Palace Door Architectural Theme Switcher"
    >
      <span className="theme-switcher-label">Door Theme:</span>
      <div className="theme-options-group" role="radiogroup">
        {themeKeys.map((themeKey) => {
          const config = doorThemes[themeKey];
          const isSelected = currentTheme === themeKey;
          return (
            <button
              key={themeKey}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`theme-pill-btn ${isSelected ? 'theme-active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectTheme(themeKey);
              }}
              title={config.subtitle}
            >
              <span
                className="theme-color-dot"
                style={{ backgroundColor: config.doorGradStops[0] }}
                aria-hidden="true"
              />
              <span className="theme-name-text">
                {themeKey === 'peacock-sapphire'
                  ? 'Peacock Sapphire'
                  : themeKey === 'royal-maroon'
                  ? 'Royal Maroon'
                  : themeKey === 'emerald-gold'
                  ? 'Emerald Gold'
                  : 'Imperial Teak'}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
