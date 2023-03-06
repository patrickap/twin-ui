import { Spinner, Title } from '@/components/elements';
import { Center, Dashboard } from '@/components/layouts';
import { AuthGuard } from '@/features/auth/components';
import { SignInPage } from '@/features/auth/pages';
import { FilesPage, SharesPage } from '@/features/user/pages';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

// TODO: use lazy loading

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: '/dashboard',
    element: (
      <AuthGuard
        loadingElement={
          <Center>
            <Spinner />
          </Center>
        }
        errorElement={<Navigate to='/signin' />}
      >
        <Dashboard>
          <Outlet />
        </Dashboard>
      </AuthGuard>
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
        element: <Title size={2}>Nothing here</Title>,
        handle: {
          title: <>Dashboard</>,
        },
      },
      {
        path: 'files',
        element: <FilesPage />,
        handle: {
          title: <>Files</>,
        },
      },
      {
        path: 'shares',
        element: <SharesPage />,
        handle: {
          title: <>Shares</>,
        },
      },
    ],
  },
  {
    path: '/signin',
    element: (
      <Center>
        <Outlet />
      </Center>
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
    element: <Navigate to='/dashboard' />,
  },
]);

export { router };
