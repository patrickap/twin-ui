import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { queryClient } from '../config/react-query';
import { userQuery } from '../constants/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: '/dashboard',
    element: await import('../layouts/dashboard').then(({ Dashboard }) => (
      <Dashboard>
        <Outlet />
      </Dashboard>
    )),
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
        element: await import('../pages/files').then(({ Files }) => <Files />),
      },
      {
        path: 'shares',
        element: await import('../pages/shares').then(({ Shares }) => (
          <Shares />
        )),
      },
      // admin routes
      {
        path: 'users',
        element: await import('../pages/users').then(({ Users }) => <Users />),
      },
      {
        path: 'groups',
        element: await import('../pages/groups').then(({ Groups }) => (
          <Groups />
        )),
      },
      {
        path: 'folders',
        element: await import('../pages/folders').then(({ Folders }) => (
          <Folders />
        )),
      },
      {
        path: 'events',
        element: await import('../pages/events').then(({ Events }) => (
          <Events />
        )),
      },
      {
        path: 'system',
        element: await import('../pages/system').then(({ System }) => (
          <System />
        )),
      },
      // user & admin
      {
        path: 'profile',
        element: await import('../pages/profile').then(({ Profile }) => (
          <Profile />
        )),
      },
    ],
  },
  {
    path: '/signin',
    element: await import('../layouts/modal').then(({ Modal }) => (
      <Modal>
        <Outlet />
      </Modal>
    )),
    children: [
      {
        index: true,
        element: await import('../pages/signin').then(({ SignIn }) => (
          <SignIn />
        )),
      },
    ],
  },
  {
    path: '*',
    element: await import('../pages/not-found').then(({ NotFound }) => (
      <NotFound />
    )),
  },
]);

export { router };
