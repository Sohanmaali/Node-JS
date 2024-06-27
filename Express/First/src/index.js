import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import app from "./app.js";

dotenv.config();
connectDB()
  .then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Listing on Port number ${process.env.PORT}`);
    });
    console.log("DB Connected ");
  })
  .catch((error) => {
    console.log("ERROR : ", error);
  });

console.log("index page");
