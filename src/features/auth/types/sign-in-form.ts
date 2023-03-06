import { z } from 'zod';
import { signInForm } from '../schemas';

type SignInForm = z.infer<typeof signInForm>;

export type { SignInForm };
