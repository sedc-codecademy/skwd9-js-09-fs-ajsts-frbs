import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";
import { ProductState } from "./products.reducers";

export const selectFeature = (state: AppState) => state.products;

export const getProducts = createSelector(
  selectFeature,
  (state: ProductState) => state.products
);

export const selectProductToUpdate = createSelector(
  selectFeature,
  (state: ProductState) => state.productToUpdate
);

//SELECTOR THAT ACCEPTS A PROPERTY
export const selectProductToUpdateWithId = (props: { id: number }) =>
  createSelector(selectFeature, ({ products }) => {
    console.log(`Product selected id ${[props.id]}`);
    return products.filter((product) => product.id === props.id);
  });
