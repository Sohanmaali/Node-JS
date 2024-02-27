const fs = require("fs");

//creating a new file
// fs.writeFileSync("./fs-Module/ReadWrite.txt", "sohan Maali");

//Append data on existing file
fs.appendFileSync("./fs-Module/ReadWrite.txt", " \nfrom indore");

const data = fs.readFileSync("./fs-Module/ReadWrite.txt"); //return Buffer Data type

console.log(data.toString()); //convert Buffer to original Data and Print

// fs.renameSync("./fs-Module/sohan.txt", "./fs-Module/ReadWrite.txt"); // Rename file Name
