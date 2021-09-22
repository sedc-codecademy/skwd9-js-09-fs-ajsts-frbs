import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Expense } from './interfaces/expense';
import { ExpenseDataService } from './services/expense-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-forms';
  paymentType = ['cash', 'card'];
  expensePriorityDefault: string = 'medium';
  expenseCommentValue: string = '';
  maximumCommentSize: number = 16;
  @ViewChild('expenseForm') expenseForm: NgForm;
  signupForm: FormGroup;
  blockedUsernames: string[] = ['Jack', 'Ivan', 'Jill'];

  constructor(private _eds: ExpenseDataService) {}

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    // formControlName in HTML has to have the exact same value as the property
    // of the object we're passing when creating the new FormGroup.
    // For example, formControlName="username" AND username: new FormControl(null)

    // THIS IS WITHOUT A FORM GROUP (FIRST REACTIVE FORM)
    // this.signupForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   gender: new FormControl('female'),
    // });

    // THIS IS WITH A FORM GROUP (SECOND REACTIVE FORM)
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.blockedNamesValidation]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('female'),
    });
  }

  // WITHOUT VIEWCHILD
  // onFormSubmit(form: NgForm) {
  //   // NgForm has a property called value. This is where you will find your form data.
  //   console.log(form.value);
  // }

  // WITH VIEWCHILD
  onFormSubmit() {
    // NgForm has a property called value. This is where you will find your form data.

    const { expenseTitle, expenseDate, expenseAmount } =
      this.expenseForm.value.basicData;
    const { expenseComment, expensePriority, expenseType } =
      this.expenseForm.value;

    const newExpense: Expense = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
      comment: expenseComment,
      priority: expensePriority,
      paymentType: expenseType,
    };
    this._eds.createNewExpense(newExpense);
    this.expenseForm.reset();
  }

  onReactiveFormSubmit() {
    console.log(this.signupForm);
  }

  blockedNamesValidation = (
    control: FormControl
  ): { [key: string]: boolean } | null => {
    if (this.blockedUsernames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}

// Form States
// Touched vs. Untouched - Whether it was clicked in/out
// Dirty vs. Pristine
// Invalid vs. Valid
