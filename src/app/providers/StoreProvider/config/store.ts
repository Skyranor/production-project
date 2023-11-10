import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
// import { counterReducer } from 'entities/Counter/model/slice/counterSlice';

import { counterReducer } from '../../../../entities/Counter/model/slice/counterSlice';
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setupStore(preloadedState?: PreloadedState<any>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: __IS_DEV__,
  });
}
