import { z } from 'zod';

// TODO: add schemas for all api relevant methods such as credentials, access token, user, ...

const signInFormSchema = z.object({
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(10, { message: 'Required' }),
  remember: z.boolean().optional(),
});

export { signInFormSchema };
