import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { userQuery } from '../../factories';
import { Role } from '../../types';

type RoleGuardProps = {
  roles: Role[];
  onSuccess?: () => void;
  onError?: () => void;
  children?: ReactNode;
};

const RoleGuard = ({ roles, onSuccess, onError, children }: RoleGuardProps) => {
  const user = useQuery({ ...userQuery(), onSuccess, onError });
  const role = user.data?.role;
  const isAllowed = role ? roles.includes(role) : false;

  if (user.isSuccess && isAllowed) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export { RoleGuard };
export type { RoleGuardProps };
