import { createAction, props } from '@ngrx/store';

export interface Animal {
  id: string;
  name: string;
  breed: string;
  age: number;
  isEditing: boolean;
}

export const addAnimal = createAction(
  '[Animal Component] Add Animal',
  props<{ animal: Animal }>()
);

export const setAnimalToEdit = createAction(
  '[Animal Component] Edit Animal',
  props<{ id: string }>()
);

export const editAnimalSuccess = createAction(
  '[Animal Component] Edit Animal Success',
  props<{ animal: Animal }>()
);
