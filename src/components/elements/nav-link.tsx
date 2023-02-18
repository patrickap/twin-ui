import { Button, Icon, IconButton, Tooltip } from '@chakra-ui/react';
import { ForwardRefExoticComponent } from 'react';
import {
  NavLink as NavLinkBase,
  NavLinkProps as NavLinkBaseProps,
} from 'react-router-dom';

type NavLinkProps = {
  icon?: ForwardRefExoticComponent<any>;
  isIconOnly?: boolean;
  children?: string;
} & NavLinkBaseProps;

const NavLink = ({ icon, isIconOnly, children, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <>
          {isIconOnly ? (
            <Tooltip
              py={1}
              px={3}
              shadow='sm'
              rounded='lg'
              placement='right'
              fontSize={14}
              label={children}
              aria-label={children ?? ''}
            >
              <IconButton
                colorScheme='gray'
                variant='ghost'
                isActive={isActive}
                icon={
                  icon ? (
                    <Icon as={icon} w={5} h={5} strokeWidth={2} />
                  ) : undefined
                }
                aria-label={children ?? ''}
              />
            </Tooltip>
          ) : (
            <Button
              w='full'
              fontSize={14}
              justifyContent='start'
              colorScheme='gray'
              variant='ghost'
              isActive={isActive}
              fontWeight='semibold'
              gap={1}
              leftIcon={
                icon ? (
                  <Icon as={icon} w={5} h={5} strokeWidth={2} />
                ) : undefined
              }
            >
              <>{children}</>
            </Button>
          )}
        </>
      )}
    </NavLinkBase>
  );
};

export { NavLink };
export type { NavLinkProps };
