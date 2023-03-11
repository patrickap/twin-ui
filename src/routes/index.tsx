import { routes as authRoutes } from '@/features/auth/routes';
import { routes as userRoutes } from '@/features/user/routes';
import { CenterLayout } from '@/layouts';
import { ErrorPage, NotFoundPage } from '@/pages';
import { Navigate, RouteObject } from 'react-router-dom';

// TODO: use lazy loading
// TODO: implement loaders where possible
// loader: async () => {
//   const query = getUserQuery();
//   return (
//     queryClient.getQueryData(query.queryKey) ??
//     (await queryClient.fetchQuery(query))
//   );
// },

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/user' />,
  },
  ...authRoutes,
  ...userRoutes,
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
