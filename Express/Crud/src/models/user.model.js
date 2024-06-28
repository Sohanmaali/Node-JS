import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => {
      //   const saltKey = bcrypt.genSaltSync(10);
      //   return bcrypt.hashSync(password, saltKey);
      // },
    },
    description: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const user = mongoose.model("user", userSchema);

export default user;
