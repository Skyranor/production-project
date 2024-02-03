import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Page } from '@/shared/ui/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation(['about']);
  return (
    <Page>
      <Link to='/'>{t('Главная страница')}</Link>
    </Page>
  );
};

export default AboutPage;
