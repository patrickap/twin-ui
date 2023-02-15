import { i18n } from '@/libs/i18next';
import { queryClient } from '@/libs/react-query';
import { chakraTheme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './index.css';

i18n.init();

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary FallbackComponent={() => <>Error</>}>
        <ChakraProvider theme={chakraTheme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </ChakraProvider>
      </ErrorBoundary>
    </I18nextProvider>
  </React.StrictMode>,
);
