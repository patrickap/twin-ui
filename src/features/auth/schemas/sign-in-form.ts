import { z } from 'zod';

// TODO: add schemas for all relevant models such as credentials, access token, user, ...

const signInForm = z.object({
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
  remember: z.boolean().optional(),
});

export { signInForm };
