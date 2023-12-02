import { StateSchema } from 'app/providers/StoreProvider';

import { selectLoginUserName } from './selectLoginUserName';

describe('selectLoginUserName', () => {
  it('should return userName', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        userName: 'admin',
      },
    };
    expect(selectLoginUserName(state as StateSchema)).toBe('admin');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginUserName(state as StateSchema)).toBe('');
  });
});
