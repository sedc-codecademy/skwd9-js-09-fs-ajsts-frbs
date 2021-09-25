import { Component, OnInit } from '@angular/core';
import { from, Observable, interval, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Movie, RandomService } from './services/random.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'observables';

  constructor(private randomService: RandomService) {}
  // Example 1
  names: Observable<string[]> = from([
    ['George', 'Ivan', 'John Doe', 'Bob Bobski'],
  ]);

  namesSubsribed: string[] = [];

  // Example 2

  // myIntervalObservable = interval(500);
  // private intervalSubsription = this.myIntervalObservable.subscribe((value) =>
  //   console.log(`We are subscribed, huuurayy ${value}`)
  // );

  // Example 3
  costumFirstNameObjects = of([{ firstName: 'George' }, { firstName: 'Ivan' }]);

  // Example 4

  namesFromExample4: string[] = [];
  customNamesObservable: Observable<string> = new Observable((observer) => {
    observer.next('George');
    observer.next('Ivan');
    observer.next('John Doe');
    observer.next('Bob Bobski');
    observer.next('Alex');
    observer.next('John');
    // With next we will put data into our observable ** Required

    observer.complete();

    setTimeout(() => {
      observer.error(new Error('Error'));
    }, 3000);

    // We grab the error that bubbled up in our observable ** Optional

    // It will end our obserable will finish ** Optional
  });

  // Example 5

  randomInput: string = '';

  // Movie object example

  movie: Movie;

  ngOnInit() {
    //IN ORDER TO GET OR CONSUME THE DATA FROM THE OBSERVABLE WE MUST SUBSCRIBE TO IT, AND WE BECOME OBSERVERS

    //Example 1
    this.names.subscribe((names) => (this.namesSubsribed = names));

    //Example 2

    // this.intervalSubsription;

    // setTimeout(() => {
    //   this.intervalSubsription.unsubscribe();
    // }, 5000);

    //Example 3
    this.costumFirstNameObjects.subscribe((mentors) => console.log(mentors));

    //Example 4
    this.customNamesObservable
      .pipe(
        filter((value) => value.length === 4),
        map((filteredNames) => `Firstname: ${filteredNames}`)
      )
      .subscribe(
        (name) => this.namesFromExample4.push(name),
        (error) => console.log(error.message),
        () => console.log('Observable completed!')
      );

    //Example 5
    this.randomService.$userRandomInput.subscribe(
      (inputText) => (this.randomInput = inputText)
    );

    this.randomService.$randomText.subscribe((randomText) =>
      console.log(`Behaveour subject default value: ${randomText}`)
    );

    // Subscribe to add movie sent

    this.randomService.$movieSubject.subscribe((movie) => (this.movie = movie));
  }
}
