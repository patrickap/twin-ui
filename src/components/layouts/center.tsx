import { Center, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CenterLayoutProps = {
  children?: ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <Container w='100vw' h='100vh'>
      <Center w='full' h='full'>
        {children}
      </Center>
    </Container>
  );
};

export { CenterLayout };
export type { CenterLayoutProps };
