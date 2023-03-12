import { ButtonIcon, Drawer } from '@/components';
import { useBreakpoint } from '@/hooks';
import { Bars2Icon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import { Navigation } from './components';

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
        <div className='flex items-center justify-end'>
          {!md ? (
            <div className='absolute top-4 right-4'>
              <Drawer
                trigger={
                  <ButtonIcon>
                    <Bars2Icon className='h-5 w-5' />
                  </ButtonIcon>
                }
              >
                {(props) => <Navigation onNavigate={props.close} />}
              </Drawer>
            </div>
          ) : null}
        </div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export { DashboardLayout };
export type { DashboardLayoutProps };
