import React from 'react';
import { NavSection, SupportedLanguage } from '../../types/invitation';
import './MobileQuickDock.css';

interface MobileQuickDockProps {
  language: SupportedLanguage;
  activeSection: NavSection;
  onNavigateSection: (section: NavSection) => void;
}

interface DockItem {
  key: NavSection;
  label: { en: string; hi: string };
  icon: string;
}

const DOCK_ITEMS: DockItem[] = [
  { key: 'welcome', label: { en: 'Home', hi: 'स्वागत' }, icon: '🏛️' },
  { key: 'story', label: { en: 'Story', hi: 'कहानी' }, icon: '📖' },
  { key: 'celebrations', label: { en: 'Events', hi: 'उत्सव' }, icon: '𑁍' },
  { key: 'venue', label: { en: 'Venue', hi: 'स्थल' }, icon: '📍' },
  { key: 'rsvp', label: { en: 'RSVP', hi: 'उपस्थिति' }, icon: '💌' },
  { key: 'gallery', label: { en: 'Photos', hi: 'यादें' }, icon: '📸' },
];

/**
 * Mobile-First Quick Navigation Dock.
 * Provides instant thumb-reach navigation between sections on touch devices.
 */
export const MobileQuickDock: React.FC<MobileQuickDockProps> = ({
  language,
  activeSection,
  onNavigateSection,
}) => {
  return (
    <nav className="mobile-quick-dock" aria-label="Mobile Quick Navigation">
      {DOCK_ITEMS.map((item) => {
        const isActive = activeSection === item.key;
        const labelText = item.label[language] || item.label.en;

        return (
          <button
            key={item.key}
            type="button"
            className={`quick-dock-btn ${isActive ? 'active' : ''}`}
            onClick={() => {
              onNavigateSection(item.key);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label={labelText}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="quick-dock-icon">{item.icon}</span>
            <span className="quick-dock-label">{labelText}</span>
            {isActive && <span className="quick-dock-pip" />}
          </button>
        );
      })}
    </nav>
  );
};
