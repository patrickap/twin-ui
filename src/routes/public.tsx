import { CenterLayout } from '@/components/layouts';
import { SignInPage } from '@/features/auth/pages';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/signin' />,
  },
  {
    path: '/signin',
    element: (
      <CenterLayout>
        <Outlet />
      </CenterLayout>
    ),
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/signin' />,
  },
];

export { publicRoutes };
