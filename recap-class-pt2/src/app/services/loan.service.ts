import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Loan } from '../interfaces/loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  loansDataSubject$: Subject<Loan[]> = new Subject<Loan[]>();

  fetchAllLoans() {
    this.http
      .get('http://localhost:3000/loans')
      .pipe(map((loans) => loans as Loan[]))
      .subscribe((loans: Loan[]) => {
        this.loansDataSubject$.next(loans);
      });
  }
}
