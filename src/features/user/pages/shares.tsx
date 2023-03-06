import { Title } from '@/components/elements';
import { useTranslation } from 'react-i18next';

const SharesPage = () => {
  const { t } = useTranslation('user');

  return <Title size={2}>{t('page.shares.title')}</Title>;
};

export { SharesPage };
