import { Logo } from '@/components/elements';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Navigation } from './navigation';

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        icon={<Icon as={Bars3Icon} w={6} h={6} />}
        colorScheme='gray'
        variant='ghost'
        aria-label='menu'
        onClick={() => setIsOpen(true)}
      />

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

export { NavigationDrawer };
