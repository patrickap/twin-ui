import { Button, Icon } from '@chakra-ui/react';
import { ForwardRefExoticComponent, ReactNode } from 'react';
import {
  NavLink as NavLinkBase,
  NavLinkProps as NavLinkBaseProps,
} from 'react-router-dom';

type NavLinkProps = {
  icon?: ForwardRefExoticComponent<any>;
  children?: ReactNode;
} & NavLinkBaseProps;

// TODO: refactor
const NavLink = ({ icon, children, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <Button
          isActive={isActive}
          leftIcon={icon ? <Icon as={icon} fontSize='xl' /> : undefined}
          colorScheme='gray'
          variant='ghost'
          bg={isActive ? 'none' : ''}
          justifyContent='start'
          w='full'
          fontWeight='medium'
        >
          <>{children}</>
        </Button>
      )}
    </NavLinkBase>
  );
};

export { NavLink };
export type { NavLinkProps };
