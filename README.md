# goit-node.js-hw-01

node index -a list
https://monosnap.com/file/XI7mm5FybWPhjujilFS1Vrp6gBiESX

node index -a get -i 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/NtHNIAuGyip2rX2ehapAc57NJTMLs2

node index -a add -n Mango -e mango@emal.com -p 83783787
https://monosnap.com/file/FaovbJVjFTPeupvETlGBSddT8FkdoU

node index -a remove -i z8qBcdlWBBVUIiFnNxY-A
https://monosnap.com/file/cxAhEvkJmDgAksUtdEqfPq3QmvJhme

//======================================================================================================================

// global.foo = 3;

//\*локальними для кожного модуля є:

// module.export

// \_\_filename

// \_\_dirname

// process.argv - масив ел-в командного пядка

// process.cwd()

// process.chdir()

// process.exit();

//\*Comon JS

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

//\* Реекспорт

// const { log } = require("./main");
// const newExport = log();
// console.log(newExport);

//Коли потрібно викликати чи використати один раз

// const currentExport = require("./main.mjs").info(5);

//\*Важливий метод

// process.nextTick(function name(params) {
// console.log("nextTick callback");
// });

// const info = (msg) => {
// console.log(`Info ${msg}`);
// };

// const log = (msg) => {
// console.log(`log ${msg}`);
// };

// module.exports = {
// info,
// log,
// };

// export const info = (msg) => {
// console.log(`Info ${msg}`);
// };

// export const log = (msg) => {
// console.log(`log ${msg}`);
// };

//\* Робота з файлами

// const fs = require("fs").promises;

// fs.readFile("logo.svg")
// .then((data) => console.log(data.toString()))
// .catch((err) => console.log(err.message));

// fs.writeFile();
// fs.appendFile();
// fs.rename();
// fs.unlink();

//\* -D замість --

//\* -g глабльні пакети не записуються з package.json -- це погано

//\*Зоб користуватись yarn

//npm i -g yarn

//yarn встановити всі пакети

// yarn add joi- доадти пакети

// yarn remove joi

// "scripts": {
// "test": "echo \"Error: no test specified\" && exit 1",
// "start": "node index",
//\* "start:dev": "" -- зпускає скрипт в лайв режимі

// nodemon
// },

// console.log(`Today is ${date.getFullYear()}`);

// console.log("object");

import yargs from "yargs";
import \* as contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
switch (action) {
case "list":
const allContactsList = await contactsService.listContacts();
return console.log(allContactsList);

    case "getById":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);

    case "add":
      const addNewContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      return console.log(addNewContact);

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      return console.log(deleteContact);

    default:
      console.log("❌ Such action not found");

}
};

//\*yargs

// const { argv } = yargs(process.argv.slice(2));
// invokeAction(argv);
