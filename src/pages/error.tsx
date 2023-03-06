import { Button, Text, Title } from '@/components';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Title size={1}>{t('page.error.title')}</Title>
      <Text>{t('page.error.text')}</Text>

      <div className='mt-4'>
        <Button onClick={() => window.location.reload()}>
          {t('action.reload_site')}
        </Button>
      </div>
    </>
  );
};

export { ErrorPage };
