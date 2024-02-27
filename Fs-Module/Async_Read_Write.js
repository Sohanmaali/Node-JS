const { error } = require("console");
const fs = require("fs");

// fs.writeFile("AsyncData.txt", "Hy", (err) => {
//   console.log("Data Store");
//   //   console.log(err);
// });

// fs.appendFile("AsyncData.txt", "\nI Am Sohan Maali Frome Indore", (erro) => {
//   console.log("Data Update");
// });

fs.readFile("AsyncData.txt", "utf-8", (err, data) => {
  console.log(data);
});
