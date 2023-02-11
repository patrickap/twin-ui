import { Container, HStack, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type LayoutProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Layout = ({ children }: LayoutProps) => {
  return (
    <HStack h='100vh' spacing={0}>
      <Stack
        w={{ base: '0px', lg: '76px', xl: '256px' }}
        h='100%'
        bg='gray.400'
      >
        <div>Side</div>
      </Stack>
      <Stack flexGrow={1} h='100%' bg='gray.200'>
        <Container>
          <div>Main</div>
        </Container>
      </Stack>
    </HStack>
  );
};

export { Layout };
export type { LayoutProps };
