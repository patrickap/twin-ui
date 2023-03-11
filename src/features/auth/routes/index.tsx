import { SignInPage } from '@/features/auth/pages';
import { CenterLayout } from '@/layouts';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/auth',
    element: (
      <CenterLayout>
        <Outlet />
      </CenterLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='signin' />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
    ],
  },
];

export { routes };
