import { createBrowserRouter, Outlet } from 'react-router-dom';
import { queryClient } from '../config/react-query';
import { userQuery } from '../constants/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: 'account',
        children: [
          { index: true, element: <div>Account</div> },
          {
            path: ':id',
            element: <div>Account Details</div>,
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
    ],
  },
]);

export { router };
