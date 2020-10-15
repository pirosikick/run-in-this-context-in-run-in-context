const vm = require("vm");
const fs = require("fs");
const path = require("path");

global.globalName = "main";

const context = vm.createContext();
const customGlobal = vm.runInContext("this", context);
customGlobal.globalName = "custom global";
customGlobal.global = customGlobal;
customGlobal.console = console;
customGlobal.require = require;
customGlobal.__dirname = __dirname;

const fileA = path.resolve(__dirname, "./a.js");
const fileAContent = fs.readFileSync(fileA);
const fileAScript = new vm.Script(fileAContent.toString(), fileA);
fileAScript.runInContext(context);
