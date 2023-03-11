import { Spinner } from '@/components';
import { CenterLayout } from '@/layouts';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
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
  const location = useLocation();

  if (signIn.isLoading) {
    return loadingElement ? (
      loadingElement
    ) : (
      <CenterLayout>
        <Spinner />
      </CenterLayout>
    );
  } else if (signIn.isSuccess && isTokenValid) {
    return <>{children}</>;
  } else {
    return errorElement ? (
      errorElement
    ) : (
      <Navigate to='/auth/signin' replace state={{ origin: location }} />
    );
  }
};

export { AuthGuard };
export type { AuthGuardProps };
