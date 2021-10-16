import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Credentials } from 'src/app/interfaces/credentials';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private dataService: DataService) {}

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onSubmitRegisterForm() {
    const { email, password } = this.registerForm.value;
    const user: Credentials = {
      email: email,
      password: password,
    };
    this.dataService.createNewUser(user);
  }
}
