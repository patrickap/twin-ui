import { getUser } from '../api/user';

const UserQuery = (id: string) => ({
  queryKey: ['user', id],
  queryFn: async () => getUser(id),
});

export { UserQuery };
