import { on, createReducer } from '@ngrx/store';
import {
  addAnimal,
  Animal,
  editAnimalSuccess,
  setAnimalToEdit,
} from './animals.actions';

export interface AnimalState {
  animals: Animal[];
}

export const initialState: AnimalState = {
  animals: [
    { id: '1', name: 'Bubi', age: 8, breed: 'dog', isEditing: false },
    { id: '2', name: 'Milka', age: 8, breed: 'cow', isEditing: false },
  ],
};

export const animalReducer = createReducer(
  initialState,
  on(addAnimal, (state, { animal }) => ({
    ...state,
    animals: [...state.animals, animal],
  })),
  on(setAnimalToEdit, (state, { id }) => {
    const filteredAnimals = state.animals.map((animal) => {
      if (animal.id === id) {
        return { ...animal, isEditing: true };
      }
      return { ...animal, isEditing: false };
    });
    return {
      ...state,
      animals: filteredAnimals,
    };
  }),
  on(editAnimalSuccess, (state, { animal }) => {
    const filteredAnimals = [...state.animals];

    const indexOfAnimalToEdit = filteredAnimals.findIndex(
      (animalToEdit) => animalToEdit.id === animal.id
    );

    filteredAnimals.splice(indexOfAnimalToEdit, 1, animal);

    return {
      ...state,
      animals: filteredAnimals,
    };
  })
);
