const fs = require("fs");

fs.mkdir("Async_CRUDE", (err) => {
  console.log("Folder Create");
});

fs.writeFile("./Async_CRUDE/Async_DRUDE.txt", "hy", () => {
  console.log("Data write");
});

fs.appendFile("./Async_CRUDE/Async_DRUDE.txt", "\nI am Sohan", () => {
  console.log("Data Append");
});

fs.readFile("./Async_CRUDE/Async_DRUDE.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.rename(
  "./Async_CRUDE/Async_DRUDE.txt",
  "./Async_CRUDE/Async_CRUDE.txt",
  (err) => {
    console.log("File Renamed");
  }
);

fs.unlink("./Async_CRUDE/Async_CRUDE.txt", (err) => {
  console.log("File deleted");
});

fs.rmdir("Async_CRUDE", () => {
  console.log("Folder Deleted");
});
