import { NextFunction, Request, Response } from "express";
import { LoanService } from "./loans.service";

export class LoanController {
  static async getAllLoans(req: Request, res: Response, next: NextFunction) {
    try {
      const loans = await LoanService.getAllLoans();
      res.status(200).json(loans);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postNewLoan(req: Request, res: Response, next: NextFunction) {
    const newLoan = req.body;
    try {
      const response = await LoanService.postNewLoan(newLoan);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateLoanStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body = req.body;
    const loanId = req.params.id;
    try {
      const response = await LoanService.updateLoanStatus(loanId, body.status);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
