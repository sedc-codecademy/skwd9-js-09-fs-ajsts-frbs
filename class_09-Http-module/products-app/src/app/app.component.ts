import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'products-app';
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts();
  }
}
