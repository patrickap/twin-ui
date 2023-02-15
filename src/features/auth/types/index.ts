import { User } from '@/features/user';
import { z } from 'zod';
import { signInFormSchema } from '../schemas';

type Credentials = Pick<SignInForm, 'username' | 'password'>;

type SignInForm = z.infer<typeof signInFormSchema>;

type AccessToken = {
  value: string;
  expires: string;
};

type Role = 'USER' | 'ADMIN';

type User = {
  id: string;
  role: Role;
  username: string;
  accessToken: AccessToken;
};

export type { Credentials, SignInForm, AccessToken, User };
