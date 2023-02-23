import { Logo, Nav, NavItem } from '@/components/elements';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { ContainerLayout } from './container';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className='flex h-screen'>
      <aside className='flex h-full w-64 flex-col gap-4 border border-r border-slate-200 bg-white px-4 py-6'>
        <Logo size={2} />
        <Nav>
          <NavItem to='/dashboard/files' icon={<FolderIcon />}>
            Files
          </NavItem>
          <NavItem to='/dashboard/shares' icon={<ShareIcon />}>
            Shares
          </NavItem>
        </Nav>
      </aside>
      <main>
        <ContainerLayout>{children}</ContainerLayout>
      </main>
    </div>
  );
};

export { Dashboard };
export type { DashboardProps };
