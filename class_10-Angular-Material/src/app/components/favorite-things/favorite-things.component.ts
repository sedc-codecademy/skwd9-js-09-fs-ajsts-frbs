import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-favorite-things',
  templateUrl: './favorite-things.component.html',
  styleUrls: ['./favorite-things.component.css'],
})
export class FavoriteThingsComponent implements OnInit {
  constructor() {}

  favoriteThings: string[] = ['Games'];
  chipsSelectable: boolean = true;
  chipsRemovable: boolean = true;

  chipsForm: FormGroup;

  ngOnInit(): void {
  }

  onRemoveThing(favoriteThing: string) {
    const index = this.favoriteThings.indexOf(favoriteThing);
    if (index >= 0) {
      this.favoriteThings.splice(index, 1);
    }
  }
  addNewThing(event: MatChipInputEvent) {
    const value = event.value;
    if (value) {
      this.favoriteThings.push(value);
    }
  }
}
