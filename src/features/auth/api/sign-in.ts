import { sleep } from '@/utils';
import { AccessToken, Credentials } from '../types';

const signIn = async (credentials: Credentials) => {
  // TODO: const url = urlcat(import.meta.env.VITE_API_BASE_URL, '/auth');
  // TODO: ky.post(...)
  // TODO: remove mock

  await sleep(1000);

  return Promise.resolve<AccessToken>({
    value: '1234567890',
    expires: '1234-56-78',
  });
};

export { signIn };
