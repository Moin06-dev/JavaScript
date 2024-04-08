//immediately invoked function expression (iife)

// basic function without iffe so..
function basicfun(){
    console.log("This is a basic function");
}
basicfun();



// but in iife we got direct output...
// ()()in firt bracket we simple write the code and the second one is call the function
(()=>{
    console.log('The Immediate Function Expression');
})();

// ; is compulsary beacuse javascript got confuse hojata hai function mai tho ki konse wala print karo tho error deta hai

// one more example....iife

((username)=>{
    console.log(`please enter username:${username}`);
})("Moin Khan");



// more example
const experiment= ( (num1 ,num2)=>{
console.log(num1 + num2)
})(10 , 10);