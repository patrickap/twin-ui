import { getUser } from '../api/user';

const userQuery = (id?: string) => ({
  queryKey: ['user', id],
  queryFn: async () => getUser(id),
});

export { userQuery };
