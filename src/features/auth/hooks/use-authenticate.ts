import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { authenticateQuery } from '../queries';
import { authStore } from '../stores';

const useAuthenticate = (
  options?: UseQueryOptions<boolean, unknown, boolean, string[]>,
) => {
  const token = authStore.useState((s) => s.user?.accessToken);
  const authenticate = useQuery({
    ...options,
    ...authenticateQuery(token!),
  });
  return authenticate;
};

export { useAuthenticate };
