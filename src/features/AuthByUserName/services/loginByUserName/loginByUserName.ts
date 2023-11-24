import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, setAuthData } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  userName: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>('login/loginByUserName', async (authData, thunkAPI) => {
  try {
    const { data: user } = await axios.post(
      'http://localhost:8000/login',
      authData
    );
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
    thunkAPI.dispatch(setAuthData(user));

    if (!user) {
      throw new Error();
    }

    return user;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('Введен неверный логин или пароль');
  }
});
