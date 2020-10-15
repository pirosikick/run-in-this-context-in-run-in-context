const vm = require("vm");
const path = require("path");
const fs = require("fs");

global.globalName = "main";

const fileB = path.resolve(__dirname, "b.js");
const fileBContents = fs.readFileSync(fileB).toString();

vm.runInThisContext(fileBContents, fileB);
