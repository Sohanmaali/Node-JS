import { Router } from "express";
import {
  getAllUser,
  getUserById,
  login,
  signup,
  updateUser,
} from "../controller/user.controller.js";
const userRouter = Router();

userRouter.post("/signup", signup);

userRouter.get("/get-all-user", getAllUser);

userRouter.get("/getuser/:id", getUserById);

userRouter.post("/updateuser/:id", updateUser);

userRouter.post("/login", login);

export default userRouter;
