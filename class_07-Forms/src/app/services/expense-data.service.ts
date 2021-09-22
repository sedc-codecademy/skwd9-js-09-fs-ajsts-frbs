import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseDataService {
  expenses: Expense[] = [];

  constructor() {}

  createNewExpense(expense: Expense) {
    this.expenses.push(expense);
    console.log(this.expenses);
  }
}
