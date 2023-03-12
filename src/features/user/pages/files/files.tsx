import { Title } from '@/components';
import { useTranslation } from 'react-i18next';
import { Actions } from './components';

const FilesPage = () => {
  const { t } = useTranslation('user');

  return (
    <>
      <Title order={2}>{t('page.files.title')}</Title>
      <Actions />
    </>
  );
};

export { FilesPage };
