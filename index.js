// global.foo = 3;

//*локальними для кожного модуля є:

// module.export

// __filename

// __dirname

// process.argv - масив ел-в командного пядка

// process.cwd()

// process.chdir()

// process.exit();

//*Comon JS

// const nodemon1 = require("nodemon");

// const nodemon = require("./main.js");
// console.log(nodemon);

// const { info } = require("./main.js");
// console.log(info);

//! метод з ES 6 тодулями

//? 1.Спосіб

// розширення mjs

//при імпорті mjs

//для запуску теж mjs

// в package.json також, Де scripts mjs

// import { log, info } from "./files.mjs";
// console.log(info, log);

//? 2 Спосіб

//Розширення файлів писати при import

// import { log, info } from "./files.js";
// console.log(log, info);

//"type": "module" в package.json

//* Реекспорт

// const { log } = require("./main");
// const newExport = log();
// console.log(newExport);

//Коли потрібно викликати чи використати один раз

// const currentExport = require("./main.mjs").info(5);

//*Важливий метод

// process.nextTick(function name(params) {
//   console.log("nextTick callback");
// });

// const info = (msg) => {
//   console.log(`Info ${msg}`);
// };

// const log = (msg) => {
//   console.log(`log ${msg}`);
// };

// module.exports = {
//   info,
//   log,
// };

// export const info = (msg) => {
//   console.log(`Info ${msg}`);
// };

// export const log = (msg) => {
//   console.log(`log ${msg}`);
// };

//* Робота з файлами

// const fs = require("fs").promises;

// fs.readFile("logo.svg")
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log(err.message));

// fs.writeFile();
// fs.appendFile();
// fs.rename();
// fs.unlink();

//* -D замість --

//* -g глабльні пакети не записуються з package.json -- це погано

//*Зоб користуватись yarn

//npm i -g yarn

//yarn встановити всі пакети

// yarn add joi- доадти пакети

// yarn remove joi

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "start": "node index",
//*   "start:dev": "" -- зпускає скрипт в лайв режимі

// nodemon
// },

const date = new Date();

// console.log(`Today is ${date.getFullYear()}`);

// console.log("object");
