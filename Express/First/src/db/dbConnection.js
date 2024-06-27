import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("DB CONECTED");
  } catch (error) {
    console.log("ERROR : ", error);
    process.exit(1);
  }
};

export default connectDB;
