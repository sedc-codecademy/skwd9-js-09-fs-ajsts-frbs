import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() selectedCar: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
