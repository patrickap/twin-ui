import { resources } from '@/libs/i18next';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}
