import { NavLink } from '@/components/elements';
import { List, ListItem } from '@chakra-ui/react';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';

type NavigationProps = {
  isIconOnly?: boolean;
};

const Navigation = ({ isIconOnly }: NavigationProps) => {
  return (
    <List spacing={2} textAlign='center' w='full'>
      <ListItem>
        <NavLink to='files' icon={FolderIcon} isIconOnly={isIconOnly}>
          Files
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='shares' icon={ShareIcon} isIconOnly={isIconOnly}>
          Shares
        </NavLink>
      </ListItem>
    </List>
  );
};

export { Navigation };
