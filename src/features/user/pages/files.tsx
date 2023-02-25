import { Dropdown, DropdownItem, Title } from '@/components/elements';
import {
  ChevronDoubleRightIcon,
  PencilSquareIcon,
  ShareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline';

const FilesPage = () => {
  return (
    <>
      <Title size={2}>Files</Title>
      <Dropdown>
        <DropdownItem icon={<ViewfinderCircleIcon />}>Preview</DropdownItem>
        <DropdownItem icon={<ShareIcon />}>Share</DropdownItem>
        <DropdownItem icon={<ChevronDoubleRightIcon />}>Move</DropdownItem>
        <DropdownItem icon={<PencilSquareIcon />}>Rename</DropdownItem>
        <DropdownItem icon={<TrashIcon className='text-red-500' />}>
          Delete
        </DropdownItem>
      </Dropdown>
    </>
  );
};

export { FilesPage };
