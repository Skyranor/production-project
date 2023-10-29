import { Link } from 'react-router-dom';

import { classNames } from '../../helpers/classNames/classNames';

export const MainPage = () => (
    <div>
      <Link to='/about'>MainPage</Link>
      <div className={classNames('main', { hover: true, selected: false }, ['one', 'two'])}>Main</div>
    </div>
  );
