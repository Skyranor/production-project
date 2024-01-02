/* eslint-disable i18next/no-literal-string */

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button/Button';
import { decrement, increment } from '../model/slice/counterSlice';
import { selectCounterValue } from '../model/selectors/selectCounterValue/selectCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounterValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{count}</h1>
      <Button data-testid='increment-btn' onClick={handleIncrement}>
        increment
      </Button>
      <Button data-testid='decrement-btn' onClick={handleDecrement}>
        decrement
      </Button>
    </div>
  );
};
