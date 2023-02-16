import { NavLink } from '@/components/elements';
import { userQuery } from '@/features/account';
import { List, ListItem, useBreakpointValue } from '@chakra-ui/react';
import {
  CalendarDaysIcon,
  CircleStackIcon,
  FolderIcon,
  FolderPlusIcon,
  ShareIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';

const Navigation = () => {
  const user = useQuery(userQuery());
  const isIconOnly = useBreakpointValue({ base: true, md: true, xl: false });

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
        .filter((item) => user?.data?.role === item.role)
        .map(({ to, icon, label }, i) => {
          return (
            <ListItem key={to + i}>
              <NavLink to={to} icon={icon} isIconOnly={isIconOnly}>
                {label}
              </NavLink>
            </ListItem>
          );
        })}
    </List>
  );
};

export { Navigation };
