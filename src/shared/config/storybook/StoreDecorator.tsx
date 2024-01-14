import { StoryFn } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { profileReducer } from '@/entities/Profile';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addNewCommentReducer } from '@/features/addNewComment/model/slices/addNewCommentSlice';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
