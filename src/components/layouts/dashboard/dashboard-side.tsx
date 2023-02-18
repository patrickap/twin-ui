import { Logo, Navigation } from '@/components/elements';
import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardSideProps = {
  children?: ReactNode;
};

const DashboardSide = ({ children }: DashboardSideProps) => {
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
      {children}
    </Stack>
  );
};

export { DashboardSide };
export type { DashboardSideProps };
