import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { CounterState } from './counter.reducers';

export const selectFeature = (state: AppState) => state.counter;

export const selectCounter = createSelector(
  selectFeature,
  (state: CounterState) => state
);
