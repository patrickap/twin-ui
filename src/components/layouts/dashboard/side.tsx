import { Logo } from '@/components/elements';
import { Stack } from '@chakra-ui/react';
import { Navigation } from './navigation';

const Side = () => {
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
      <Logo size={8} />
      <Navigation />
    </Stack>
  );
};

export { Side };
