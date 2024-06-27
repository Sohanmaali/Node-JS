import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/todoapp")
  .then(() => {
    console.log("Db connected");
  })
  .catch((erroe) => {
    console.log(erroe);
    process.exit(1);
  });

export default mongoose;
