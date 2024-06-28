import express from "express";
import userRouter from "./src/routes/user.routes.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded());
app.use(express.json());
// app.use(bodyParser());

app.use("/user", userRouter);

export default app;
