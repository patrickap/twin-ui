import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: '/dashboard',
    element: await import('@/components/layouts').then(({ Dashboard }) => (
      <Dashboard>
        <Outlet />
      </Dashboard>
    )),
    // TODO: implement loaders where possible
    // loader: async () => {
    //   const query = getUserQuery();
    //   return (
    //     queryClient.getQueryData(query.queryKey) ??
    //     (await queryClient.fetchQuery(query))
    //   );
    // },
    children: [
      {
        path: 'files',
        element: await import('@/features/user/pages/files').then(
          ({ Files }) => <Files />,
        ),
      },
      {
        path: 'shares',
        element: await import('@/features/user/pages/shares').then(
          ({ Shares }) => <Shares />,
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/dashboard' />,
  },
];

export { privateRoutes };
