import { ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { ProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';
import { AddNewCommentSchema } from '@/features/addNewComment';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addNewComment?: AddNewCommentSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
