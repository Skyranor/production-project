import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
  it('should return login error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(selectLoginError(state as StateSchema)).toBe('error');
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginError(state as StateSchema)).toBeNull();
  });
});
