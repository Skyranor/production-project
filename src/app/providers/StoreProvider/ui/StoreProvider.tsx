import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '../config/StateSchema';
import { setupStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const store = setupStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};
