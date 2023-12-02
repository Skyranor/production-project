import axios from 'axios';
// eslint-disable-next-line
import { StateSchema } from 'app/providers/StoreProvider';
// eslint-disable-next-line
import { Dispatch } from '@reduxjs/toolkit';
import { setAuthData } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUserName } from './loginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);
describe('loginByUserName', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  it('success login', async () => {
    const userValue = {
      userName: 'admin',
      id: 2,
    };

    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: userValue,
      })
    );
    const result = await thunk.callThunk({ userName: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  it('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ userName: 'admin', password: '123' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Введен неверный логин или пароль');
  });

  // it('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUserName({ userName: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //   // console.log(result);
  //   // expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('Введен неверный логин или пароль');
  // });
});
