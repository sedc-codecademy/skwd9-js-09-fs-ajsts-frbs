import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css'],
})
export class NewLoanComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewLoanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numberOfLoans: number }
  ) {}

  newLoanForm: FormGroup;
  minimumInstallments: number = 12;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newLoanForm = new FormGroup({
      clientName: new FormControl(null, Validators.required),
      requestAmount: new FormControl(null, Validators.required),
      numberOfInstallments: new FormControl(null, [
        Validators.required,
        Validators.min(this.minimumInstallments),
      ]),
      interestRate: new FormControl(null, [
        Validators.required,
        Validators.max(100),
      ]),
    });
  }

  onCreateLoan() {
    console.log(this.newLoanForm.value);
  }
}
