import { getUser } from '../api';

const userQuery = (id?: string) => ({
  queryKey: ['user', id],
  queryFn: async () => getUser(id),
});

export { userQuery };
