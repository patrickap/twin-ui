import { sleep } from '@/utils';
import { authStore } from '../stores';
import { Account } from '../types';

const getAccount = async () => {
  // TODO: remove mock, token is added automatically on requests using ky
  const { token } = authStore.getRawState();

  await sleep(2000);

  if (token?.value === 'user-1234567890') {
    return Promise.resolve<Account>({
      id: '1',
      username: 'user',
      role: 'USER',
    });
  }

  if (token?.value === 'admin-1234567890') {
    return Promise.resolve<Account>({
      id: '1',
      username: 'admin',
      role: 'ADMIN',
    });
  }

  return Promise.reject();
};

export { getAccount };
