import { Component, Input, OnInit } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css'],
})
export class SingleGameComponent implements OnInit {
  constructor() {}

  @Input('data') referenceOfTheSibling: GamesComponent;

  ngOnInit(): void {
    console.log('reference of sibling ', this.referenceOfTheSibling);
  }

  uniqueTitle = 'Single Game Component';

  printRandomText() {
    console.log('Hello from Single Game Component mon ami');
  }
}
