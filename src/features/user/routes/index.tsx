import { Title } from '@/components';
import { AuthGuard } from '@/features/auth/guards';
import { FilesPage, SharesPage } from '@/features/user/pages';
import { DashboardLayout } from '@/layouts';
import { Outlet, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/user',
    element: (
      <AuthGuard>
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
