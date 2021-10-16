import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css'],
})
export class ProductPanelComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  productSubscription: Subscription;
  products: Product[];

  ngOnInit(): void {
    this.productSubscription = this.dataService.productDataSubject$.subscribe(
      (payload: Product[]) => {
        this.products = payload;
      }
    );
    this.dataService.getAllProducts();
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  displayCurrentProduct(product: Product) {
    const dialogRef = this.dialog.open(ProductCardComponent, {
      width: '475px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((payload) => {
      console.log('Dialog closed. Payload here: ', payload);
    });
  }
}
