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
          w='full'
          fontWeight='medium'
          justifyContent='start'
          colorScheme='gray'
          variant='ghost'
          isActive={isActive}
          leftIcon={icon ? <Icon as={icon} fontSize='xl' /> : undefined}
        >
          <>{children}</>
        </Button>
      )}
    </NavLinkBase>
  );
};

export { NavLink };
export type { NavLinkProps };
