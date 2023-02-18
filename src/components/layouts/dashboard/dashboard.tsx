import { Logo, Navigation } from '@/components/elements';
import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from '../../elements/header';
import { Main } from './main';
import { Side } from './side';

type DashboardLayoutProps = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Flex h='100vh'>
      <Side>
        <Logo size={8} />
        <Navigation />
      </Side>
      <Main>
        <Header>TITLE</Header>
        {children}
      </Main>
    </Flex>
  );
};

export { DashboardLayout };
export type { DashboardLayoutProps };
