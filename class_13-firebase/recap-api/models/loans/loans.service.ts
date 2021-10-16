import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "@firebase/firestore";
import { firebaseDb } from "../../const/firebase.const";
import { Loan, LoanStatus } from "../../interfaces/loan.interface";

export class LoanService {
  constructor() {}

  static getAllLoans() {
    return new Promise(async (resolve, reject) => {
      const data = [];
      try {
        const querySnapshot = await getDocs(collection(firebaseDb, "loans"));
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static postNewLoan(loan: Loan) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await setDoc(doc(firebaseDb, "loans", loan.id), loan);
        resolve({
          message: "Loan added!",
          response: response,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static deleteLoan(loanID: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await deleteDoc(doc(firebaseDb, "loans", loanID));
        resolve({
          message: `Loan ${loanID} has been deleted.`,
          response: response,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateLoanStatus(loanID: string, status: LoanStatus) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await updateDoc(doc(firebaseDb, "loans", loanID), {
          status: status,
        });
        resolve({
          message: "Loan status updated!",
          response: response,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
