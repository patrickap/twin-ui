import {
  Drawer as DrawerWrapper,
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

type DrawerProps = {
  children?: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
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

      <DrawerWrapper
        placement='left'
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg='bg-surface'>
          <DrawerCloseButton />
          <DrawerBody px={4} py={8}>
            <Stack h='full' spacing={8}>
              {children}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerWrapper>
    </>
  );
};

export { Drawer };
export type { DrawerProps };
