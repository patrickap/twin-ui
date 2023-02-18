import { DashboardMain } from './dashboard-main';
import { DashboardSide } from './dashboard-side';
import { DashboardWrapper } from './dashboard-wrapper';

const Dashboard = {
  Layout: DashboardWrapper,
  Side: DashboardSide,
  Main: DashboardMain,
};

export * from './dashboard-main';
export * from './dashboard-side';
export * from './dashboard-wrapper';
export { Dashboard };
