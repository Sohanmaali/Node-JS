import { Router } from "express";
import {
  getAllUser,
  getUserById,
  login,
  signup,
  updateUser,
} from "../controller/user.controller.js";
import auth from "../middelwares/auth.js";
import { body } from "express-validator";

const userRouter = Router();

userRouter.post(
  "/signup",
  body("password", "password is required").notEmpty(),
  body("email", "email id required").notEmpty(),
  body("email", "invalide email id").isEmail(),

  signup
);

userRouter.get("/get-all-user", auth, getAllUser);

userRouter.get("/getuser/:id", auth, getUserById);

userRouter.post("/updateuser/:id", updateUser);

userRouter.post("/login", login);

export default userRouter;
