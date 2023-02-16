import { Button, Icon, IconButton } from '@chakra-ui/react';
import { ForwardRefExoticComponent, ReactNode } from 'react';
import {
  NavLink as NavLinkBase,
  NavLinkProps as NavLinkBaseProps,
} from 'react-router-dom';

type NavLinkProps = {
  icon?: ForwardRefExoticComponent<any>;
  isIconOnly?: boolean;
  children?: ReactNode;
} & NavLinkBaseProps;

const NavLink = ({ icon, isIconOnly, children, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <>
          {isIconOnly ? (
            <IconButton
              colorScheme='gray'
              variant='ghost'
              isActive={isActive}
              icon={
                icon ? (
                  <Icon
                    as={icon}
                    w={{ base: 6, xl: 5 }}
                    h={{ base: 6, xl: 5 }}
                  />
                ) : undefined
              }
              aria-label='nav-link'
            />
          ) : (
            <Button
              w='full'
              fontSize={14}
              justifyContent='start'
              colorScheme='gray'
              variant='ghost'
              isActive={isActive}
              fontWeight={isActive ? 'semibold' : 'medium'}
              leftIcon={
                icon ? (
                  <Icon
                    as={icon}
                    w={{ base: 6, xl: 5 }}
                    h={{ base: 6, xl: 5 }}
                  />
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
