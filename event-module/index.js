const { log } = require("console");
const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayHello", () => {
//   console.log("my name is sohan");
// });
// event.on("sayHello", () => {
//   console.log("i am frome indore");
// });
// event.on("sayHello", () => {
//   console.log("i am learning java");
// });

// event.emit("sayHello");

event.on("checkPage", (sc, sms) => {
  console.log(`status code is ${sc} and massege is ${sms}`);
});

event.emit("checkPage", 200, "ok");
