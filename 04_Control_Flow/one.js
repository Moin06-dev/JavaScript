// if
let age = 23;
if (age > 18) {
  // console.log("you can enter")c
}

// if else
const temp = 38;

if (temp > 21) {
  // console.log("temp is not 21 ")
} else {
  // console.log("temperature is 38 ")
}

// one more example
if (temp >= 38) {
  // console.log("yes its same ")
} else {
  // console.log("no the temperature is not same....")
}
// one more
if (temp >= 50) {
  // console.log("yes its same ")
} else {
  // console.log("no the temperature is not same....")
}

/* 
logical symbol

< is greater
>less than 
<= is less or equal to
>= is greater or equal to   
== is equal to
!= is not equal to   
=== checing type also 
&& and...
|| or gate 
!== ..
*/

// nested loop if for if else
const balance = 1000;

if (balance <= 350) {
  console.log("the balance is at least 350");
} else if (balance <= 500) {
  console.log("the balance is at least 500");
} else if (balance <= 750) {
  console.log("the balance is above 750");
} else {
  console.log("The balance is 1000");
}
