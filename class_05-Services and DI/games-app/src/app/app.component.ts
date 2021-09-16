import { Component, OnInit } from '@angular/core';
import { LoggerService } from './components/games/games/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}
  title = 'games-app';
  passedText: string = '';
  namesFromService: string[];

  handleTextRecivedFinally(text: string) {
    this.loggerService.logText(`logging from service at app component ${text}`);
  }

  ngOnInit() {
    //Here with the subscribe we consume the every new added value to the textToSend event emmiter :) .
    //Whenever a new value arives in textToSend, with the help of the subscribe we consume it and we can use it however we want.
    this.loggerService.textToSend.subscribe((text) => (this.passedText = text));
    this.namesFromService = this.loggerService.getNames();
    console.log(this.namesFromService);
  }
}
