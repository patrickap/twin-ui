import { isFunction } from '@/utils';
import {
  Drawer as DrawerWrapper,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';

type DrawerProps = {
  children?:
    | ReactNode
    | ((drawer: ReturnType<typeof useDisclosure>) => ReactNode);
};

const Drawer = ({ children }: DrawerProps) => {
  const disclosure = useDisclosure();
  const { isOpen, onOpen, onClose } = disclosure;

  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        icon={<Icon as={Bars3Icon} w={6} h={6} />}
        colorScheme='gray'
        variant='ghost'
        aria-label='menu'
        onClick={onOpen}
      />

      <DrawerWrapper
        placement='left'
        onClose={onClose}
        isOpen={isOpen}
        size='xs'
      >
        <DrawerOverlay />
        <DrawerContent bg='bg-surface'>
          <DrawerCloseButton />
          <DrawerBody px={4} py={8}>
            <Stack h='full' spacing={8}>
              {isFunction(children) ? children(disclosure) : children}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerWrapper>
    </>
  );
};

export { Drawer };
export type { DrawerProps };
