import { ButtonIcon, Drawer, Nav, NavItem, Tooltip } from '@/components';
import { useBreakpoint } from '@/hooks';
import {
  Bars2Icon,
  DocumentDuplicateIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

// TODO: move Navigation in subfolder /dashboard/components -> same for pages and their sub-components for example /pages/files/components/files-actions (dropdown)

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
            <Drawer
              trigger={
                <div className='absolute top-4 right-4'>
                  <ButtonIcon>
                    <Bars2Icon className='h-5 w-5' />
                  </ButtonIcon>
                </div>
              }
            >
              {(props) => <Navigation onNavigate={props.close} />}
            </Drawer>
          ) : null}
        </div>
        <div>{children}</div>
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
      path: '/user/files',
      name: 'Files',
      icon: <DocumentDuplicateIcon />,
    },
    {
      path: '/user/shares',
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
              <Tooltip position='right' content={item.name}>
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
