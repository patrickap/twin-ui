import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUserQuery } from '../queries';
import { User } from '../types';

const useUser = (options?: {
  getUser: UseQueryOptions<User, unknown, User, string[]>;
}) => {
  const getUser = useQuery({
    ...options?.getUser,
    ...getUserQuery(),
  });

  return { getUser };
};

export { useUser };
