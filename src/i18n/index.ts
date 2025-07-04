import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsFR from './locales/fr/translation.json';
import translationsEN from './locales/en/translation.json';
import translationsDE from './locales/de/translation.json';

const resources = {
  fr: {
    translation: translationsFR
  },
  en: {
    translation: translationsEN
  },
  de: {
    translation: translationsDE
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;