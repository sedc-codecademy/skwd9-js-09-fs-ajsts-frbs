import { ActionReducerMap } from '@ngrx/store';
import { animalReducer, AnimalState } from './animals/animals.reducer';
import { counterReducer, CounterState } from './counter/counter.reducers';

export interface AppState {
  counter: CounterState;
  animals: AnimalState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counter: counterReducer,
  animals: animalReducer,
};
