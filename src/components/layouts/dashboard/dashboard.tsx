import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Main } from './main';
import { Side } from './side';

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <Flex h='100vh'>
      <Side />
      <Main>{children}</Main>
    </Flex>
  );
};

export { Dashboard };
export type { DashboardProps };
