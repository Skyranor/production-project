import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/shared/const/common';
import { selectProfile } from './selectProfile';

describe('selectProfile', () => {
  it('should return profile data', () => {
    const data = {
      userName: 'admin',
      age: 22,
      country: Country.Russia,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(selectProfile(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfile(state as StateSchema)).toEqual(undefined);
  });
});
