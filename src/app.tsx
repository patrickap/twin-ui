import { authStore } from '@/features/auth';
import { protectedRoutes, publicRoutes } from '@/routes';
import { useRoutes } from 'react-router-dom';

// TODO: setup husky, commitlint, semantic release with changelog, stylelint
// TODO: add authguard and roleguard component

const App = () => {
  const isAuthenticated = authStore.useState((s) => !!s.token?.value);
  const route = useRoutes(isAuthenticated ? protectedRoutes : publicRoutes);

  return route;
};

export { App };
