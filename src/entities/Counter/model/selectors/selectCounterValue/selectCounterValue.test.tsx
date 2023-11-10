import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { selectCounterValue } from './selectCounterValue';

describe('selectCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(selectCounterValue(state as StateSchema)).toBe(10);
  });
});
