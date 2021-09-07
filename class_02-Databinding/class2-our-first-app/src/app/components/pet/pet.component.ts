import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor() { }

  titleToSend: string = "Title to send to parent";
  //With the input decorator we are expecting prop to be passed from the parent.
  @Input() titleFromParent:string = "";

  //With the output decorator we are emmiting event that will pass data to the parent.
  @Output() titleToSendToParent: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
  }

  //We create method that will trigger the event.
  sendTitleToParent(){
    this.titleToSendToParent.emit(this.titleToSend)
  }

}
