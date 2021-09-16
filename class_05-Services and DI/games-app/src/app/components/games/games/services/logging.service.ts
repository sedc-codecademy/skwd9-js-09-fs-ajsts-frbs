import { EventEmitter, Injectable } from '@angular/core';
import { TimeLogger } from '../../services/time-logger.ts.service';

//Injectable decorator is not necessery in order we to create service, but Angular dev team asks as to :).
//Injectable means that other services can be injected into this service, like we do in the constructor here,
// we inject the timeService into the LoggerService :)

@Injectable()
export class LoggerService {
  //In order to pass something from the add-game component directly to the parent we create EventEmmiter :)
  //With the method handleTextToSend we emit the event triggered from the add-game component :)
  //And in the app component we consume it with subsribe.
  textToSend = new EventEmitter<string>();

  constructor(private timeService: TimeLogger) {}
  private names: string[] = ['Bob', 'John Doe', 'Bob bobski', 'George', 'Ivan'];

  logText(text: string) {
    console.log(text);
  }

  handleTextToSend(textToSend: string) {
    this.timeService.logTime();
    this.textToSend.emit(textToSend);
  }

  getNames() {
    return this.names;
  }
}
