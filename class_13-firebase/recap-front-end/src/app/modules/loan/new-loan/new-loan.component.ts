import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Loan, LoanStatus } from 'src/app/interfaces/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css'],
})
export class NewLoanComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewLoanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { numberOfLoans: number },
    private loanService: LoanService
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
    const { clientName, requestAmount, numberOfInstallments, interestRate } =
      this.newLoanForm.value;
    const newLoan = this.calculateLoan(
      clientName,
      new Date(),
      requestAmount,
      numberOfInstallments,
      interestRate
    );
    this.loanService.postNewLoan(newLoan);
  }

  calculateLoan(
    name: string,
    date: Date | string,
    amount: number,
    installments: number,
    interestRate: number
  ) {
    const principalAmount = amount / installments;
    const interestAmount = principalAmount * (interestRate / 100);

    const newLoan: Loan = {
      id: this.generateLoanID(),
      client: name,
      requestDate: date,
      approvalDate: '',
      amount: amount,
      status: LoanStatus.NEW,
      installments: installments,
      interestRate: interestRate,
      principalAmount: principalAmount,
      interestAmount: interestAmount,
    };

    return newLoan;
  }

  generateLoanID(): string {
    const newLoanNumber = this.data.numberOfLoans + 1;
    const digitCount = `${newLoanNumber}`.length;
    const loanID = `AGR-${'0'.repeat(4 - digitCount)}${newLoanNumber}-21`;
    return loanID;
  }
}
