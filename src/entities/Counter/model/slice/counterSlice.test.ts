import { counterReducer, decrement } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('CounterSlice', () => {
  it('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, decrement())).toEqual({
      value: 9,
    });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, decrement())).toEqual({
      value: -1,
    });
  });
});
