import { ActionReducerMap } from "@ngrx/store";
import { productReducer, ProductState } from "./products/products.reducers";

export interface AppState {
  products: ProductState;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: productReducer,
};
