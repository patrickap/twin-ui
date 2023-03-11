import { Dialogs, Toasts } from '@/components';
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

// TODO: jsdoc method documentation everywhere
// TODO: need links and nav items focus ring? -> other style idea?

i18n.init();

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <RouterProvider router={router} />
          <Toasts />
          <Dialogs />
        </AuthenticationProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
