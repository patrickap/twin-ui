import { useAuth } from '@/features/auth';
import { privateRoutes, publicRoutes } from '@/routes';
import { useRoutes } from 'react-router-dom';

// TODO: setup husky, commitlint, semantic release with changelog, stylelint
// TODO: add authguard and roleguard component
// TODO: code splitting and lazy loading with @loadable/component library
// TODO: useAccount hook with isRole(...) helper
// TODO: smart redirect to previous protected route if logged in successfully
// TODO: robot.txt

const App = () => {
  const { signIn } = useAuth();
  const route = useRoutes(signIn.isSuccess ? privateRoutes : publicRoutes);

  return <div className='bg-slate-50'>{route}</div>;
};

export { App };
