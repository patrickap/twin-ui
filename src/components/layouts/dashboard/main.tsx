import { Container, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type MainProps = {
  children?: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Stack flex={1} h='full'>
      <Container>{children}</Container>
    </Stack>
  );
};

export { Main };
export type { MainProps };
