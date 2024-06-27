import mongoose from "mongoose";
const userShema = new mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    bod: { type: Date, require: true },
    password: { type: String, require: true, trim: true },
  },
  { timestamps: true }
);

const user = mongoose.model("users", userShema);

export default user;
