import { User } from '../types/user';

// TODO: implement user api
const getUser = (id?: string) => {
  return Promise.resolve({
    id: '1',
    username: 'username',
    role: 'user',
  } as User);
};

export { getUser };
