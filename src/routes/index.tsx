import { createBrowserRouter, Navigate } from 'react-router-dom';
import { queryClient } from '../config/react-query';
import { userQuery } from '../constants/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/files' />,
  },
  {
    path: '/files',
    element: await import('../pages/files').then(({ Files }) => <Files />),
  },
  {
    path: '/shares',
    element: await import('../pages/shares').then(({ Shares }) => <Shares />),
  },
  {
    path: '/profile',
    element: await import('../pages/profile').then(({ Profile }) => (
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
  {
    path: '/signin',
    element: await import('../pages/signin').then(({ SignIn }) => <SignIn />),
  },
]);

export { router };
