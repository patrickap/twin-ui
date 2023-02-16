import { getUser } from '../api';

const userQuery = () => ({
  queryKey: ['user', 'me'],
  queryFn: () => getUser(),
});

export { userQuery };
