import { Admin } from '@/features/admin';
import { User } from '@/features/user';
import { z } from 'zod';
import { signInFormSchema } from '../schemas';

type Credentials = Pick<SignInForm, 'username' | 'password'>;

type SignInForm = z.infer<typeof signInFormSchema>;

type AccessToken = {
  value: string;
  expires: string;
};

type AuthUser<T extends User | Admin = User | Admin> = T & {
  accessToken: AccessToken;
};

export type { Credentials, SignInForm, AccessToken, AuthUser };
