import express from "express";
import { loginuser, sinupcontroller } from "../controllers/user.controllers.js";
const route = express.Router();

route.post("/signup", sinupcontroller);
route.post("/login", loginuser);

export default route;
