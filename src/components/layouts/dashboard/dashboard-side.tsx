import { Logo, Nav, NavItem } from '@/components/elements';
import { Profile } from '@/features/user';
import { Divider, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

type DashboardSideProps = {
  children?: ReactNode;
};

const DashboardSide = ({ children }: DashboardSideProps) => {
  const isIconOnly = useBreakpointValue({ base: true, md: true, xl: false });

  return (
    <div className='flex h-full w-64 flex-col gap-4 border border-r border-slate-200 bg-white px-4 py-6'>
      <Logo size={2} />
      <Nav>
        <NavItem to='/dashboard/files' icon={<FolderIcon />}>
          Files
        </NavItem>
        <NavItem to='/dashboard/shares' icon={<ShareIcon />}>
          Shares
        </NavItem>
      </Nav>
      <Spacer />
      <Divider />
      <Profile isIconOnly={isIconOnly} />
      {children}
    </div>
  );
};

export { DashboardSide };
export type { DashboardSideProps };
