import React, { useState } from 'react';
import { SupportedLanguage, NavSection } from '../../types/invitation';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';
import './WeddingNav.css';

interface WeddingNavProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  activeSection?: NavSection;
  onBackToLanguageSelection?: () => void;
}

/**
 * Minimal, elegant royal wedding navigation bar.
 * Features:
 * - Left/Center: Existing H&S royal monogram logo & couple names
 * - Center: Desktop navigation destinations
 * - Right: Compact language switcher control & mobile drawer trigger
 * - Mobile: Side-slide drawer with luxury royal styling & backdrop overlay
 */
export const WeddingNav: React.FC<WeddingNavProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  activeSection = 'welcome',
  onBackToLanguageSelection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHindi = language === 'hi';

  const navItems: { key: NavSection; label: string }[] = [
    { key: 'welcome', label: isHindi ? 'स्वागतम्' : 'Welcome' },
    { key: 'story', label: isHindi ? 'हमारी कहानी' : 'Our Story' },
    { key: 'celebrations', label: isHindi ? 'मांगलिक कार्यक्रम' : 'Celebrations' },
    { key: 'venue', label: isHindi ? 'विवाह स्थल' : 'Venue' },
    { key: 'rsvp', label: isHindi ? 'उपस्थिति' : 'RSVP' },
    { key: 'gallery', label: isHindi ? 'यादें' : 'Memories' },
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigateSection(section);
    setMobileMenuOpen(false);
  };

  const handleToggleLang = () => {
    onLanguageChange(isHindi ? 'en' : 'hi');
  };

  return (
    <header className="royal-wedding-nav-bar" role="banner">
      <div className="nav-bar-content">
        {/* Brand Lockup: Logo Emblem */}
        <div className="nav-brand-wrap">
          {onBackToLanguageSelection && (
            <button
              type="button"
              className="nav-back-lang-link"
              onClick={onBackToLanguageSelection}
              aria-label={isHindi ? 'भाषा चयन पर वापस जाएं' : 'Back to language selection'}
              title={isHindi ? 'भाषा चयन पर वापस जाएं' : 'Back to language selection'}
            >
              ←
            </button>
          )}
          <div
            className="nav-brand-click"
            onClick={() => handleNavClick('welcome')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavClick('welcome')}
            aria-label="Hitesh and Shivanee Wedding Home"
          >
            <WeddingLogo
              className="nav-mini-monogram"
              namesText=""
              hideLockupNames={true}
              hideSubtitle={true}
            />
            <span className="nav-couple-title">Hitesh &amp; Shivanee</span>
          </div>
        </div>

        {/* Desktop Nav Destinations */}
        <nav className="nav-destinations-desktop" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <li key={item.key} className="nav-link-item">
                  <button
                    type="button"
                    className={`nav-link-btn ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => handleNavClick(item.key)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    {isActive && <span className="nav-active-pip" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Controls: Compact Language Switcher & Mobile Menu Toggle */}
        <div className="nav-right-controls">
          <button
            type="button"
            className="compact-lang-switcher"
            onClick={handleToggleLang}
            aria-label={isHindi ? 'Switch language to English' : 'भाषा बदलकर हिंदी करें'}
            title={isHindi ? 'Switch to English' : 'हिंदी में देखें'}
          >
            <span className="lang-globe-icon" aria-hidden="true">🌐</span>
            <span className="lang-target-text">{isHindi ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-nav-toggle-btn ${mobileMenuOpen ? 'toggle-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="toggle-bar bar-1" />
            <span className="toggle-bar bar-2" />
            <span className="toggle-bar bar-3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation & Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-nav-drawer" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Hitesh &amp; Shivanee</span>
              <button
                type="button"
                className="mobile-drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={isHindi ? 'बंद करें' : 'Close menu'}
              >
                ✕
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.key;
                return (
                  <li key={item.key} className="mobile-nav-item">
                    <button
                      type="button"
                      className={`mobile-nav-link ${isActive ? 'mobile-link-active' : ''}`}
                      onClick={() => handleNavClick(item.key)}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="mobile-active-lotus">𑁍</span>}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="mobile-drawer-lang-btn"
                onClick={() => {
                  handleToggleLang();
                  setMobileMenuOpen(false);
                }}
              >
                <span>🌐</span>
                <span>{isHindi ? 'Switch to English' : 'हिंदी में देखें'}</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
