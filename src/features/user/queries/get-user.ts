import { getUser } from '../api';

const getUserQuery = () => ({
  queryKey: ['getUser'],
  queryFn: getUser,
});

export { getUserQuery };
