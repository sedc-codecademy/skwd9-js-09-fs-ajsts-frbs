import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Property providedIn: root means that this service is accessible everywhere in our app.
})
export class TimeLogger {
  constructor() {}

  logTime() {
    console.log(new Date().toLocaleTimeString());
  }
}
