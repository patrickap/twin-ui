import { Center as CenterContent, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CenterProps = {
  type?: 'full' | 'screen';
  children?: ReactNode;
};

const Center = ({ type = 'full', children }: CenterProps = {}) => {
  const width = type === 'full' ? 'full' : '100vw';
  const height = type === 'full' ? 'full' : '100vh';

  return (
    <Container>
      <CenterContent w={width} h={height}>
        {children}
      </CenterContent>
    </Container>
  );
};

export { Center };
export type { CenterProps };
