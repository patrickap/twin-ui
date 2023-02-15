import { Center, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FullCenterProps = {
  children?: ReactNode;
};

const FullCenter = ({ children }: FullCenterProps) => {
  return (
    <Container>
      <Center w='full' h='100vh'>
        {children}
      </Center>
    </Container>
  );
};

export { FullCenter };
export type { FullCenterProps };
