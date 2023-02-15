import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { useAuth } from './features/auth';
import { queryClient } from './libs/react-query';
import { protectedRoutes, publicRoutes } from './routes';
import { chakraTheme } from './theme';

// TODO: add ts alias imports for features & allow only import from feature root
// TODO: add index file to each feature
// TODO: add locales folder to each feature if its a specific translation
// TODO: setup husky, commitlint, semantic release with changelog, stylelint

const App = () => {
  const isAuth = useAuth();
  const route = useRoutes(isAuth ? protectedRoutes : publicRoutes);

  return (
    <ErrorBoundary FallbackComponent={() => <>Error</>}>
      <ChakraProvider theme={chakraTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{route}</BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
};

export { App };
