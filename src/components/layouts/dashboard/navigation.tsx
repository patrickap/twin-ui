import { NavLink } from '@/components/elements';
import { RoleGuard } from '@/features/account';
import { List, ListItem } from '@chakra-ui/react';
import {
  CalendarDaysIcon,
  CircleStackIcon,
  FolderIcon,
  FolderPlusIcon,
  ShareIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';

const Navigation = () => {
  return (
    <List spacing={2} textAlign='center' w='full'>
      <RoleGuard roles={['USER']}>
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
      </RoleGuard>

      <RoleGuard roles={['ADMIN']}>
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
      </RoleGuard>
    </List>
  );
};

export { Navigation };
