import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/signin' />,
  },
  {
    path: '/signin',
    element: await import('../components/layouts/full-center').then(
      ({ FullCenter }) => (
        <FullCenter>
          <Outlet />
        </FullCenter>
      ),
    ),
    children: [
      {
        index: true,
        element: await import('../features/auth/pages/signin').then(
          ({ SignIn }) => <SignIn />,
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/signin' />,
  },
];

export { publicRoutes };
