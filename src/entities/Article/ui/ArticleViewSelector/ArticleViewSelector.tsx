import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../model/types/article';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: 'LIST',
    icon: ListIcon,
  },
  {
    view: 'GRID',
    icon: GridIcon,
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };
  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((type) => (
        <Button theme='clear' key={type.view} onClick={onClick(type.view as ArticleView)}>
          <Icon Svg={type.icon} className={classNames('', { [cls.selected]: view === type.view })} />
        </Button>
      ))}
    </div>
  );
};
