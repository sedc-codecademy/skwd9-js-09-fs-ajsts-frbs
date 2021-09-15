import { CarBrand } from './car-brand';

export interface Car {
  id: number;
  brand: CarBrand;
  model: string;
  rating: number;
}
