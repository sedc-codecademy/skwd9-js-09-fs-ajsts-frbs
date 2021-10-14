import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  switchMap,
  map,
  withLatestFrom,
  tap,
  catchError,
} from "rxjs/operators";
import { Product } from "src/app/interfaces/products";
import { ProductsService } from "src/app/services/products.service";
import { AppState } from "../app.reducer";
import {
  errorOccured,
  fetchedProductsSuccess,
  fetchProducts,
  updateProduct,
  updateProductsSuccess,
} from "./products.actions";
import { getProducts } from "./products.selectors";
@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchProducts),
      switchMap(() => {
        return this.productsService.getProducts();
      }),
      map((products) => {
        return fetchedProductsSuccess({ products }); // It is the same as passing products: products
      })
    );
  });
  // how we get current state of the store => solved
  // can we use async await syntax => solved
  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProduct),
      withLatestFrom(this.store.select(getProducts)),
      switchMap(async ([{ id, product }, products]) => {
        await this.productsService.updateProduct(id, product);
        return of({ products, product });
      }),
      switchMap((products) => products),
      map(({ product, products }) => {
        // const copyOfProductsArray1 = products //points on same reference in memory
        const copyOfProductsArray = [...products]; //creates copy of products on different place in memory

        const productsToUpdate = this.handleUpdatedProduct(
          product,
          copyOfProductsArray
        );

        return updateProductsSuccess({ products: productsToUpdate });
      }),
      tap(() => this.router.navigate(["products"])),
      catchError((err) => {
        console.log(err.message);
        // dispatch action that will hold the error msg
        return of(errorOccured({ err }));
        // here we can call loggers that tracks our errors
      })
    );
  });

  private handleUpdatedProduct(product: Product, products: Product[]) {
    const productIdFetched =
      typeof product.id === "string" ? parseInt(product.id) : product.id;

    const indexOfProduct = products.findIndex(
      ({ id }) => id === productIdFetched
    );

    products[indexOfProduct] = { ...product, id: productIdFetched };

    return products;
  }
}
