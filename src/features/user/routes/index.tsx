import { Spinner, Title } from '@/components';
import { AuthGuard } from '@/features/auth/guards';
import { FilesPage, SharesPage } from '@/features/user/pages';
import { CenterLayout, DashboardLayout } from '@/layouts';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/user',
    element: (
      <AuthGuard
        loadingElement={
          <CenterLayout>
            <Spinner />
          </CenterLayout>
        }
        errorElement={<Navigate to='/auth/signin' />}
      >
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </AuthGuard>
    ),
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
];

export { routes };
