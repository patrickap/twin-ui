import { ChakraProvider, Container } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { chakraTheme } from './config/chakra-config';
import { queryClient } from './config/react-query';
import './index.css';
import { router } from './routes';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <Container>
          {/* <SignIn /> */}
          <RouterProvider router={router} />
        </Container>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
