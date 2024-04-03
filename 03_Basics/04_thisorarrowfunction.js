const test1 = {
  myname: " Khan",
  Age: 23,

  msgalert: function () {
    console.log(
      "My name is " + this.myname + " and I am " + this.Age + " years old."
    );

    // console.log(this);
  },
};

// console.log(this); //its give {} this in node

test1.msgalert();

//update the vale
test1.myname = "moin";
//after updateing
test1.msgalert();

let test2 = function () {
  let privateVar = "I am Private";
  console.log(this);
};

// test2()

////Arrow Function
// multiple line arrow function
const test3 = () => {
  console.log("Hello World");
};
test3();

//single line arrow function
// no need to return also
const test4 = () => "hey";

console.log(test4());

// for object
const person = () => ({ username: "hey buddy" });

console.log(person());

// what if for array

const log = () => [33274, "khan ", 3287958, "moin"];

console.log(log());
