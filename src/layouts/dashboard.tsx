import { Drawer, Nav, NavItem, Tooltip } from '@/components';
import { useBreakpoint } from '@/hooks';
import {
  DocumentDuplicateIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

// TODO: move Navigation in subfolder /dashboard/components -> same for pages and e.g. specific dropdown component

type DashboardLayoutProps = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { md } = useBreakpoint();

  return (
    <div className='flex h-screen w-full'>
      {md ? (
        <aside className='w-20 border-r border-slate-100 bg-white md:block lg:w-64'>
          <div className='px-4 py-8'>
            <Navigation />
          </div>
        </aside>
      ) : null}
      <main className='flex flex-grow flex-col gap-1 p-4 md:p-8'>
        <div className='z-[0] flex items-center justify-end'>
          {!md ? (
            <Drawer>
              {({ close }) => (
                <div className='p-4 pt-0'>
                  <Navigation onNavigate={close} />
                </div>
              )}
            </Drawer>
          ) : null}
        </div>
        <div className='-mt-10 md:mt-0'>{children}</div>
      </main>
    </div>
  );
};

type NavigationProps = {
  onNavigate?: (path: string) => void;
};

const Navigation = ({ onNavigate }: NavigationProps) => {
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
          <span
            className='md:flex md:justify-center lg:inline-block lg:w-full'
            onClick={() => onNavigate?.(item.path)}
          >
            {!md || lg ? (
              <NavItem to={item.path} icon={item.icon}>
                {item.name}
              </NavItem>
            ) : (
              <Tooltip side='right' content={item.name}>
                <NavItem to={item.path} icon={item.icon}></NavItem>
              </Tooltip>
            )}
          </span>
        </div>
      ))}
    </Nav>
  );
};

export { DashboardLayout };
export type { DashboardLayoutProps };
