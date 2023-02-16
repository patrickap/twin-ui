import { getUser } from '../api';

const userQuery = () => ({
  queryKey: ['getUser'],
  queryFn: getUser,
});

export { userQuery };
