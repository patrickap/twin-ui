import { Dashboard } from '@/components/layouts';
import { FilesPage, SharesPage } from '@/features/user';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

// TODO: use lazy loading

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: '/dashboard',
    element: (
      <Dashboard>
        <Outlet />
      </Dashboard>
    ),
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
        index: true,
        element: <>Nothing there</>,
      },
      {
        path: 'files',
        element: <FilesPage />,
      },
      {
        path: 'shares',
        element: <SharesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/dashboard' />,
  },
];

export { privateRoutes };
