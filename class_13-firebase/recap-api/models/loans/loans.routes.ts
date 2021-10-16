import { Router } from "express";
const router = Router();
import { LoanController } from "./loans.controller";

// localhost:3000/api/loans
router.get('', LoanController.getAllLoans);
router.post("", LoanController.postNewLoan);
router.patch("/:id", LoanController.updateLoanStatus);

export default router;