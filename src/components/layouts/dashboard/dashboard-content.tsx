import { ReactNode } from 'react';

type DashboardContentProps = {
  children?: ReactNode;
};

const DashboardContent = ({ children }: DashboardContentProps) => {
  return <>{children}</>;
};

export { DashboardContent };
export type { DashboardContentProps };
