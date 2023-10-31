import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage = () => (
  <div>
    <div
      className={classNames('main', { hover: true, selected: false }, [
        'one',
        'two',
      ])}
    />
  </div>
);

export default MainPage;
