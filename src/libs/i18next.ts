import { locales as authLocales } from '@/features/auth/locales';
import { locales as commonLocales } from '@/locales';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languageDetector = new LanguageDetector();

const resources = {
  en: {
    ...commonLocales.en,
    ...authLocales.en,
  },
} as const;

const i18n = i18next
  .use(languageDetector)
  .use(initReactI18next)
  .createInstance({
    detection: {
      order: ['navigator'],
    },
    resources,
    fallbackLng: 'en',
  });

export { i18n, resources };
