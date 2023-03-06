import { Spinner, Title } from '@/components/elements';
import { Center, Dashboard } from '@/components/layouts';
import { AuthGuard } from '@/features/auth/components';
import { SignIn } from '@/features/auth/pages';
import { Files, Shares } from '@/features/user/pages';
import { Error, NotFound } from '@/pages';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

// TODO: use lazy loading

const routes: RouteObject[] = [
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
      },
      {
        path: 'files',
        element: <Files />,
      },
      {
        path: 'shares',
        element: <Shares />,
      },
    ],
  },
  {
    path: '/signin',
    element: (
      <Center>
        <SignIn />
      </Center>
    ),
  },
  {
    path: '*',
    element: (
      <Center>
        <NotFound />
      </Center>
    ),
  },
].map((route) => ({
  ...route,
  // add error element to every route
  errorElement: (
    <Center>
      <Error />
    </Center>
  ),
}));

export { routes };
