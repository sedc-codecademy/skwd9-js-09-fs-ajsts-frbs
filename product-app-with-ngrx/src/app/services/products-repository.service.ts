import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../interfaces/products";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ProductsRepositoryService {
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http
      .get("https://fakestoreapi.com/products")
      .pipe(map((products) => products as Product[]));
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http
      .put(`https://fakestoreapi.com/products/${id}`, product)
      .pipe(map((product) => product as Product));
  }

  // METHOD TO MAKE THE DELETE API CALL
  deleteProduct(id: string | number) {
    return this.http
      .delete(`https://fakestoreapi.com/products/${id}`)
      .pipe(map((products) => products as Product));
  }
}
