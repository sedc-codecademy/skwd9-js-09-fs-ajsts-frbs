import { Component } from '@angular/core';
import { Person, SubjectType } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'class2-our-first-app';

  numberOfClasses: number = 15;

  firstName: string = "George";
  lastName: string = "Dimitrov";
  age = 26;

  readonly srcToAngularLogo: string = "https://www.searchpng.com/wp-content/uploads/2019/02/Angular-Logo-PNG-Image-715x715.png"
  readonly angularWelcomeMessage: string = "Welcome to Angular class";
  altForPhoto = "Alt for photo of Angular";

  classOfToday: SubjectType = "React";

  randomInputValues: string = "";
  
  returnFullName(person: Person): string{
    const {firstName, lastName, age, petName = "Bubi"} = person

    return `First name: ${firstName}, Last name: ${lastName}, age: ${age} and has pet with name ${petName}`
  }

  personIvan: Person = {
    firstName: "Ivan",
    lastName: "Lazarevski",
    age: 29
  }

  changeSubjectName(){
    console.log('Clicked button')
    this.classOfToday = 'Angular'
  }

  // handleTextChange(event: any){ dont put any :/ 
  //   console.log(event.target.value)
  // }

  handleTextChange(event: Event){
    // console.log(event)
    const targetValue = (<HTMLInputElement>event.target).value

    const target = event.target as HTMLInputElement
    console.log(target.value);
    // console.log('Other approach', targetValue);

    this.randomInputValues = target.value

  }
}
