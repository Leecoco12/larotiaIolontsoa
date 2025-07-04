import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white dark:bg-neutral-900 shadow-md py-3'
      : 'bg-transparent py-6'
  }`;

  const navLinks = [
    { to: '/', label: t('navigation.home') },
    { to: '/projects', label: t('navigation.projects') },
    { to: '/about', label: t('navigation.about') },
    { to: '/contact', label: t('navigation.contact') },
  ];

  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
            Larotia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium text-sm transition-colors hover:text-primary-500 dark:hover:text-primary-400 ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-neutral-700 dark:text-neutral-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label={t('language.changeLang')}
              >
                <Globe size={18} />
              </button>
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <LanguageSwitcher 
                    onClose={() => setIsLanguageMenuOpen(false)} 
                  />
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label={
                theme === 'dark' ? t('theme.light') : t('theme.dark')
              }
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label={
              theme === 'dark' ? t('theme.light') : t('theme.dark')
            }
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            id="menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 z-50 flex flex-col w-full h-full bg-white dark:bg-neutral-900 md:hidden"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                    Larotia
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav className="flex flex-col space-y-6">
                  <ul className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `text-xl font-medium transition-colors ${
                              isActive
                                ? 'text-primary-600 dark:text-primary-400'
                                : 'text-neutral-700 dark:text-neutral-300'
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                      {t('language.fr')}
                    </h3>
                    <LanguageSwitcher 
                      onClose={() => setIsMobileMenuOpen(false)}
                      isMobile 
                    />
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;