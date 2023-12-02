import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';

import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage = () => (
  <div className={classNames('main', { hover: true, selected: false }, ['one', 'two'])}>
    {/* <Counter />
    <BugButton /> */}
  </div>
);

export default MainPage;
