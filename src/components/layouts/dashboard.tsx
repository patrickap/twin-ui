import { Drawer, Nav, NavItem } from '@/components/elements';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className='flex h-screen w-full'>
      <aside className='hidden w-20 border border-r border-slate-200 bg-white md:block lg:w-64'>
        <div className='px-4 py-8'>
          <Navigation />
        </div>
      </aside>
      <main className='flex flex-grow flex-col gap-1 p-4 md:p-8'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-slate-500'>bread / crumbs / here</span>
          <div className='md:hidden'>
            <Drawer>
              {({ close }) => (
                <div className='p-4 pt-0' onClick={close}>
                  <Navigation />
                </div>
              )}
            </Drawer>
          </div>
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

const Navigation = () => {
  const items = [
    {
      path: '/dashboard/files',
      name: 'Files',
      icon: <FolderIcon strokeWidth={1.75} />,
    },
    {
      path: '/dashboard/shares',
      name: 'Shares',
      icon: <ShareIcon strokeWidth={1.75} />,
    },
  ];

  return (
    <Nav>
      {items.map((item, i) => (
        <div key={i}>
          <span className='hidden justify-center md:flex lg:hidden'>
            <NavItem to={item.path} icon={item.icon} />
          </span>
          <span className='w-full md:hidden lg:inline-block'>
            <NavItem to={item.path} icon={item.icon}>
              {item.name}
            </NavItem>
          </span>
        </div>
      ))}
    </Nav>
  );
};

export { Dashboard };
export type { DashboardProps };
