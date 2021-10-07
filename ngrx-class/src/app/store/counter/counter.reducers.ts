import { on, createReducer } from '@ngrx/store';
import { decrement, increment, setFirstName } from './counter.actions';

export interface CounterState {
  counter: number;
  name: string;
}

export const initialState: CounterState = {
  counter: 0,
  name: 'John Doe',
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => {
    if (state.counter > 0) {
      return { ...state, counter: state.counter - 1 };
    }
    return state;
  }),
  on(setFirstName, (state, { firstName }) => {
    if (firstName.length === 0) {
      return state;
    } else {
      return { ...state, name: firstName };
    }
  })
);
