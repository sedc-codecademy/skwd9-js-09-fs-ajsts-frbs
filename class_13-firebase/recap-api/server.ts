import express, { NextFunction, Request, Response } from "express";
import { firebaseApp, firebaseDb } from "./const/firebase.const";
import { cors } from "./const/const.cors";
import session from "./const/session.const";
import { getDocs, collection } from "@firebase/firestore";
import router from "./const/router.const";

const app = express();
const PORT = 3000;

app.use(cors);
app.use(session);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// localhost:3000/api
// {message: "Hello from your API!"}

// app.use("/api", async (req: Request, res: Response, next: NextFunction) => {
//   const dbData = await getFireData();
//   res.status(200).json(dbData);
// });

// const getFireData = async () => {
//   const data = [];
//   const querySnapshot = await getDocs(collection(firebaseDb, "loans"));
//   querySnapshot.forEach((doc) => {
//     data.push(doc.data());
//   });
//   return data;
// };

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:3000");
});
