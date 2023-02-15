import { Center as CenterContent, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FullCenterProps = {
  children?: ReactNode;
};

// TODO: rename CenterContent to Center

const FullCenter = ({ children }: FullCenterProps) => {
  return (
    <Container>
      <CenterContent w='full' h='100vh'>
        {children}
      </CenterContent>
    </Container>
  );
};

export { FullCenter };
export type { FullCenterProps };
