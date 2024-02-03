import { BugButton } from '@/app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from '@/entities/Counter';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/Page/Page';

const MainPage = () => (
  <Page className={classNames('main', { hover: true, selected: false }, ['one', 'two'])}>
    {/* <Counter />
    <BugButton /> */}
  </Page>
);

export default MainPage;
