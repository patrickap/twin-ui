import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { queryClient } from '../config/react-query';
import { userQuery } from '../constants/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/user' />,
  },
  {
    path: '/user',
    element: await import('../pages/user').then(({ Layout }) => (
      <Layout>
        <Outlet />
      </Layout>
    )),
    children: [
      {
        path: 'files',
        element: await import('../pages/user').then(({ Files }) => <Files />),
      },
      {
        path: 'shares',
        element: await import('../pages/user').then(({ Shares }) => <Shares />),
      },
      {
        path: 'profile',
        element: await import('../pages/user').then(({ Profile }) => (
          <Profile />
        )),
        // TODO: implement loaders, this is just an example
        loader: async ({ params }) => {
          const query = userQuery(params.id);
          return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
          );
        },
      },
    ],
  },
  {
    path: '/admin',
    element: await import('../pages/admin').then(({ Layout }) => (
      <Layout>
        <Outlet />
      </Layout>
    )),
    children: [
      {
        path: 'users',
        element: await import('../pages/admin').then(({ Users }) => <Users />),
      },
      {
        path: 'groups',
        element: await import('../pages/admin').then(({ Groups }) => (
          <Groups />
        )),
      },
      {
        path: 'folders',
        element: await import('../pages/admin').then(({ Folders }) => (
          <Folders />
        )),
      },
      {
        path: 'events',
        element: await import('../pages/admin').then(({ Events }) => (
          <Events />
        )),
      },
      {
        path: 'system',
        element: await import('../pages/admin').then(({ System }) => (
          <System />
        )),
      },
    ],
  },
  {
    path: '/signin',
    element: await import('../pages/signin').then(({ SignIn }) => <SignIn />),
  },
  {
    path: '*',
    element: await import('../pages/not-found').then(({ NotFound }) => (
      <NotFound />
    )),
  },
]);

export { router };
