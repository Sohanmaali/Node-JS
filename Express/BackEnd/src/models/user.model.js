import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: { type: String, trime: true, required: true },
        email: { type: String, trime: true, required: true },
        passward: { type: String, trime: true, required: true },
    },
    { timestamps: true }
);

const user = mongoose.model("User", userSchema);

export default user;
