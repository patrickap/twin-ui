import { Center as CenterContent, Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type CenterProps = {
  children?: ReactElement | ReactElement[];
};

const Center = ({ children }: CenterProps) => {
  return (
    <Container>
      <CenterContent w='100%' h='100vh'>
        {children}
      </CenterContent>
    </Container>
  );
};

export { Center };
export type { CenterProps };
