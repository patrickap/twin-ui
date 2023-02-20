import { Logo, Navigation } from '@/components/elements';
import { Profile } from '@/features/user';
import { Divider, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardSideProps = {
  children?: ReactNode;
};

const DashboardSide = ({ children }: DashboardSideProps) => {
  const isIconOnly = useBreakpointValue({ base: true, md: true, xl: false });

  return (
    <div className='flex h-full w-64 flex-col gap-4 border border-r border-slate-200 bg-slate-100 px-4 py-6'>
      <Logo size={2} />
      <Navigation isIconOnly={isIconOnly} />
      <Spacer />
      <Divider />
      <Profile isIconOnly={isIconOnly} />
      {children}
    </div>
  );
};

export { DashboardSide };
export type { DashboardSideProps };
