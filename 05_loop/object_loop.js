const { log } = require("console");
const { validateHeaderValue } = require("http");

const myobj = {
    js:  "javascript",
    file: "js",
};
// console.log(myobj.file); // Outputs 'c++' because the last assignment to `myobj.file` is used.

for (const key in myobj) {
console.log(myobj[key]);
}
