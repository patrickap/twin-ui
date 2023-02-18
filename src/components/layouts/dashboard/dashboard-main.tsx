import { Container, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardMainProps = {
  children?: ReactNode;
};

const DashboardMain = ({ children }: DashboardMainProps) => {
  return (
    <Stack flex={1} h='full'>
      <Container>{children}</Container>
    </Stack>
  );
};

export { DashboardMain };
export type { DashboardMainProps };
