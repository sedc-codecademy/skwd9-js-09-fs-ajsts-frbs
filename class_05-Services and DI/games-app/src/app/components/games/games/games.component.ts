import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggerService } from './services/logging.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  //providers: [LoggerService] If we provide the LoggerService here it will be accessible only in the components that are children to the Games Component but not the parents.
})
export class GamesComponent implements OnInit {
  // This is dependency injection, we inject the LoggerService into the constructor of the component and use it :)
  constructor(private loggerService: LoggerService) {}

  //loggerService = new LoggerService(); Wrong way do not do this

  ngOnInit(): void {}

  handleTextRecieved(text: string) {
    //this.loggerService.logText(`Logging in games comp from service ${text}`); // Wrong way
    this.loggerService.logText(`Logging in games comp from service ${text}`);
  }
}
