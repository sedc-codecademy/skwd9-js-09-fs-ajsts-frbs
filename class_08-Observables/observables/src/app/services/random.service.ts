import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Movie {
  name: string;
  yearOfRelease: Date;
  producer: string;
  raiting: string;
}

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  //Subject is special type of obserable
  //userRandomInput = new EventEmitter<string>(); //Old fashoned
  userRandomInput = new Subject<string>();
  $userRandomInput = this.userRandomInput.asObservable(); // We create a new observable with this subject as the source

  randomText = new BehaviorSubject<string>('Default');
  $randomText = this.randomText.asObservable();

  movieSubject = new BehaviorSubject<Movie>({} as Movie);
  $movieSubject = this.movieSubject.asObservable();

  constructor() {}

  handleRandomInput(randomInput: string) {
    // this.userRandomInput.emit(randomInput);
    this.userRandomInput.next(randomInput);
  }

  handleMovieSubject(movie: Movie) {
    this.movieSubject.next(movie);
  }
}
