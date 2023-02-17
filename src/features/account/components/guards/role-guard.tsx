import { ReactNode } from 'react';
import { useAccount } from '../../hooks';

import { Role } from '../../types';

type RoleGuardProps = {
  roles: Role[];
  loadingElement?: ReactNode;
  errorElement?: ReactNode;
  children?: ReactNode;
};

const RoleGuard = ({
  roles,
  loadingElement,
  errorElement,
  children,
}: RoleGuardProps) => {
  const { getAccount, isRole } = useAccount();

  if (getAccount.isLoading) {
    return <>{loadingElement}</>;
  } else if (getAccount.isSuccess && isRole(...roles)) {
    return <>{children}</>;
  } else {
    return <>{errorElement}</>;
  }
};

export { RoleGuard };
export type { RoleGuardProps };
