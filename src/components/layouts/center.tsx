import { ReactNode } from 'react';

type CenterLayoutProps = {
  children?: ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center px-6 sm:px-10'>
      {children}
    </div>
  );
};

export { CenterLayout };
export type { CenterLayoutProps };
