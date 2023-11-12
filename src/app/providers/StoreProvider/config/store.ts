import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';

// import { counterReducer } from 'entities/Counter/model/slice/counterSlice';

import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';
// Create the root reducer independently to obtain the RootState type

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
