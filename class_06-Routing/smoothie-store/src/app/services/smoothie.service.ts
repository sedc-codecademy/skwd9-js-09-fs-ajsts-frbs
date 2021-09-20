import { Injectable } from '@angular/core';
import { Smoothie } from '../interfaces/smoothie';

@Injectable({
  providedIn: 'root', // Ok I am accessible everywhere in the app :)
})
export class SmoothieService {
  constructor() {}

  private smoothies: Smoothie[] = [
    {
      id: 1,
      name: 'Banana smoothie',
      description:
        'Very tasty banana and peanut butter smoothie to give you a boost!',
      price: 70,
      imageUrl:
        'https://www.wellplated.com/wp-content/uploads/2020/12/Peanut-Butter-Banana-Smoothie-recipe.jpg',
    },
    {
      id: 2,
      name: 'Forest fruits smoothie',
      description:
        'Wonderful combination of red forest fruits to give you the energy you need!',
      price: 100,
      imageUrl:
        'https://www.mummypages.co.uk/images/3309/165/8/0_14/smothie+2.JPG',
    },
    {
      id: 3,
      name: 'Green smoothie',
      description: 'The best combo of green vegetables and green apple juice!',
      price: 100,
      imageUrl:
        'https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg',
    },
  ];

  loadSmoothies() {
    return this.smoothies;
  }

  loadSmoothieById(id: string | number) {
    return this.smoothies.filter((smoothie) => smoothie.id === id);
  }

  editSmoothie(smoothieId: string | number, name: string, price: number) {
    let smoothieToBeUpdated = this.smoothies.find(
      (smoothie) => smoothie.id === smoothieId
    );

    const smoothiesRemaining = this.smoothies.filter(
      (smoothie) => smoothie.id !== smoothieId
    );

    if (!!smoothieToBeUpdated) {
      smoothieToBeUpdated = { ...smoothieToBeUpdated, name, price };
      this.smoothies = [...smoothiesRemaining, smoothieToBeUpdated];
    }
  }
}
