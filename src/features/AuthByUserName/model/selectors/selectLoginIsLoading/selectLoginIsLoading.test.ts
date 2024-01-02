import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginIsLoading } from './selectLoginIsLoading';

describe('selectLoginIsLoading', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(selectLoginIsLoading(state as StateSchema)).toBe(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
