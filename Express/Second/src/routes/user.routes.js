import { Router } from "express";
import { userSignup } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", userSignup);

export default userRouter;
