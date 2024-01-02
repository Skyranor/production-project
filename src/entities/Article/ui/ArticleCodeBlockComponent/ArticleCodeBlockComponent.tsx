import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { block } = props;
  return <Code code={block.code} />;
};
