import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils/createPageUrl";
import { 
  Home, 
  Search, 
  FileText, 
  Shield, 
  GraduationCap, 
  Heart, 
  Menu,
  X,
  Globe,
  ChevronDown
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from './contexts/LanguageContext';

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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 saffron-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 hover-lift">
              <div className="w-10 h-10 rounded-full tricolor-gradient flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t('govAssist')}</h1>
                <p className="text-xs text-orange-600 font-medium">{t('tagline')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.url
                      ? 'bg-orange-100 text-orange-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 border-orange-200 hover:bg-orange-50">
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{currentLang?.native}</span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={language === lang.code ? 'bg-orange-50 text-orange-700' : ''}
                    >
                      <span className="font-medium">{lang.native}</span>
                      <span className="ml-2 text-sm text-gray-500">({lang.name})</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-orange-100">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.url
                        ? 'bg-orange-100 text-orange-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full tricolor-gradient flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">{t('govAssist')}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('footerDescription')}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('popularServices')}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>DigiLocker Access</li>
                <li>Aadhaar Services</li>
                <li>PAN Card Application</li>
                <li>Educational Certificates</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('privacyAndTrust')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>{t('privacy1')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>{t('privacy2')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>{t('privacy3')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-500">
              {t('copyright')}
              <span className="mx-2">•</span>
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