// import { json } from "express";
import { ApiError } from "../utils/apiError.js";
import { First } from "../models/user.model.js";

const userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(`${email}      ${password}        ${username}`);
  if ([username, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields is required");
  }
  const existUser = await First.findOne({ email });
  if (existUser) throw new ApiError(409, "User already ");

  const user = await First.create({ username, email, password });
  if (user) res.status(200).json(user);
};
export { userRegister };
