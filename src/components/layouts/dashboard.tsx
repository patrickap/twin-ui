import { ButtonIcon, Input, Nav, NavItem } from '@/components/elements';
import {
  Bars3Icon,
  FolderIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className='flex h-screen'>
      <aside className='hidden h-full w-20 flex-col gap-8 border border-r border-slate-200 bg-white px-4 py-6 md:flex md:py-10 lg:w-64'>
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
      <main className='flex h-full w-full flex-col gap-2 p-6 md:w-auto md:py-10 md:px-8'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm text-slate-500'>bread / crumbs / here</span>
          <div className='md:hidden'>
            <ButtonIcon>
              <Bars3Icon className='h-6 w-6' />
            </ButtonIcon>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export { Dashboard };
export type { DashboardProps };
