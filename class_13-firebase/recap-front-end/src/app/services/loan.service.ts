import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Loan, LoanStatus } from '../interfaces/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  loansDataSubject$: Subject<Loan[]> = new Subject<Loan[]>();

  fetchAllLoans() {
    this.http
      .get(`${environment.baseUrl}/loans`)
      .pipe(map((loans) => loans as Loan[]))
      .subscribe((loans: Loan[]) => {
        this.loansDataSubject$.next(loans);
      });
  }

  postNewLoan(loan: Loan) {
    this.http.post(`${environment.baseUrl}/loans`, loan).subscribe(
      (response) => {
        console.log('Loan posted!');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateLoanStatus(loanID: string, status: LoanStatus) {
    this.http
      .patch(`${environment.baseUrl}/loans/${loanID}`, { status })
      .subscribe(
        (response) => {
          console.log('Loan Status updated!');
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
