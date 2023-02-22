import { Drawer, Logo } from '@/components/elements';
import { Profile } from '@/features/user';
import { Divider, Spacer } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardHeaderProps = {
  children?: ReactNode;
};

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <div className='flex items-center py-6'>
      <div>
        <Drawer>
          {({ onClose }) => (
            <>
              <Logo size={2} />
              {/* <Navigation onNavigate={onClose} /> */}
              <Spacer />
              <Divider />
              <Profile />
            </>
          )}
        </Drawer>
      </div>

      <div className='flex w-full justify-center text-xl font-semibold text-slate-700'>
        {children}
      </div>
    </div>
  );
};

export { DashboardHeader };
export type { DashboardHeaderProps };
