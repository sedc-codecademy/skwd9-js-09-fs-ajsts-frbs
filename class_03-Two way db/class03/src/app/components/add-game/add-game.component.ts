import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  constructor() {}

  textToShow: string = 'Default text';
  ngOnInit(): void {}

  handleInputName(event: Event) {
    const target = (<HTMLInputElement>event.target).value;

    this.textToShow = target;
  }
}
