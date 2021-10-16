import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { AnimalState } from './animals.reducer';

export const selectFeature = (state: AppState) => state.animals;

export const selectAnimals = createSelector(
  selectFeature,
  (state: AnimalState) => state
);

export const selectDogs = createSelector(selectFeature, (state: AnimalState) =>
  state.animals.filter((animal) => animal.breed === 'dog')
);

export const editingAnimal = createSelector(
  selectFeature,
  (state: AnimalState) => state.animals.filter((animal) => animal.isEditing)[0]
);
