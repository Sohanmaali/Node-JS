// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("Hello i am sohan frome indore");
//   } else if (req.url == "/about") {
//     res.end("Hello i am About Page");
//   } else if (req.url == "/contact") {
//     res.end("Hello i am Contact");
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("404 Erroe Page note found");
//   }
// });
// server.listen("8000", "127.0.0.1", () => {
//   console.log("listen port 8000");
// });
// ============================

const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("I am sohan Maali");
  } else if ((req, url == "/about")) {
    res.end("About Page");
  } else {
    res.writeHead(404, { "content-type": "text / html" });
    res.end("404 Page Not Found");
  }
});

server.listen("8000", "127.0.0.1", () => {});
