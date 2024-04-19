// const { validateHeaderValue } = require("http");

const { log } = require("console")

// // for of loop
// let k = ["khan" , "moin" , "shafi"]
// for (const anyvalue of k) {
//     console.log(anyvalue);
// }

// /in string
const great = "hello world!";

for (const iterator of great) {
    if (iterator === " ") {
        continue;
    }
    console.log(iterator);
}


// maps
let map1 = new Map();
map1.set('IN' , "india")
map1.set('CN' , "canada")
map1.set('FR' , "france")

console.log(map1);

for (const [key , value] of map1) {
    console.log(key);
    console.log(value);
    console.log(key , value);
}