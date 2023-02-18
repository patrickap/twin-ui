import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardWrapperProps = {
  children?: ReactNode;
};

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return <Flex h='100vh'>{children}</Flex>;
};

export { DashboardWrapper };
export type { DashboardWrapperProps };
