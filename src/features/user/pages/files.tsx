import { Dropdown, DropdownDivider, DropdownItem, Title } from '@/components';
import {
  CloudArrowDownIcon,
  CursorArrowRippleIcon,
  DocumentDuplicateIcon,
  PaperClipIcon,
  PencilSquareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const FilesPage = () => {
  const { t } = useTranslation('user');

  return (
    <>
      <Title size={2}>{t('page.files.title')}</Title>
      <Dropdown align='start' side='bottom'>
        <DropdownItem icon={<ViewfinderCircleIcon />}>
          {t('action.view')}
        </DropdownItem>
        <DropdownItem icon={<PaperClipIcon />}>
          {t('action.share')}
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<CursorArrowRippleIcon />}>
          {t('action.move')}
        </DropdownItem>
        <DropdownItem icon={<PencilSquareIcon />}>
          {t('action.rename')}
        </DropdownItem>
        <DropdownItem icon={<DocumentDuplicateIcon />}>
          {t('action.duplicate')}
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<CloudArrowDownIcon />}>
          {t('action.download')}
        </DropdownItem>
        <DropdownItem icon={<TrashIcon className='text-red-500' />}>
          {t('action.delete')}
        </DropdownItem>
      </Dropdown>
    </>
  );
};

export { FilesPage };
