import {
  ButtonIcon,
  Dropdown,
  DropdownItem,
  Title,
} from '@/components/elements';
import {
  ChevronDoubleRightIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  ShareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const FilesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Title size={2}>Files</Title>
      <ButtonIcon onClick={() => setIsOpen(true)}>
        <EllipsisVerticalIcon className='h-5 w-5' />
      </ButtonIcon>
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
