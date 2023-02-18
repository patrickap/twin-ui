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
import { ReactNode, useState } from 'react';

type NavigationDrawerProps = {
  children?: ReactNode;
};

const NavigationDrawer = ({ children }: NavigationDrawerProps) => {
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
              {children}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { NavigationDrawer };
export type { NavigationDrawerProps };
