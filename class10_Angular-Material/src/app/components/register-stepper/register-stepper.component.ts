import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.css'],
})
export class RegisterStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.firstFormGroup = new FormGroup({
      email: new FormControl(),
    });
    this.secondFormGroup = new FormGroup({
      password: new FormControl(),
    });
  }

  onSubmitStepper() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
  }
}
