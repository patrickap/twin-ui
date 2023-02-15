import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { userQuery } from '../features/user/queries';
import { queryClient } from '../libs/react-query';

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: '/dashboard',
    element: await import('../components/layouts/dashboard').then(
      ({ Dashboard }) => (
        <Dashboard>
          <Outlet />
        </Dashboard>
      ),
    ),
    // TODO: implement loaders, this is just an example
    loader: async ({ params }) => {
      const query = userQuery(params.id);
      return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
      );
    },
    children: [
      // user routes
      {
        path: 'files',
        element: await import('../features/user/pages/files').then(
          ({ Files }) => <Files />,
        ),
      },
      {
        path: 'shares',
        element: await import('../features/user/pages/shares').then(
          ({ Shares }) => <Shares />,
        ),
      },
      // admin routes
      {
        path: 'users',
        element: await import('../features/admin/pages/users').then(
          ({ Users }) => <Users />,
        ),
      },
      {
        path: 'groups',
        element: await import('../features/admin/pages/groups').then(
          ({ Groups }) => <Groups />,
        ),
      },
      {
        path: 'folders',
        element: await import('../features/admin/pages/folders').then(
          ({ Folders }) => <Folders />,
        ),
      },
      {
        path: 'events',
        element: await import('../features/admin/pages/events').then(
          ({ Events }) => <Events />,
        ),
      },
      {
        path: 'system',
        element: await import('../features/admin/pages/system').then(
          ({ System }) => <System />,
        ),
      },
      // admin & user routes
      // TODO: profile wont be a route instead will be a component
      // {
      //   path: 'profile',
      //   element: await import('../../pages/profile').then(
      //     ({ Profile }) => <Profile />,
      //   ),
      // },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/dashboard' />,
  },
];

export { protectedRoutes };