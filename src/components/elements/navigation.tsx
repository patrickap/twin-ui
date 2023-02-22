import { NavItem } from '@/components/elements';
import { List, ListItem } from '@chakra-ui/react';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';

type NavigationProps = {
  isIconOnly?: boolean;
  onNavigate?: () => void;
};

const Navigation = ({ isIconOnly, onNavigate }: NavigationProps) => {
  return (
    <List spacing={0} textAlign='center' w='full' onClick={onNavigate}>
      <ListItem>
        <NavItem to='/dashboard/files' icon={<FolderIcon />}>
          Files
        </NavItem>
      </ListItem>
      <ListItem>
        <NavItem to='/dashboard/shares' icon={<ShareIcon />}>
          Shares
        </NavItem>
      </ListItem>
    </List>
  );
};

export { Navigation };
