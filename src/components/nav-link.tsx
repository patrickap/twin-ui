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

// TODO: refactor
const NavLink = ({ icon, children, ...props }: NavLinkProps) => {
  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <Button
          as={LinkOverlay}
          isActive={isActive}
          leftIcon={icon ? <Icon as={icon} fontSize='xl' /> : undefined}
          colorScheme='gray'
          variant='solid'
          bg={isActive ? 'none' : ''}
          justifyContent='start'
          w='100%'
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
