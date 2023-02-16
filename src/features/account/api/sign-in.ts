import { sleep } from '@/utils';
import { AccessToken, Credentials } from '../types';

const signIn = async (credentials: Credentials) => {
  // TODO: const url = urlcat(import.meta.env.VITE_API_BASE_URL, '/auth');
  // TODO: use ky.post(...)
  // TODO: remove mock

  await sleep(2000);

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

export { signIn };
