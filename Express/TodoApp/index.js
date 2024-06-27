import db from "./src/db/index.js";
import express from "express";
import userrout from "./src/routers/user.routes.js";

// db.connect();
db;

const app = express();

app.use(express.json());

app.use("/user", userrout);

app.listen(8000, () => {
  console.log("i am listening");
});

export default app;
