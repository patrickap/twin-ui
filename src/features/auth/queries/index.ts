import { getUser } from '../api';
import { AccessToken } from '../types';

const userQuery = (token: AccessToken) => ({
  queryKey: ['user', token.value],
  queryFn: () => getUser(token),
});

export { userQuery };
