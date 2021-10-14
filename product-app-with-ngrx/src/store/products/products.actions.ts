import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/products";

const FETCH_PRODUCTS = "[Products Component] Fetch Products";
const FETCHED_PRODUCTS_SUCCESS =
  "[Products Component] Fetched Products success";
const SET_PRODUCT_TO_UPDATE = "[Products Component] Set product to update";
const UPDATE_PRODUCT = "[Products Component] Update product";
const UPDATE_PRODUCTS_SUCCESS = "[Products Component] Update products success";
const ERROR_OCCURED = "[Products Component] Error happened";

export const fetchProducts = createAction(FETCH_PRODUCTS); // For triggering the fetching of products
export const fetchedProductsSuccess = createAction(
  // For storing the fetched products into our store
  FETCHED_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const setProductToUpdate = createAction(
  SET_PRODUCT_TO_UPDATE,
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  UPDATE_PRODUCT,
  props<{ id: number; product: Product }>()
);

export const updateProductsSuccess = createAction(
  UPDATE_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const errorOccured = createAction(
  ERROR_OCCURED,
  props<{ err: string }>()
);
