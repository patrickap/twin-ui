import { Container, HStack, Stack } from '@chakra-ui/react';
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
import { ReactElement } from 'react';
import { NavLink } from '../components';
import { userQuery } from '../constants/queries';

type DashboardProps = {
  children?: ReactElement | ReactElement[];
};

// TODO: create layout
const Dashboard = ({ children }: DashboardProps) => {
  // TODO: implement queries / mutations
  const user = useQuery(userQuery('1'));
  const isUser = user.data?.role === 'user';
  const isAdmin = user.data?.role === 'admin';

  return (
    <HStack h='100vh' spacing={0}>
      <Stack
        w={{ base: '0px', lg: '76px', xl: '256px' }}
        h='100%'
        px={4}
        py={8}
        bg='gray.100'
      >
        {isUser ? (
          <>
            {' '}
            <NavLink to='files' icon={FolderIcon}>
              Files
            </NavLink>
            <NavLink to='shares' icon={ShareIcon}>
              Shares
            </NavLink>
            {/* TODO: profile link to bottom as select */}
            <NavLink to='profile' icon={UserIcon}>
              Profile
            </NavLink>
          </>
        ) : null}

        {isAdmin ? (
          <>
            <NavLink to='users' icon={UsersIcon}>
              Users
            </NavLink>
            <NavLink to='groups' icon={UserGroupIcon}>
              Groups
            </NavLink>
            <NavLink to='folders' icon={FolderPlusIcon}>
              Folders
            </NavLink>
            <NavLink to='events' icon={CalendarDaysIcon}>
              Events
            </NavLink>
            <NavLink to='system' icon={CircleStackIcon}>
              System
            </NavLink>
            {/* TODO: profile link to bottom as select */}
            <NavLink to='profile' icon={UserIcon}>
              Profile
            </NavLink>
          </>
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
