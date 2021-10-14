import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "src/app/interfaces/products";
import { ProductsService } from "src/app/services/products.service";
import { AppState } from "src/store/app.reducer";
import { getProducts } from "src/store/products/products.selectors";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.store
      .select(getProducts)
      .subscribe((products) => (this.products = products));
  }

  setProductToBeUpdated(id: string | number) {
    const productToBeUpdated = this.products.find(
      (product) => product.id === id
    );

    if (!!productToBeUpdated) {
      this.productsService.setProductToUpdate(productToBeUpdated);
    }
  }
}
