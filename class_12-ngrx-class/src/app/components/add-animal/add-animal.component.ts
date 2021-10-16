import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addAnimal, Animal } from 'src/app/store/animals/animals.actions';
import { AnimalState } from 'src/app/store/animals/animals.reducer';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
})
export class AddAnimalComponent implements OnInit {
  constructor(private store: Store<{ animals: AnimalState }>) {}

  addAnimal: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addAnimal = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      breed: new FormControl(''),
    });
  }

  submitForm() {
    const animal: Animal = {
      name: this.addAnimal.value.name,
      age: parseInt(this.addAnimal.value.age),
      breed: this.addAnimal.value.breed,
      id: `${Math.random().toString()}${this.addAnimal.value.name}`,
      isEditing: false,
    };

    console.log(animal);

    this.store.dispatch(addAnimal({ animal })); // It is same as ({animal: animal})
  }
}
