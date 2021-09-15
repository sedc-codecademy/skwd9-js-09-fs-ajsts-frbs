import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
