if(true){
    let a = 100;
    const b = 200;
    var c = 500;  
}

// console.log(a); //a is in let variable so its in block scope
// console.log(b); //b is in const variable so its also in block scope

// console.log(c); //but c here var is in var so its very ever its global Scope



function test(){
   const username = "moinkhan";


//chilnode of test function
   function testtwo(){
    const websitename = " chrome"
    // here i acces parent name value its because its child its acces parent value
    // console.log(username + websitename)
}
//here we print child node value which come under parent function its not work because of scope
// console.log(websitename)


// here we call the child node 
testtwo()
// if we not call this the code will not work because of we print in that so we have to call them 

}
// here we call parent function
test()


if(true){
    const username = "Mk"
    const Age = 24


    if(username === "MK"){
        const web = "youtube"
        // console.log(`${username} and age is ${Age}`);
    }

    // console.log(web);



}

// console.log(one(9)) // this will run because here it is ok to declare before the function
function one(num){
    return num + 1
}

// console.log(one(9))

// another(5) //ReferenceError: Cannot access 'another' before initialization
const another = function(num){
return num + 5
}

// console.log(another(5))