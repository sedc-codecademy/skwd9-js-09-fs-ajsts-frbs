import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  Animal,
  editAnimalSuccess,
  setAnimalToEdit,
} from 'src/app/store/animals/animals.actions';
import { AnimalState } from 'src/app/store/animals/animals.reducer';
import {
  editingAnimal,
  selectAnimals,
  selectDogs,
} from 'src/app/store/animals/animals.selectors';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  animals: Animal[] = [];
  dogs: Animal[] = [];
  animalToEdit: Animal;
  editAnimalForm: FormGroup;

  ngOnInit(): void {
    this.store
      .select(selectAnimals)
      .subscribe(
        ({ animals }) => (console.log(animals), (this.animals = animals))
      );

    this.store.select(selectDogs).subscribe((dogs) => (this.dogs = dogs));

    this.store
      .select(editingAnimal)
      .subscribe(
        (animal) => (
          (this.animalToEdit = animal), this.initForm(animal || ({} as Animal))
        )
      );
  }

  handleOnlyDogs(animals: Animal[]) {
    return animals.filter((animal) => animal.breed === 'dog');
  }

  editAnimal(id: string) {
    this.store.dispatch(setAnimalToEdit({ id }));
  }

  submitForm() {
    console.log('submit form');

    const animal: Animal = {
      ...this.animalToEdit,
      name: this.editAnimalForm.value.name,
      breed: this.editAnimalForm.value.breed,
      isEditing: false,
    };

    this.store.dispatch(editAnimalSuccess({ animal: animal }));
  }

  initForm(animal: Animal) {
    console.log(animal);
    this.editAnimalForm = new FormGroup({
      name: new FormControl(animal.name),
      breed: new FormControl(animal.breed),
    });
  }
}
