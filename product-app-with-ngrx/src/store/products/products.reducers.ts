import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/interfaces/products";
import {
  errorOccured,
  fetchedProductsSuccess,
  setProductToUpdate,
  updateProductsSuccess,
} from "./products.actions";

export interface ProductState {
  products: Product[];
  productToUpdate: Product;
  errMessage: string;
  //   isLoading: boolean;
}

export const initialState: ProductState = {
  products: [],
  productToUpdate: {} as Product,
  errMessage: "",
};

export const productReducer = createReducer(
  initialState,
  on(fetchedProductsSuccess, (state, { products }) => ({
    ...state,
    products, // products: products
    errMessage: "",
  })),
  on(setProductToUpdate, (state, { product }) => ({
    ...state,
    productToUpdate: product,
    errMessage: "",
  })),
  on(updateProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    productToUpdate: {} as Product,
    errMessage: "",
  })),
  on(errorOccured, (state, { err }) => ({
    ...state,
    productToUpdate: {} as Product,
    errMessage: err,
  }))
);
