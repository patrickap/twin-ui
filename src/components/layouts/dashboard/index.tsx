import { authStore, User } from '@/features/auth';
import {
  Box,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  Bars3Icon,
  CalendarDaysIcon,
  CircleStackIcon,
  FolderIcon,
  FolderPlusIcon,
  ShareIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';
import { Logo, NavLink } from '../../elements';

// TODO: refactor stuff in separate files

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <Flex h='100vh'>
      <Side />
      <Main>{children}</Main>
    </Flex>
  );
};

const Side = () => {
  // TODO: implement queries / mutations
  const user = authStore.useState((s) => s.user);
  const iconOnly = useBreakpointValue({ base: true, md: true, xl: false });

  return (
    <Stack
      h='full'
      w={{ base: 0, md: 76, xl: 256 }}
      display={{ base: 'none', md: 'flex' }}
      px={4}
      py={8}
      spacing={8}
      bg='bg-surface'
      shadow='xs'
    >
      <Logo size={8} />
      <NavItems user={user!} iconOnly={iconOnly} />
    </Stack>
  );
};

const Main = ({ children }: Pick<DashboardProps, 'children'>) => {
  return (
    <Stack flex={1} h='full'>
      <Header />
      <Container>
        <div>
          Main
          <br />
          {children}
        </div>
      </Container>
    </Stack>
  );
};

const Header = () => {
  const user = authStore.useState((s) => s.user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex p={4}>
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<Icon as={Bars3Icon} w={6} h={6} />}
          colorScheme='gray'
          variant='ghost'
          aria-label='menu'
          onClick={() => setIsOpen(true)}
        />

        <Center flex={1}>
          <Heading fontSize='xl' lineHeight={1}>
            Page Title
          </Heading>
        </Center>

        {/* Empty box to center page title */}
        <Box display={{ base: 'flex', md: 'none' }} w={6} h={6} />
      </Flex>

      <Drawer placement='left' onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='bg-surface'>
          <DrawerCloseButton />
          <DrawerBody px={4} py={8}>
            <Stack h='full' spacing={8}>
              <Logo size={8} />
              <NavItems user={user!} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

type NavItemsProps = {
  user: User;
  iconOnly?: boolean;
};

const NavItems = ({ user, iconOnly }: NavItemsProps) => {
  const items = [
    {
      to: 'files',
      icon: FolderIcon,
      label: 'Files',
      role: 'USER',
    },
    {
      to: 'shares',
      icon: ShareIcon,
      label: 'Shares',
      role: 'USER',
    },
    {
      to: 'profile',
      icon: UserIcon,
      label: 'Profile',
      role: 'USER',
    },
    {
      to: 'users',
      icon: UsersIcon,
      label: 'Users',
      role: 'ADMIN',
    },
    {
      to: 'groups',
      icon: UserGroupIcon,
      label: 'Groups',
      role: 'ADMIN',
    },
    {
      to: 'folders',
      icon: FolderPlusIcon,
      label: 'Folders',
      role: 'ADMIN',
    },
    {
      to: 'events',
      icon: CalendarDaysIcon,
      label: 'Events',
      role: 'ADMIN',
    },
    {
      to: 'system',
      icon: CircleStackIcon,
      label: 'System',
      role: 'ADMIN',
    },
    {
      to: 'profile',
      icon: UserIcon,
      label: 'Profile',
      role: 'ADMIN',
    },
  ];

  return (
    <List spacing={2} textAlign='center' w='full'>
      {items
        .filter((item) => user?.role === item.role)
        .map(({ to, icon, label }, i) => {
          return (
            <ListItem key={to + i}>
              <NavLink to={to} icon={icon} iconOnly={iconOnly}>
                {label}
              </NavLink>
            </ListItem>
          );
        })}
    </List>
  );
};

export { Dashboard };
export type { DashboardProps };
