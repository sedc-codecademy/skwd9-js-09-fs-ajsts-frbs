import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(userArray: Person[], filterValue: number): Person[] {
    const filteredUserArray: Person[] = [];
    if (userArray.length === 0) {
      return userArray;
    }
    userArray.forEach((person: Person) => {
      if (person.rating >= filterValue) {
        filteredUserArray.push(person);
      }
    });
    return filteredUserArray;
  }
}
