const fs = require("fs");

fs.mkdirSync("./Fs-Module/CRUDE"); // Creating Folder

fs.writeFileSync("./Fs-Module/CRUDE/bio.txt", "Hy\n"); //Creating file and write some data

fs.appendFileSync("./Fs-Module/CRUDE/bio.txt", "I am Sohan Maali Frome Indore"); // append data

console.log(fs.readFileSync("./Fs-Module/CRUDE/bio.txt", "utf8")); // print file data

fs.renameSync("./Fs-Module/CRUDE/bio.txt", "./Fs-Module/CRUDE/Mybio.txt"); //rename file

fs.unlinkSync("./Fs-Module/CRUDE/Mybio.txt"); // delete File

fs.rmdirSync("./Fs-Module/CRUDE"); //delete Folder
