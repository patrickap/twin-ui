import { NavLink } from '@/components/elements';
import { List, ListItem, useBreakpointValue } from '@chakra-ui/react';
import { FolderIcon, ShareIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const isIconOnly = useBreakpointValue({ base: true, md: true, xl: false });

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
