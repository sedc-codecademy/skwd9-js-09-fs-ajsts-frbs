import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  constructor() {}

  myIntervalObservable = interval(500);
  private intervalSubsription = this.myIntervalObservable.subscribe((value) =>
    console.log(`We are subscribed, huuurayy ${value}`)
  );

  ngOnInit(): void {
    // this.intervalSubsription;
  }

  ngOnDestroy() {
    this.intervalSubsription.unsubscribe();
  }
}
