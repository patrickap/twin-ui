import { AuthenticationProvider } from '@/features/auth/providers';
import { i18n } from '@/libs/i18next';
import { queryClient } from '@/libs/react-query';
import { router } from '@/libs/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import './index.css';

// TODO: remove empty src/folders with .gitkeep

i18n.init();

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RouterProvider router={router} />
        </AuthenticationProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
