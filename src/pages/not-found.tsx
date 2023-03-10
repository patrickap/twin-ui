import { Text, Title } from '@/components';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Title order={1}>{t('page.not_found.title')}</Title>
      <Text>{t('page.not_found.text')}</Text>
    </>
  );
};

export { NotFoundPage };
