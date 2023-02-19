import { ReactNode } from 'react';
import { ContainerLayout } from '../container';

type DashboardMainProps = {
  children?: ReactNode;
};

const DashboardMain = ({ children }: DashboardMainProps) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};

export { DashboardMain };
export type { DashboardMainProps };
