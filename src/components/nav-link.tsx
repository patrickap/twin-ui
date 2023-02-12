import { Button, Icon, LinkOverlay } from '@chakra-ui/react';
import { ForwardRefExoticComponent, ReactElement } from 'react';
import {
  NavLink as NavLinkBase,
  NavLinkProps as NavLinkBaseProps,
} from 'react-router-dom';

type NavLinkProps = {
  icon?: ForwardRefExoticComponent<any>;
  children?: string | ReactElement | ReactElement[];
} & NavLinkBaseProps;

const NavLink = ({ icon, children, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <Button
          as={LinkOverlay}
          isActive={isActive}
          leftIcon={icon ? <Icon as={icon} /> : undefined}
          colorScheme='gray'
          justifyContent='start'
          w='100%'
        >
          <>{children}</>
        </Button>
      )}
    </NavLinkBase>
  );
};

export { NavLink };
export type { NavLinkProps };
