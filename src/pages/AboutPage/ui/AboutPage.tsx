import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useTranslation(['about']);
  return <Link to='/'>{t('Главная страница')}</Link>;
};

export default AboutPage;
