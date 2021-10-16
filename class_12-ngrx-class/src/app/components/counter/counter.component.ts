import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  setFirstName,
} from 'src/app/store/counter/counter.actions';
import { CounterState } from 'src/app/store/counter/counter.reducers';
import { debounceTime } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { selectCounter } from 'src/app/store/counter/counter.selectors';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  counter: number = 5;
  name: string = '';

  firstName: string = '';

  reactiveFirstName: FormControl;

  ngOnInit(): void {
    this.reactiveFirstName = new FormControl();

    this.reactiveFirstName.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => this.handleFirstNameReactive(value));

    this.store
      .select(selectCounter)
      .subscribe(
        (valueFromStore) => (
          console.log(valueFromStore),
          (this.counter = valueFromStore.counter),
          (this.name = valueFromStore.name)
        )
      );
  }

  incrementCounter() {
    this.store.dispatch(increment());
  }

  decrementCounter() {
    this.store.dispatch(decrement());
  }

  handleFirstName() {
    console.log(this.firstName);
    //Dispatch action to change name
    this.store.dispatch(setFirstName({ firstName: this.firstName }));
  }

  handleFirstNameReactive(firstName: string) {
    this.store.dispatch(setFirstName({ firstName }));
  }
}
