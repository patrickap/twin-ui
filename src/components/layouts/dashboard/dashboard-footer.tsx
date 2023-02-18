import { ReactNode } from 'react';

type DashboardFooterProps = {
  children?: ReactNode;
};

const DashboardFooter = ({ children }: DashboardFooterProps) => {
  return <>{children}</>;
};

export { DashboardFooter };
export type { DashboardFooterProps };
