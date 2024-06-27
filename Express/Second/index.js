import app from "./app.js";
import mongoose from "./src/db/index.js";

mongoose;

app.listen(8000, () => {
  console.log("i am listening");
});
