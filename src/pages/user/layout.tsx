import { HStack, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type LayoutProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Layout = ({ children }: LayoutProps) => {
  return (
    <HStack height='100vh' spacing={0}>
      <Stack width='2xs' height='100%' bg='gray.400'>
        <div>Side</div>
      </Stack>
      <Stack flexGrow={1} height='100%' bg='gray.200'>
        <div>Main</div>
      </Stack>
    </HStack>
  );
};

export { Layout };
export type { LayoutProps };
