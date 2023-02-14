import {
  Box,
  Center,
  Container,
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
import { useQuery } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Logo, NavLink } from '../components';
import { userQuery } from '../constants/queries';

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
  const user = useQuery(userQuery('1'));
  const isUser = user.data?.role === 'user';
  const isAdmin = user.data?.role === 'admin';

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
      {/* TODO: refactor to not have to pass iconOnly for every element */}
      <List spacing={2} alignItems='center' w='full'>
        {isUser ? (
          <>
            <ListItem>
              <NavLink to='files' icon={FolderIcon} iconOnly={iconOnly}>
                Files
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='shares' icon={ShareIcon} iconOnly={iconOnly}>
                Shares
              </NavLink>
            </ListItem>
            <ListItem>
              {/* TODO: profile link to bottom as select */}
              <NavLink to='profile' icon={UserIcon} iconOnly={iconOnly}>
                Profile
              </NavLink>
            </ListItem>
          </>
        ) : null}

        {isAdmin ? (
          <>
            <ListItem>
              <NavLink to='users' icon={UsersIcon} iconOnly={iconOnly}>
                Users
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='groups' icon={UserGroupIcon} iconOnly={iconOnly}>
                Groups
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='folders' icon={FolderPlusIcon} iconOnly={iconOnly}>
                Folders
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='events' icon={CalendarDaysIcon} iconOnly={iconOnly}>
                Events
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='system' icon={CircleStackIcon} iconOnly={iconOnly}>
                System
              </NavLink>
            </ListItem>
            <ListItem>
              {/* TODO: profile link to bottom as select */}
              <NavLink to='profile' icon={UserIcon} iconOnly={iconOnly}>
                Profile
              </NavLink>
            </ListItem>
          </>
        ) : null}
      </List>
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
  return (
    <Flex p={4}>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={<Icon as={Bars3Icon} w={6} h={6} />}
        colorScheme='gray'
        variant='ghost'
        aria-label='menu'
      />

      <Center flex={1}>
        <Heading fontSize='xl' lineHeight={1}>
          Page Title
        </Heading>
      </Center>

      {/* Empty box to center page title */}
      <Box display={{ base: 'flex', md: 'none' }} w={6} h={6} />
    </Flex>
  );
};

export { Dashboard };
export type { DashboardProps };
