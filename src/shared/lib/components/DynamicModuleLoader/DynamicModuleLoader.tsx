import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { ReactElement, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

export type ReducerList = {
  [key in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  children: ReactElement;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { reducers, children, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
