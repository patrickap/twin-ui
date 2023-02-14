import { User } from '../types';

// TODO: implement user api
const getUser = (id?: string) => {
  // const url = urlcat(import.meta.env.VITE_API_BASE_URL, '/user');
  // TODO: use ky.post(...)
  return Promise.resolve({
    id: '1',
    role: 'USER',
    username: 'username',
  } as User);
};

export { getUser };
