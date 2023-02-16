import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { getAccountQuery } from '../../queries';

import { Role } from '../../types';

type RoleGuardProps = {
  roles: Role[];
  onSuccess?: () => void;
  onError?: () => void;
  children?: ReactNode;
};

const RoleGuard = ({ roles, onSuccess, onError, children }: RoleGuardProps) => {
  const account = useQuery({ ...getAccountQuery(), onSuccess, onError });
  const role = account.data?.role;
  const isAllowed = role ? roles.includes(role) : false;

  if (account.isSuccess && isAllowed) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export { RoleGuard };
export type { RoleGuardProps };
