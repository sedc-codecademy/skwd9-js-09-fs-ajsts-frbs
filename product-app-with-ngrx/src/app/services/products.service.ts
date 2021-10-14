import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppState } from "src/store/app.reducer";
import { setProductToUpdate } from "src/store/products/products.actions";
import { Product } from "../interfaces/products";
import { ProductsRepositoryService } from "./products-repository.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepositoryService,
    private store: Store<AppState>
  ) {}

  getProducts() {
    return this.productsRepository.fetchProducts();
  }

  setProductToUpdate(product: Product) {
    this.store.dispatch(setProductToUpdate({ product })); // product: product
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    // we will create effect for update product, we have to return the result from here
    return this.productsRepository.updateProduct(id, product).toPromise();
  }

  //METHOD THAT CALLS THE PRODUCTS REPOSITORY TO MAKE THE DELETE API CALL
  async removeProduct(id: string | number): Promise<Product> {
    return await this.productsRepository.deleteProduct(id).toPromise();
  }
}
