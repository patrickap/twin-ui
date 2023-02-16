import { getAccount } from '../api';

const getAccountQuery = () => ({
  queryKey: ['getAccount'],
  queryFn: getAccount,
});

export { getAccountQuery };
