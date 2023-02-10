import { User } from '../types/user';

const getUser = (id: User['id']) => {
  return Promise.resolve({ id: '1', username: 'testuser' } as User);
};

export { getUser };
