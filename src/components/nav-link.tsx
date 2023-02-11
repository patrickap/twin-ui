import { Button, Icon, LinkOverlay, useColorModeValue } from '@chakra-ui/react';
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
  // TODO: why is gray and white the default color in chakra ui using color scheme gray?
  const linkBackground = useColorModeValue('gray.200', 'whiteAlpha.300');

  return (
    <NavLinkBase {...props}>
      {({ isActive }) => (
        <Button
          as={LinkOverlay}
          leftIcon={icon ? <Icon as={icon} /> : undefined}
          colorScheme='gray'
          justifyContent='start'
          w='100%'
          bg={isActive ? linkBackground : ''}
        >
          <>{children}</>
        </Button>
      )}
    </NavLinkBase>
  );
};

export { NavLink };
export type { NavLinkProps };
