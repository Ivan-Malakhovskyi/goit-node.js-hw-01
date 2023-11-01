//*Common js

// const logger = require("./index.test");

// logger.info("info");
// logger.log("info");

const info = (msg) => {
  console.log(`Info ${msg}`);
};

const log = (msg) => {
  console.log(`log ${msg}`);
};

// module.exports = {
//   info,
//   log,
// };

//* Або через ECMAScript модулі, встановивши в package.json "type": "module"
// import { log, info } from ".";

// log();
// info();
