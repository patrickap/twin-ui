import { Spinner } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { userQuery } from '../../factories';

type RoleGuardProps = {
  onError?: () => void;
  children?: ReactNode;
};

const RoleGuard = ({ children, onError }: RoleGuardProps) => {
  const user = useQuery({ ...userQuery(), onError });

  if (user.isLoading) {
    return <Spinner />;
  } else if (user.isSuccess) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export { RoleGuard };
export type { RoleGuardProps };
