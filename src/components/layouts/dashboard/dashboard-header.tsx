import { NavigationDrawer } from '@/components/elements';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardHeaderProps = {
  children?: ReactNode;
};

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <>
      <Flex p={4}>
        <NavigationDrawer />

        <Center flex={1}>
          <Heading fontSize='xl' lineHeight={1}>
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
