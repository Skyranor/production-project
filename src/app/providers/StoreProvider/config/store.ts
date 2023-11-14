import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

import { StateSchema } from './StateSchema';

const rootReducer = combineReducers<StateSchema>({
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setupStore(preloadedState?: PreloadedState<any>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: __IS_DEV__,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
