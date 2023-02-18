import { Drawer, Logo, Navigation } from '@/components/elements';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardHeaderProps = {
  children?: ReactNode;
};

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <>
      <Flex py={4} h={20} align='center'>
        <Drawer>
          <Logo size={8} />
          <Navigation />
        </Drawer>

        <Center flex={1}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} lineHeight={1}>
            {children}
          </Heading>
        </Center>

        {/* Empty box to center page title */}
        <Box display={{ base: 'flex', md: 'none' }} w={6} h={6} />
      </Flex>
    </>
  );
};

export { DashboardHeader };
export type { DashboardHeaderProps };
