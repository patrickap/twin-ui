import { useAuth } from '@/features/auth/hooks';
import { privateRoutes, publicRoutes } from '@/routes';
import { useRoutes } from 'react-router-dom';

// TODO: setup husky, commitlint, semantic release with changelog, stylelint
// TODO: use authguard component
// TODO: code splitting and lazy loading with @loadable/component library
// TODO: smart redirect to previous protected route if logged in successfully
// TODO: robots.txt

const App = () => {
  const { signIn } = useAuth();
  const route = useRoutes(signIn.isSuccess ? privateRoutes : publicRoutes);

  return <div className='bg-slate-50'>{route}</div>;
};

export { App };
