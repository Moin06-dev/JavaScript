// singleton


//Object Literals
let newsym = Symbol("myfir1")


const person = {
    name : "mk",
    [newsym]: "myfir1",
    "full name" : "moinuddin khan",
    age : 24,
    location : "mumbai",
    email : "moinuddinkhan@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["mon", "tue"]

}

// console.log(person.email)
// console.log(person["email"])
// console.log(person["full name"])
// console.log(person[newsym])
// console.log(person.lastloginDays);


// person.age = 21 //its update the object 
// Object.freeze(person)
// person.age = 50

// console.log(person)


// function in object 

person.welcome = function(){
    console.log("hey JS user ");


}
console.log(person.welcome());


// advance 

person.moin = function(){
    console.log(`hey JS user : ${this["full name"]} or ${this.name}`);


}
console.log(person.moin());