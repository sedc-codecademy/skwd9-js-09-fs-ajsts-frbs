import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  @Input() boundOrder: Order;
  @Output() ngDisplayCar = new EventEmitter<Car>();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.boundOrder);
  }

  displayCar(car: Car) {
    // console.log(car);
    this.ngDisplayCar.emit(car);
  }
}
