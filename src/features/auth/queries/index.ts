import { getUser } from '../api';
import { AccessToken } from '../types';

const userQuery = (token: AccessToken) => ({
  queryKey: ['getUser', token.value],
  queryFn: () => getUser(token),
});

export { userQuery };
