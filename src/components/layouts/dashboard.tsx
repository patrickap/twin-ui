import { ButtonIcon, Drawer, Input, Nav, NavItem } from '@/components/elements';
import {
  Bars2Icon,
  FolderIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';

type DashboardProps = {
  children?: ReactNode;
};

const Navigation = () => {
  return (
    <>
      <Input
        icon={{ left: <MagnifyingGlassIcon strokeWidth={2} /> }}
        placeholder='Search'
        onChange={() => void 0}
      />
      <Nav>
        <NavItem to='/dashboard/files' icon={<FolderIcon strokeWidth={2} />}>
          Files
        </NavItem>
        <NavItem to='/dashboard/shares' icon={<ShareIcon strokeWidth={2} />}>
          Shares
        </NavItem>
      </Nav>
    </>
  );
};

const Dashboard = ({ children }: DashboardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-screen w-full'>
      <aside className='hidden w-20 border border-r border-slate-200 bg-white md:block lg:w-64'>
        <div className='flex flex-col gap-8 px-4 py-9'>
          <Navigation />
        </div>
      </aside>
      <main className='flex flex-grow flex-col p-4 md:px-8'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-slate-500'>bread / crumbs / here</span>
          <div className='md:hidden'>
            <ButtonIcon onClick={() => setIsOpen(true)}>
              <Bars2Icon className='h-5 w-5' />
            </ButtonIcon>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div className='flex flex-col gap-8 p-4'>
                <Navigation />
              </div>
            </Drawer>
          </div>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export { Dashboard };
export type { DashboardProps };
