import { createAction, props } from '@ngrx/store';

// ACTION TYPE MUST NOT BE SAME NAME
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const setFirstName = createAction(
  '[Counter Component] Change first name',
  props<{ firstName: string }>()
);
// ACTIONS -> REDUCER
