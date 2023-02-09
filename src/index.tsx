import { ChakraProvider, Container } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { chakraTheme } from './config/chakra-config';
import './index.css';
import { SignIn } from './pages/sign-in';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <Container>
        <SignIn />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
);
