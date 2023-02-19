import { ReactNode } from 'react';
import { ContainerLayout } from './container';

type CenterLayoutProps = {
  children?: ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <ContainerLayout>
      <div className='flex h-screen items-center justify-center'>
        {children}
      </div>
    </ContainerLayout>
  );
};

export { CenterLayout };
export type { CenterLayoutProps };
