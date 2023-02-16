import { Container, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './header';

type MainProps = {
  children?: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Stack flex={1} h='full'>
      <Header />
      <Container>
        <div>
          Main
          <br />
          {children}
        </div>
      </Container>
    </Stack>
  );
};

export { Main };
export type { MainProps };
