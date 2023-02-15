import { useAuthenticate } from '@/features/auth';
import { protectedRoutes, publicRoutes } from '@/routes';
import { useRoutes } from 'react-router-dom';

// TODO: add ts alias imports for features & allow only import from feature root
// TODO: add index file to each feature
// TODO: add locales folder to each feature if its a specific translation
// TODO: setup husky, commitlint, semantic release with changelog, stylelint
// TODO: authguard and roleguard component
// TODO: fix i18n init and loading

const App = () => {
  const { data: isAuthenticated } = useAuthenticate();
  const route = useRoutes(isAuthenticated ? protectedRoutes : publicRoutes);

  return route;
};

export { App };
