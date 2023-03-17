import { ReactNode } from 'react';

type CenterLayoutProps = {
  children?: ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center p-4'>
      {children}
    </div>
  );
};

export { CenterLayout };
export type { CenterLayoutProps };
