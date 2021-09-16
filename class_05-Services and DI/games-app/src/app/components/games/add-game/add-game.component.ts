import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggerService } from '../games/services/logging.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
})
export class AddGameComponent implements OnInit {
  //Here we inject the loggerService into the AddGame Component.
  constructor(private loggerService: LoggerService) {}
  ngOnInit(): void {}

  handleTextToSend(event: Event) {
    const textValue = (<HTMLInputElement>event.target).value;

    this.loggerService.logText(
      `Logging at add game component from service ${textValue}`
    );

    this.loggerService.handleTextToSend(textValue);
  }
}
