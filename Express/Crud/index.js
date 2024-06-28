import dbConnect from "./src/db/index.js";
import app from "./app.js";

dbConnect()
  .then((responce) => {
    console.log("db connected");
    app.listen(8000, () => {
      console.log("i am listening");
    });
  })
  .catch((error) => {
    console.log("ERROR  ", error);
    process.exit(1);
  });
