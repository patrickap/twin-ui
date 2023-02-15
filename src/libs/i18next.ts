import en from '@/locales/en.json';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languageDetector = new LanguageDetector();

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['navigator'],
    },
    resources: {
      en: {
        translation: en,
      },
    },
    fallbackLng: 'en',
  });

export { i18n };
