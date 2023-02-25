import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Title,
} from '@/components/elements';
import {
  CloudArrowDownIcon,
  CursorArrowRippleIcon,
  DocumentDuplicateIcon,
  PaperClipIcon,
  PencilSquareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline';

const FilesPage = () => {
  return (
    <>
      <Title size={2}>Files</Title>
      <Dropdown>
        <DropdownItem icon={<ViewfinderCircleIcon />}>View</DropdownItem>
        <DropdownItem icon={<PaperClipIcon />}>Share</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<CursorArrowRippleIcon />}>Move</DropdownItem>
        <DropdownItem icon={<PencilSquareIcon />}>Rename</DropdownItem>
        <DropdownItem icon={<DocumentDuplicateIcon />}>Duplicate</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<CloudArrowDownIcon />}>Download</DropdownItem>
        <DropdownItem icon={<TrashIcon className='text-red-500' />}>
          Delete
        </DropdownItem>
      </Dropdown>
    </>
  );
};

export { FilesPage };
