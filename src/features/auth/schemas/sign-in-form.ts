import { i18n } from '@/libs/i18next';
import { z } from 'zod';

// TODO: add schemas for all relevant server response models such as token, user, ...

const signInForm = z.object({
  username: z.string({
    errorMap: () => ({
      message: i18n.t('form.validation.required', { ns: 'auth' }),
    }),
  }),
  password: z.string({
    errorMap: () => ({
      message: i18n.t('form.validation.required', { ns: 'auth' }),
    }),
  }),
  remember: z.boolean().optional(),
});

export { signInForm };
