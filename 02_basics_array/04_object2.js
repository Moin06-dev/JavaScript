const { log } = require("console");

const fbuser = {
  id: "123mcn",
  email: "moin@gmail.com",
  password: "qwertyuiop",
};
// console.log(fbuser)

// acces only first obect so
// console.log(fbuser.email);
// console.log(fbuser.password);

// add new property to the object
fbuser.name = "Mohammad Ali";
// console.log(fbuser.name);

// Object Loop
const mk = {
  FullName: {
    userid: {
      first: "moinuddin",
      last: "khan",
    },
  },
};
// console.log(mk);
// console.log(mk.FullName);
// console.log(mk.FullName.userid.first);

// how to merge multiple objet like array inarray we use concat,...spread but in obejct we use assign and some time assign let see...

const ob1 = {
    x: 1,
    y: 2,
}

const ob2 ={
    z : 3,
    h : 786,
}

// let ob3 = {ob1 ,ob2}

// assign method ...
// let ob3 = Object.assign(ob1, ob2);
// console.log(ob3);

// but the beest is use spread...
let ob3 = {...ob1 , ...ob2}
// console.log(ob3) ;

let ob4 = (ob1 == ob2)
// console.log("Is it same? ", ob4 ) ; // false



console.log(fbuser);

console.log(Object.keys(fbuser));
console.log(Object.values(fbuser));
console.log(Object.entries(fbuser));

