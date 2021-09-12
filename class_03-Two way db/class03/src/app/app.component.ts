import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SingleGameComponent } from './components/single-game/single-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'class03';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @ViewChild(SingleGameComponent) sgc: SingleGameComponent;

  titleFromSingleGameComponent = '';

  ngAfterViewInit() {
    console.log(this.sgc.uniqueTitle);
    this.titleFromSingleGameComponent = this.sgc.uniqueTitle;
    this.changeDetectorRef.detectChanges();
  }

  callMethodFromSingleGameComp() {
    this.sgc.printRandomText();
  }
}

// export class AppComponent {
//   title = 'class03';

//   constructor() {}

//   @ViewChild(SingleGameComponent) sgc: SingleGameComponent =
//     new SingleGameComponent();

//   titleFromSingleGameComponent = '';

//   callMethodFromSingleGameComp() {
//     // this.sgc.printRandomText();
//     console.log(this.sgc);
//   }
// }
