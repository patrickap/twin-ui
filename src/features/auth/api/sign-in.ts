import { Admin } from '@/features/admin';
import { User } from '@/features/user';
import { AuthUser, Credentials } from '../types';

const signIn = async (credentials: Credentials) => {
  // TODO: const url = urlcat(import.meta.env.VITE_API_BASE_URL, '/auth');
  // TODO: use ky.post(...)
  // TODO: remove mock
  if (credentials.username === 'user') {
    return Promise.resolve({
      id: '1',
      username: 'user',
      role: 'USER',
      accessToken: {
        value: '123',
        expires: '',
      },
    } as AuthUser<User>);
  }

  if (credentials.username === 'admin') {
    return Promise.resolve({
      id: '2',
      username: 'admin',
      role: 'ADMIN',
      accessToken: {
        value: '456',
        expires: '',
      },
    } as AuthUser<Admin>);
  }

  return Promise.reject();
};

export { signIn };
