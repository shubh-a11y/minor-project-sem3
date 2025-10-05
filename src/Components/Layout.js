import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils/createPageUrl";
import {
  Home,
  Search,
  FileText,
  Shield,
  Menu,
  X,
  Globe,
  ChevronDown
} from "lucide-react";
import { useLanguage } from './contexts/LanguageContext';
import { ThemeToggleButton } from './ui/ThemeToggleButton';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  const navigationItems = [
    {
      title: t('navHome'),
      url: createPageUrl("Home"),
      icon: Home,
    },
    {
      title: t('navServices'),
      url: createPageUrl("Services"),
      icon: FileText,
    },
    {
      title: t('navSearch'),
      url: createPageUrl("Search"),
      icon: Search,
    }
  ];

  return (
    <div className="app-container bg-white dark:bg-gray-900">

      {/* Header */}
      <header className="gov-header bg-white dark:bg-gray-800">
        <div className="header-content">
          <Link to={createPageUrl("Home")} className="logo-container">
            <div className="logo-icon">
              <Shield className="text-white" />
            </div>
            <div className="logo-text">
              <h1 className="logo-title text-gray-800 dark:text-white">{t('govAssist')}</h1>
              <p className="logo-subtitle text-gray-600 dark:text-gray-300">{t('tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={`nav-link text-gray-600 dark:text-gray-300 ${location.pathname === item.url ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-md">
            {/* Language Selector - Hidden on mobile */}
            <div className="language-selector hidden-mobile">
              <button
                className="language-button text-gray-600 dark:text-gray-300"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              >
                <Globe className="w-4 h-4" />
                <span className="language-text">{currentLang?.native}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <div className={`language-dropdown ${languageDropdownOpen ? 'open' : ''}`}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLanguageDropdownOpen(false);
                    }}
                  >
                    <span className="language-native">{lang.native}</span>
                    <span className="language-english">({lang.name})</span>
                  </div>
                ))}
              </div>
            </div>

            <ThemeToggleButton />

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-button text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className={`mobile-nav-link text-gray-600 dark:text-gray-300 ${location.pathname === item.url ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="mobile-nav-icon" />
              {item.title}
            </Link>
          ))}

          <div className="mobile-language-selector">
            <button
              className="mobile-language-button text-gray-600 dark:text-gray-300"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              <span>
                <Globe className="w-4 h-4 inline mr-2" />
                {currentLang?.native}
              </span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {languageDropdownOpen && (
              <div className="mobile-language-options">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`mobile-language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLanguageDropdownOpen(false);
                    }}
                  >
                    <span className="language-native">{lang.native}</span>
                    <span className="language-english">({lang.name})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content bg-white dark:bg-gray-900">
        <div className="content-container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="gov-footer bg-gray-800 dark:bg-gray-900">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <Shield className="text-white" />
                </div>
                <span className="footer-logo-text text-white">{t('govAssist')}</span>
              </div>
              <p className="footer-description text-gray-300">
                {t('footerDescription')}
              </p>
            </div>

            <div className="footer-section">
              <h3 className="text-white">Quick Links</h3>
              <ul className="footer-services text-gray-300">
                <li><Link to={createPageUrl("Services")} className="hover:text-orange-400">All Services</Link></li>
                <li><Link to={createPageUrl("Search")} className="hover:text-orange-400">Search</Link></li>
                <li><Link to="/faq" className="hover:text-orange-400">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="text-white">{t('privacyAndTrust')}</h3>
              <div className="footer-privacy text-gray-300">
                <div className="privacy-item">
                  <Shield className="privacy-icon" />
                  <span>{t('privacy1')}</span>
                </div>
                <div className="privacy-item">
                  <Shield className="privacy-icon" />
                  <span>{t('privacy2')}</span>
                </div>
                <div className="privacy-item">
                  <Shield className="privacy-icon" />
                  <span>{t('privacy3')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright text-gray-300">
              {t('copyright')}
              <span>•</span>
              {t('notAffiliated')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}