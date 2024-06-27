import mongoose from "mongoose";

const firstSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trime: true },
    password: { type: String, required: true, trime: true },
    email: { type: String, required: true, trime: true },
  },
  { timestamps: true }
);

export const First = mongoose.model("First", firstSchema);
