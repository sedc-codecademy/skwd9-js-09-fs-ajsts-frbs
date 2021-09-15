import { Car } from './car';

export interface Order {
  id: number;
  car: Car;
  customer: string;
  active: boolean;
  orderDate: Date;
  price: number;
}
