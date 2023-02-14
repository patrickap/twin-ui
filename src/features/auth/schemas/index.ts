import { z } from 'zod';

const signInFormSchema = z.object({
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(10, { message: 'Required' }),
  remember: z.boolean().optional(),
});

export { signInFormSchema };
