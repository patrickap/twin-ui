import { createBrowserRouter } from 'react-router-dom';
import { queryClient } from '../config/react-query';
import { userQuery } from '../constants/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Home</>,
    children: [
      {
        path: 'account',
        element: <>Account</>,
        children: [
          {
            path: 'account/:userId',
            element: <>AccountDetails</>,
            loader: async ({ params }) => {
              const query = userQuery(params.userId);
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
