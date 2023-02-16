import { authStore } from '../stores';
import { AccessToken, Credentials, User } from '../types';

const signIn = async (credentials: Credentials) => {
  // TODO: const url = urlcat(import.meta.env.VITE_API_BASE_URL, '/auth');
  // TODO: use ky.post(...)
  // TODO: remove mock

  if (credentials?.username === 'user') {
    return Promise.resolve<AccessToken>({
      value: 'user-1234567890',
      expires: '1234-56-78',
    });
  }

  if (credentials?.username === 'admin') {
    return Promise.resolve<AccessToken>({
      value: 'admin-1234567890',
      expires: '1234-56-78',
    });
  }

  // TODO: why does this logs to the console?!
  return Promise.reject();
};

const getUser = async () => {
  // TODO: remove mock, token is added automatically on requests using ky
  const { token } = authStore.getRawState();

  if (token?.value === 'user-1234567890') {
    return Promise.resolve<User>({ id: '1', username: 'user', role: 'USER' });
  }

  if (token?.value === 'admin-1234567890') {
    return Promise.resolve<User>({ id: '1', username: 'admin', role: 'ADMIN' });
  }

  return Promise.reject();
};

export { signIn, getUser };
