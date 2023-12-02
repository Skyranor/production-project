import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StateSchema } from '../config/StateSchema';
import { setupStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const navigate = useNavigate();

  const store = setupStore(initialState as StateSchema, navigate);
  return <Provider store={store}>{children}</Provider>;
};
