import { useAuth } from '@/features/account';
import { privateRoutes, publicRoutes } from '@/routes';
import { useRoutes } from 'react-router-dom';

// TODO: setup husky, commitlint, semantic release with changelog, stylelint
// TODO: add authguard and roleguard component
// TODO: code splitting and lazy loading with @loadable/component library
// TODO: useAccount hook with isRole(...) helper
// TODO: smart redirect to previous protected route if logged in successfully

const App = () => {
  const { isTokenValid } = useAuth();
  const route = useRoutes(isTokenValid ? privateRoutes : publicRoutes);

  return route;
};

export { App };
