import mongoos from "mongoose";

const db = mongoos
  .connect("mongodb://localhost:27017/todoapp")
  .then((res) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
export default db;
