import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddNewComment.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectAddNewCommentError, selectAddNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { addNewCommentReducer, setCommentText } from '../../model/slices/addNewCommentSlice';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment = (props: AddNewCommentProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useAppSelector(selectAddNewCommentText);
  const error = useAppSelector(selectAddNewCommentError);

  const handleChangeComment = (value: string) => {
    dispatch(setCommentText(value));
  };

  const onSendCommentHandler = () => {
    onSendComment(text || '');
    dispatch(setCommentText(''));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddNewComment, {}, [className])}>
        <Input className={cls.input} placeholder={t('Enter comment')} value={text} onChange={handleChangeComment} />
        <Button theme='outline' onClick={onSendCommentHandler}>
          {t('Add comment')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddNewComment;
