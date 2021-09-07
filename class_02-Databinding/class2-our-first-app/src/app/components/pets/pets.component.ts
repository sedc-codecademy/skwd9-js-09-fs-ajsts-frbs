import { Component } from "@angular/core";


@Component({
    // selector: '[app-pets]', //Square brackets selector
    //selector: '.app-pets', // Class selector 
    selector: 'app-pets', //Default selector

    templateUrl: './pets.component.html', //Specifing the path to the html template we use
    // template: '<h1 style="color: red;" >Hello from template</h1>', // Inline template

    // styleUrls: ['./pets.component.css']
    styles: [`
        .title {
            color: blue
        }
    `]

})
export class PetsComponent {

    titleIRecieve: string = ""
    titleFromParent: string = 'Passed value to the child with Input decorator'

    onTitleSent(value: string){
        console.log(value)
        this.titleIRecieve = value;
    }
}