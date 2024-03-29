const praobject = {
    name: "moinuddin khan",
    age: 25,
    country: "Indian Haq Se"

}
// console.log(praobject.country);
// new way and easy way to define lets see

// const {country:nk , name : mk} = praobject
// console.log(`${mk} or ${nk}`)


const sam = {
    firstName:"Sam",
    lastName:"Smith",
    age:30,
    state: "Maharstra",
    country: "India",

}

// console.log(sam.state);

// Destructuring Assignment
const {firstName: fn ,lastName: ln }= sam;
console.log(`${fn} ${ln}`);
