import React from 'react';
import { NavSection, SupportedLanguage } from '../../types/invitation';
import { defaultClosingConfig } from '../../config/closingSection.config';
import { WeddingLogo } from '../OpeningPage/WeddingLogo';

interface RoyalWeddingFooterProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateSection: (section: NavSection) => void;
  activeSection?: NavSection;
}

/**
 * Refined Royal Indian Wedding Footer.
 * Features:
 * - H&S monogram emblem.
 * - Couple names: Hitesh & Shivanee.
 * - Short poetic closing message.
 * - Navigation links to all existing sections.
 * - Compact Hindi/English language toggle.
 * - Delicate ornamental gold divider.
 */
export const RoyalWeddingFooter: React.FC<RoyalWeddingFooterProps> = ({
  language,
  onLanguageChange,
  onNavigateSection,
  activeSection,
}) => {
  const isHindi = language === 'hi';
  const config = defaultClosingConfig;
  const footerData = config.footer;

  const closingMessage = footerData.closingMessage[language] || footerData.closingMessage.en;
  const switchLabel = footerData.switchLanguage[language] || footerData.switchLanguage.en;

  const navItems: { key: NavSection; label: string }[] = [
    { key: 'welcome', label: footerData.navLinks.welcome[language] || footerData.navLinks.welcome.en },
    { key: 'story', label: footerData.navLinks.story[language] || footerData.navLinks.story.en },
    { key: 'celebrations', label: footerData.navLinks.celebrations[language] || footerData.navLinks.celebrations.en },
    { key: 'venue', label: footerData.navLinks.venue[language] || footerData.navLinks.venue.en },
    { key: 'rsvp', label: footerData.navLinks.rsvp[language] || footerData.navLinks.rsvp.en },
    { key: 'gallery', label: footerData.navLinks.gallery[language] || footerData.navLinks.gallery.en },
  ];

  const handleToggleLanguage = () => {
    onLanguageChange(isHindi ? 'en' : 'hi');
  };

  const handleNavClick = (section: NavSection) => {
    onNavigateSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="royal-wedding-footer" role="contentinfo">
      <div className="royal-footer-inner">
        {/* Ornamental Top Gold Divider */}
        <div className="royal-footer-divider" aria-hidden="true">
          <span className="footer-line left-line" />
          <span className="footer-lotus-motif">𑁍</span>
          <span className="footer-line right-line" />
        </div>

        {/* Monogram Seal */}
        <div className="royal-footer-monogram">
          <WeddingLogo
            className="footer-logo-small"
            namesText=""
            hideLockupNames={true}
            hideSubtitle={true}
          />
        </div>

        {/* Couple Names */}
        <div className="royal-footer-couple">
          <span className="footer-couple-text cursive-signature">
            {config.coupleNames}
          </span>
        </div>

        {/* Closing Sentimental Tagline */}
        <p className={`royal-footer-message ${isHindi ? 'font-devanagari message-hindi' : ''}`}>
          “{closingMessage}”
        </p>

        {/* Section Navigation Links */}
        <nav className="royal-footer-nav" aria-label={isHindi ? 'वेबसाइट नेविगेशन' : 'Website navigation'}>
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item.key} className="footer-nav-item">
                <button
                  type="button"
                  className={`footer-nav-btn ${activeSection === item.key ? 'is-active' : ''} ${isHindi ? 'font-devanagari' : ''}`}
                  onClick={() => handleNavClick(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Utility Row: Language Switcher & Auspicious Mantra */}
        <div className="royal-footer-bottom-row">
          <div className="footer-mantra-pill">
            <span className="mantra-text">॥ शुभम् भवतु ॥</span>
          </div>

          <button
            type="button"
            className="footer-lang-toggle-btn"
            onClick={handleToggleLanguage}
            aria-label={switchLabel}
            title={switchLabel}
          >
            <span className="lang-icon">🌐</span>
            <span className="lang-label">
              {isHindi ? 'English' : 'हिंदी'}
            </span>
          </button>
        </div>

        {/* Copyright / Auspicious Blessing Line */}
        <div className="royal-footer-copyright">
          <p className="copyright-text">
            {footerData.copyright[language] || footerData.copyright.en}
          </p>
        </div>
      </div>
    </footer>
  );
};
