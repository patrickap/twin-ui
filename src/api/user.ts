import { User } from '../types/user';

// TODO: implement user api
const getUser = (id?: string) => {
  return Promise.resolve({ id: '1', username: 'testuser' } as User);
};

export { getUser };
