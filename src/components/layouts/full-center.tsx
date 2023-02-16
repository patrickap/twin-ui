import { Center, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FullCenterProps = {
  children?: ReactNode;
};

const FullCenter = ({ children }: FullCenterProps) => {
  return (
    <Container w='100vw' h='100vh'>
      <Center w='full' h='full'>
        {children}
      </Center>
    </Container>
  );
};

export { FullCenter };
export type { FullCenterProps };
