import { Drawer, Logo, Navigation } from '@/components/elements';
import { Profile } from '@/features/user';
import {
  Box,
  Center,
  chakra,
  Divider,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type DashboardHeaderProps = {
  children?: ReactNode;
};

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <>
      <Flex py={4} h={20} align='center'>
        <chakra.div display={{ base: 'flex', md: 'none' }}>
          <Drawer>
            {({ onClose }) => (
              <>
                <Logo size={8} />
                <Navigation onNavigate={onClose} />
                <Spacer />
                <Divider />
                <Profile />
              </>
            )}
          </Drawer>
        </chakra.div>

        <Center flex={1}>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} lineHeight={1}>
            {children}
          </Heading>
        </Center>

        {/* Empty box to center page title */}
        <Box display={{ base: 'flex', md: 'none' }} w={10} h={10} />
      </Flex>
    </>
  );
};

export { DashboardHeader };
export type { DashboardHeaderProps };
