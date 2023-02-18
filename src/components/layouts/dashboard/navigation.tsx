import { NavLink } from '@/components/elements';
import { List, ListItem } from '@chakra-ui/react';
import { FolderIcon, ShareIcon } from '@heroicons/react/20/solid';

const Navigation = () => {
  return (
    <List spacing={2} textAlign='center' w='full'>
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
    </List>
  );
};

export { Navigation };
