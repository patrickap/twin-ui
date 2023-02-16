import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/signin' />,
  },
  {
    path: '/signin',
    element: await import('@/components/layouts/center').then(({ Center }) => (
      <Center type='screen'>
        <Outlet />
      </Center>
    )),
    children: [
      {
        index: true,
        element: await import('@/features/auth/pages/sign-in').then(
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
