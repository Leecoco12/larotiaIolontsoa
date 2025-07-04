import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface LanguageSwitcherProps {
  onClose: () => void;
  isMobile?: boolean;
}

const LanguageSwitcher = ({ onClose, isMobile = false }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'fr', label: t('language.fr') },
    { code: 'en', label: t('language.en') },
    { code: 'de', label: t('language.de') },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onClose();
  };

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center justify-between p-3 rounded-md transition-colors ${
              i18n.language === lang.code
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            <span>{lang.label}</span>
            {i18n.language === lang.code && <Check size={16} />}
          </button>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50"
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors ${
            i18n.language === lang.code
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
          }`}
        >
          <span>{lang.label}</span>
          {i18n.language === lang.code && <Check size={14} />}
        </button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;