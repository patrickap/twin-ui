import {
  Container,
  HStack,
  List,
  ListItem,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import {
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
import { NavLink } from '../components';
import { userQuery } from '../constants/queries';

type DashboardProps = {
  children?: ReactNode;
};

// TODO: create layout
const Dashboard = ({ children }: DashboardProps) => {
  // TODO: implement queries / mutations
  const user = useQuery(userQuery('1'));
  const isUser = user.data?.role === 'user';
  const isAdmin = user.data?.role === 'admin';
  const sideBackground = useColorModeValue('gray.100', 'gray.800');

  return (
    <HStack h='100vh' spacing={0}>
      <Stack
        w={{ base: '0px', lg: '76px', xl: '256px' }}
        h='100%'
        px={4}
        py={8}
        bg={sideBackground}
      >
        {isUser ? (
          <List>
            <ListItem>
              <NavLink to='files' icon={FolderIcon}>
                Files
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='shares' icon={ShareIcon}>
                Shares
              </NavLink>
            </ListItem>
            <ListItem>
              {/* TODO: profile link to bottom as select */}
              <NavLink to='profile' icon={UserIcon}>
                Profile
              </NavLink>
            </ListItem>
          </List>
        ) : null}

        {isAdmin ? (
          <List>
            <ListItem>
              <NavLink to='users' icon={UsersIcon}>
                Users
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='groups' icon={UserGroupIcon}>
                Groups
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='folders' icon={FolderPlusIcon}>
                Folders
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='events' icon={CalendarDaysIcon}>
                Events
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='system' icon={CircleStackIcon}>
                System
              </NavLink>
            </ListItem>
            <ListItem>
              {/* TODO: profile link to bottom as select */}
              <NavLink to='profile' icon={UserIcon}>
                Profile
              </NavLink>
            </ListItem>
          </List>
        ) : null}
      </Stack>
      <Stack flexGrow={1} h='100%'>
        <Container>
          <div>
            Main
            <br />
            {children}
          </div>
        </Container>
      </Stack>
    </HStack>
  );
};

export { Dashboard };
export type { DashboardProps };
