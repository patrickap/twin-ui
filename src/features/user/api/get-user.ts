import { sleep } from '@/utils';
import { User } from '../types';

const getUser = async () => {
  // TODO: remove mock

  await sleep(500);

  return Promise.resolve<User>({
    id: '1',
    mail: 'user@mail.com',
    username: 'user',
  });
};

export { getUser };
