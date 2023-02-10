import { ChakraProvider, Container } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { chakraTheme } from './config/chakra-config';
import { configureI18n } from './config/i18next';
import { queryClient } from './config/react-query';
import './index.css';
import { Error } from './pages/error';
import { router } from './routes';

configureI18n();

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <ChakraProvider theme={chakraTheme}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </QueryClientProvider>
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
