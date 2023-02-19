import { ReactNode } from 'react';

type DashboardWrapperProps = {
  children?: ReactNode;
};

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return <div className='flex h-screen'>{children}</div>;
};

export { DashboardWrapper };
export type { DashboardWrapperProps };
