import { ReactElement } from 'react';

type DashboardLayoutProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <>{children}</>;
};

export { DashboardLayout };
export type { DashboardLayoutProps };
