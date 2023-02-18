import { Logo } from '@/components/elements';
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { ReactNode, useState } from 'react';
import { Navigation } from './navigation';

type HeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex p={4}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<Icon as={Bars3Icon} w={6} h={6} />}
          colorScheme='gray'
          variant='ghost'
          aria-label='menu'
          onClick={() => setIsOpen(true)}
        />

        <Center flex={1}>
          <Heading fontSize='xl' lineHeight={1}>
            {children}
          </Heading>
        </Center>

        {/* Empty box to center page title */}
        <Box display={{ base: 'flex', md: 'none' }} w={6} h={6} />
      </Flex>

      <Drawer placement='left' onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='bg-surface'>
          <DrawerCloseButton />
          <DrawerBody px={4} py={8}>
            <Stack h='full' spacing={8}>
              <Logo size={8} />
              <Navigation />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Header };
