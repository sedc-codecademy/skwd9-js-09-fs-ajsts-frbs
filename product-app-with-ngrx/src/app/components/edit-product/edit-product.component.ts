import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Product } from "src/app/interfaces/products";
import { ProductsService } from "src/app/services/products.service";
import { AppState } from "src/store/app.reducer";
import { updateProduct } from "src/store/products/products.actions";
import {
  selectProductToUpdate,
  selectProductToUpdateWithId,
} from "src/store/products/products.selectors";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  productToUpdate: Product = {} as Product;
  editProductForm: FormGroup;

  ngOnInit(): void {
    this.store
      .select(selectProductToUpdate)
      .subscribe((product) => (this.productToUpdate = product));

    console.log("Product to update from store", this.productToUpdate);
    this.initForm(this.productToUpdate);

    //WE USE THE SELECTOR AND PASS ARGUMENT ID
    this.store
      .select(selectProductToUpdateWithId({ id: this.productToUpdate.id }))
      .subscribe((product) =>
        console.log("Product selected to update with id: ", product)
      );
  }

  initForm(product: Product) {
    this.editProductForm = new FormGroup({
      name: new FormControl(product.title),
      description: new FormControl(product.description),
    });
  }

  submitForm() {
    const productToBeUpdated: Product = {
      ...this.productToUpdate,
      title: this.editProductForm.value.name,
      description: this.editProductForm.value.description,
    };

    console.log(productToBeUpdated);

    this.store.dispatch(
      updateProduct({ id: productToBeUpdated.id, product: productToBeUpdated })
    );
  }
}
