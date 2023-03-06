import { ReactNode } from 'react';
import { useAuth } from '../hooks';

type AuthGuardProps = {
  loadingElement?: ReactNode;
  errorElement?: ReactNode;
  children?: ReactNode;
};

const AuthGuard = ({
  loadingElement,
  errorElement,
  children,
}: AuthGuardProps) => {
  const { signIn, isTokenValid } = useAuth();

  if (signIn.isLoading) {
    return <>{loadingElement}</>;
  } else if (signIn.isSuccess && isTokenValid) {
    return <>{children}</>;
  } else {
    return <>{errorElement}</>;
  }
};

export { AuthGuard };
export type { AuthGuardProps };
