import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SideProps = {
  children?: ReactNode;
};

const Side = ({ children }: SideProps) => {
  return (
    <Stack
      h='full'
      w={{ base: 0, md: 76, xl: 256 }}
      display={{ base: 'none', md: 'flex' }}
      px={4}
      py={8}
      spacing={8}
      bg='bg-surface'
      shadow='xs'
    >
      {children}
    </Stack>
  );
};

export { Side };
