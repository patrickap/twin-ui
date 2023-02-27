import { Drawer, Nav, NavItem } from '@/components/elements';
import { useBreakpoint } from '@/hooks';
import {
  DocumentDuplicateIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  const { md } = useBreakpoint();
  return (
    <div className='flex h-screen w-full'>
      {md ? (
        <aside className='w-20 border border-r border-slate-200 bg-white md:block lg:w-64'>
          <div className='px-4 py-8'>
            <Navigation />
          </div>
        </aside>
      ) : null}
      <main className='flex flex-grow flex-col gap-1 p-4 md:p-8'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-slate-500'>bread / crumbs / here</span>
          {!md ? (
            <Drawer>
              {({ close }) => (
                <div className='p-4 pt-0' onClick={close}>
                  <Navigation />
                </div>
              )}
            </Drawer>
          ) : null}
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

const Navigation = () => {
  const { md, lg } = useBreakpoint();
  const items = [
    {
      path: '/dashboard/files',
      name: 'Files',
      icon: <DocumentDuplicateIcon />,
    },
    {
      path: '/dashboard/shares',
      name: 'Shares',
      icon: <PaperClipIcon />,
    },
  ];

  return (
    <Nav>
      {items.map((item, i) => (
        <div key={i}>
          <span className='md:flex md:justify-center lg:inline-block lg:w-full'>
            <NavItem to={item.path} icon={item.icon}>
              {!md || lg ? item.name : null}
            </NavItem>
          </span>
        </div>
      ))}
    </Nav>
  );
};

export { Dashboard };
export type { DashboardProps };
