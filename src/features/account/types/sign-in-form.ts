import { z } from 'zod';
import { signInFormSchema } from '../schemas';

type SignInForm = z.infer<typeof signInFormSchema>;

export type { SignInForm };
