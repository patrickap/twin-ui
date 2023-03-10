import { Spinner, Title } from '@/components';
import { AuthGuard } from '@/features/auth/guards';
import { SignInPage } from '@/features/auth/pages';
import { FilesPage, SharesPage } from '@/features/user/pages';
import { CenterLayout, DashboardLayout } from '@/layouts';
import { ErrorPage, NotFoundPage } from '@/pages';
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
          <CenterLayout>
            <Spinner />
          </CenterLayout>
        }
        errorElement={<Navigate to='/signin' />}
      >
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
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
        element: <Title order={2}>Nothing here</Title>,
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
    path: '/signin',
    element: (
      <CenterLayout>
        <SignInPage />
      </CenterLayout>
    ),
  },
  {
    path: '*',
    element: (
      <CenterLayout>
        <NotFoundPage />
      </CenterLayout>
    ),
  },
].map((route) => ({
  ...route,
  // add error element to every route
  errorElement: (
    <CenterLayout>
      <ErrorPage />
    </CenterLayout>
  ),
}));

export { routes };
