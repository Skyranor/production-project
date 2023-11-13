import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';

import { StateSchema } from './StateSchema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setupStore(preloadedState?: PreloadedState<any>) {
  const rootReducer = combineReducers<StateSchema>({
    counter: counterReducer,
    user: userReducer,
  });

  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: __IS_DEV__,
  });
}
