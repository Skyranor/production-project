import { Link } from 'react-router-dom';
import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage = () => {
  return (
    <div>
      {/* <Link to='/about'>MainPage</Link> */}
      <div className={classNames('main', { hover: true, selected: false }, ['one', 'two'])}>Main</div>
    </div>
  );
};

export default MainPage;
