import * as z from 'zod';

const signInFormSchema = z.object({
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(10, { message: 'Required' }),
  remember: z.boolean().optional(),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export { signInFormSchema };
export type { SignInForm };
