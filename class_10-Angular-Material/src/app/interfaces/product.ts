interface Rating {
  rate: string | number;
  count: string | number;
}

export interface Product {
  id: number | string;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
