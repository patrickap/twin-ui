import { Title } from '@/components';
import { useTranslation } from 'react-i18next';

const SharesPage = () => {
  const { t } = useTranslation('user');

  return <Title order={2}>{t('page.shares.title')}</Title>;
};

export { SharesPage };
