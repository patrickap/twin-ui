import { z } from 'zod';
import { signInFormSchema } from '../schemas';

type Credentials = { username: string; password: string };

type SignInForm = z.infer<typeof signInFormSchema>;

type AccessToken = {
  value: string;
  expires: string;
};

type User = {
  id: string;
  role: Role;
  username: string;
};

type Role = 'USER' | 'ADMIN';

export type { Credentials, SignInForm, AccessToken, User, Role };
