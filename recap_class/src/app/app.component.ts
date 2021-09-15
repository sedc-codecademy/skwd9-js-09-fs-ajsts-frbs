import { Component } from '@angular/core';
import { Car } from './interfaces/car';
import { CarBrand } from './interfaces/car-brand';
import { Order } from './interfaces/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recap-class';
  carToDisplay: Car;
  displayCarFlag: boolean = false;
  cars: Car[] = [
    { id: 1, brand: CarBrand.DACIA, model: 'Sandero', rating: 0.807 },
    { id: 2, brand: CarBrand.VOLKSWAGEN, model: 'Golf', rating: 0.736 },
    { id: 3, brand: CarBrand.TOYOTA, model: 'Yaris', rating: 0.721 },
    { id: 4, brand: CarBrand.VOLKSWAGEN, model: 'Polo', rating: 0.594 },
    { id: 5, brand: CarBrand.VOLKSWAGEN, model: 'T-Roc', rating: 0.621 },
    { id: 6, brand: CarBrand.HYUNDAI, model: 'Tucson', rating: 0.643 },
    { id: 7, brand: CarBrand.VOLKSWAGEN, model: 'T-Cross', rating: 0.665 },
    { id: 8, brand: CarBrand.DACIA, model: 'Duster', rating: 0.696 },
  ];
  orders: Order[] = [
    {
      id: 1,
      car: this.cars[1],
      customer: 'Jon Doe',
      active: true,
      orderDate: new Date(),
      price: 79.99,
    },
    {
      id: 2,
      car: this.cars[3],
      customer: 'Jane Doe',
      active: false,
      orderDate: new Date(),
      price: 70.99,
    },
    {
      id: 3,
      car: this.cars[6],
      customer: 'Jolyne Smith',
      active: true,
      orderDate: new Date(),
      price: 50.0,
    },
    {
      id: 4,
      car: this.cars[7],
      customer: 'Tim Gibson',
      active: false,
      orderDate: new Date(),
      price: 49.99,
    },
    {
      id: 5,
      car: this.cars[2],
      customer: 'Alan Kowalski',
      active: true,
      orderDate: new Date(),
      price: 65.49,
    },
  ];
  displayCar(car: Car) {
    console.log('parent:', car);
    this.displayCarFlag = true;
    this.carToDisplay = car;
  }
}
