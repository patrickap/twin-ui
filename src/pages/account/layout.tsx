import { Center, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type LayoutProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Center w='100%' h='100vh'>
        {children}
      </Center>
    </Container>
  );
};

export { Layout };
export type { LayoutProps };
