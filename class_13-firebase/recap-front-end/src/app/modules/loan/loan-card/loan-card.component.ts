import { Component, Input, OnInit } from '@angular/core';
import { Loan, LoanStatus } from 'src/app/interfaces/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css'],
})
export class LoanCardComponent implements OnInit {
  constructor(private loanService: LoanService) {}

  @Input() displayedLoan: Loan;
  loanStatusEnum = LoanStatus;

  ngOnInit(): void {
    console.log(this.displayedLoan);
  }

  onUpdateLoanStatus(status: LoanStatus) {
    this.loanService.updateLoanStatus(this.displayedLoan.id, status);
  }
}
