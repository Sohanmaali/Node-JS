import dotenv from "dotenv";
import dbConnect from "./src/db/index.js";
import app from "./app.js";
dotenv.config({ path: "/.env" });
dbConnect()
    .then((result) => {
        console.log("db connected");
        app.listen(process.env.PORT || 8001, () => {
            console.log("i am listening");
        });
    })
    .catch((error) => {
        console.log("Error  ", error);
    });
