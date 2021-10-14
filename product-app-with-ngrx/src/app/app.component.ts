import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.reducer";
import { fetchProducts } from "src/store/products/products.actions";
import { getProducts } from "src/store/products/products.selectors";
import { ProductsService } from "./services/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "products-app";
  constructor(
    private productService: ProductsService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(fetchProducts());
    this.store
      .select(getProducts)
      .subscribe((products) => console.log("Products from store", products));
  }
}
