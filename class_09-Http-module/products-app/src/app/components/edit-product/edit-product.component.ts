import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  productToUpdate: Product = {} as Product;
  editProductForm: FormGroup;

  ngOnInit(): void {
    this.productToUpdate = this.productsService.getProductToUpdate();
    console.log(this.productToUpdate);
    this.initForm(this.productToUpdate);
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

    this.productsService.updateProduct(
      productToBeUpdated.id,
      productToBeUpdated
    );
  }
}
