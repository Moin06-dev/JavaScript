// truthy
// "0" (a string containing "0")
// "false" (a string containing "false")
// "space " (a non-empty string with whitespace)
// [] (an empty array)
// {} (an empty object)
// function(){} (an empty function)


// falsy values...
/*
null
undefined
0
"" (an empty string)
false
NaN
*/

// const email = "njadbh@gmail.com"

// but if the email string is empty then what console log going to print...
// const email = "" //no such email found in the database this is output because is falsey..

//but is we put empty array so...lets check
// const email = [] //we got that email to verify this is output because its true...
// if (email) {
//     console.log("we got that email to verify")

// }else{
//     console.log ("no such email found in the database");
// }


// - Nullish coalescing operator ??

let username = null ?? "mk";
console.log(username);  //output: mk


// ternry operator 
// (condition) ? "isvaltrue" : "isvaluefalse"
const age = 18;
let message = (20 > age ) ? "you are old enough" : "you are not yet old enough";
console.log(message);