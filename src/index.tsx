import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { useAuth } from './features/auth/hooks';
import './index.css';
import { queryClient } from './lib/react-query';
import { protectedRoutes, publicRoutes } from './routes';
import { chakraTheme } from './theme';

// TODO: add ts alias imports for features & allow only import from feature root

const root = document.getElementById('root') as HTMLElement;

const App = () => {
  const isAuth = useAuth();
  const route = useRoutes(isAuth ? protectedRoutes : publicRoutes);
  return <>{route}</>;
};

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* TODO: add layout around error component... */}
    <ErrorBoundary FallbackComponent={() => <>Error</>}>
      <ChakraProvider theme={chakraTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
