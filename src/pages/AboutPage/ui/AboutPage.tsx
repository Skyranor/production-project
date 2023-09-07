import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useTranslation();
  return <Link to='/'>выпав</Link>;
};

export default AboutPage;
