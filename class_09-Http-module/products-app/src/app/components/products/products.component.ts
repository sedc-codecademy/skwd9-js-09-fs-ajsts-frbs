import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.$products.subscribe(
      (fetchedProducts) => (
        console.log(fetchedProducts), (this.products = fetchedProducts)
      )
    );
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
