import { locales as authLocales } from '@/features/auth';
import { locales as commonLocales } from '@/locales';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languageDetector = new LanguageDetector();

const resources = {
  en: {
    ...commonLocales.en,
    ...authLocales.en,
  },
} as const;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['navigator'],
    },
    resources,
    fallbackLng: 'en',
  });

export { i18n, resources };
