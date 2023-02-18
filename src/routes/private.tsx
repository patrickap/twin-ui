import { Logo, Navigation } from '@/components/elements';
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
      <Dashboard.Layout>
        <Dashboard.Side>
          <Logo size={8} />
          <Navigation />
        </Dashboard.Side>
        <Outlet />
      </Dashboard.Layout>
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
        element: (
          <Dashboard.Main>
            <Dashboard.Header>Home</Dashboard.Header>
            <Dashboard.Content>
              <>Nothing there</>
            </Dashboard.Content>
          </Dashboard.Main>
        ),
      },
      {
        path: 'files',
        element: (
          <Dashboard.Main>
            <Dashboard.Header>Files</Dashboard.Header>
            <Dashboard.Content>
              <FilesPage />
            </Dashboard.Content>
          </Dashboard.Main>
        ),
      },
      {
        path: 'shares',
        element: (
          <Dashboard.Main>
            <Dashboard.Header>Shares</Dashboard.Header>
            <Dashboard.Content>
              <SharesPage />
            </Dashboard.Content>
          </Dashboard.Main>
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
