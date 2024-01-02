import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, setAuthData } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUserNameProps {
  userName: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const { data: user } = await extra.api.post<User>('/login', authData);
      // thunkAPI.extra
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(setAuthData(user));

      extra.navigate?.('/about');

      if (!user) {
        throw new Error();
      }

      return user;
    } catch (error) {
      return rejectWithValue('Введен неверный логин или пароль');
    }
  }
);
