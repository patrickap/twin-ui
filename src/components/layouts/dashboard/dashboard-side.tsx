import { Logo, Navigation } from '@/components/elements';
import { Profile } from '@/features/user';
import { Divider, Spacer, Stack, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardSideProps = {
  children?: ReactNode;
};

const DashboardSide = ({ children }: DashboardSideProps) => {
  const isIconOnly = useBreakpointValue({ base: true, md: true, xl: false });

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
      <Navigation isIconOnly={isIconOnly} />
      <Spacer />
      <Divider />
      <Profile isIconOnly={isIconOnly} />
      {children}
    </Stack>
  );
};

export { DashboardSide };
export type { DashboardSideProps };
