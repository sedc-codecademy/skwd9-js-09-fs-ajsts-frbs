import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm: FormGroup;
  pricings: string[] = ['free', 'premium', 'deluxe', 'enterprise'];

  ngOnInit(): void {
    console.log('created');
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ]),
      pricingType: new FormControl('premium'),
      gender: new FormControl(null),
    });
  }

  onLoginUser() {
    console.log(this.loginForm.value);
  }
}
