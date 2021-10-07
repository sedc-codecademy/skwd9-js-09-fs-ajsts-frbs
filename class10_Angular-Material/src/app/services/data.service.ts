import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Credentials } from '../interfaces/credentials';
import { Product } from '../interfaces/product';

import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient, private snackbar: MatSnackBar) {}

  productDataSubject$: Subject<Product[]> = new Subject<Product[]>();

  getAllProducts() {
    this._http
      .get('https://fakestoreapi.com/products/')
      .pipe(map((products) => products as Product[]))
      .subscribe((products: Product[]) => {
        this.productDataSubject$.next(products);
      });
  }

  createNewUser(user: Credentials) {
    console.log(user);
    this.snackbar.open("User created!", "Dismiss!");
  }
}
