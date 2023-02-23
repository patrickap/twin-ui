import { Input, Nav, NavItem } from '@/components/elements';
import {
  FolderIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { ContainerLayout } from './container';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className='flex h-screen'>
      <aside className='flex h-full w-64 flex-col gap-8 border border-r border-slate-200 bg-white px-4 py-10'>
        <Input
          icon={{ left: <MagnifyingGlassIcon strokeWidth={2} /> }}
          placeholder='Search'
        />
        <Nav>
          <NavItem to='/dashboard/files' icon={<FolderIcon strokeWidth={2} />}>
            Files
          </NavItem>
          <NavItem to='/dashboard/shares' icon={<ShareIcon strokeWidth={2} />}>
            Shares
          </NavItem>
        </Nav>
      </aside>
      <main className='h-full'>
        <ContainerLayout>{children}</ContainerLayout>
      </main>
    </div>
  );
};

export { Dashboard };
export type { DashboardProps };
