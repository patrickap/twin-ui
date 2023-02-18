import { DashboardContent } from './dashboard-content';
import { DashboardFooter } from './dashboard-footer';
import { DashboardHeader } from './dashboard-header';
import { DashboardMain } from './dashboard-main';
import { DashboardSide } from './dashboard-side';
import { DashboardWrapper } from './dashboard-wrapper';

const Dashboard = {
  Layout: DashboardWrapper,
  Side: DashboardSide,
  Main: DashboardMain,
  Header: DashboardHeader,
  Content: DashboardContent,
  Footer: DashboardFooter,
};

export * from './dashboard-main';
export * from './dashboard-side';
export * from './dashboard-wrapper';
export { Dashboard };
