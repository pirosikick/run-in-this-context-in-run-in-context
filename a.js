console.log("running a.js...");
console.log("global.globalName", global.globalName);

const vm = require("vm");
const path = require("path");
const fs = require("fs");

const fileB = path.resolve(__dirname, "b.js");
const fileBContents = fs.readFileSync(fileB).toString();

vm.runInThisContext(fileBContents, fileB);
