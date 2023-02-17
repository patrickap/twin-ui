import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getAccountQuery } from '../queries';
import { Account, Role } from '../types';

const useAccount = (options?: {
  getAccount: UseQueryOptions<Account, unknown, Account, string[]>;
}) => {
  const getAccount = useQuery({
    ...options?.getAccount,
    ...getAccountQuery(),
  });

  const isRole = (...roles: Role[]) => {
    const role = getAccount.data?.role;
    return role ? roles.includes(role) : false;
  };

  return { getAccount, isRole };
};

export { useAccount };
