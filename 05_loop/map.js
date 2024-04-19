const { log } = require("console");

// const maping = [1,2,3,4,5,6,7,8,9,10]

// const newmaping =maping.map( (item)=>{
//     return item < 5;
// })

// console.log(newmaping);


// Bilkul, ek aur example le lete hain. Socho tumhare paas ek array hai jo har student ka score store karta hai aur tumhein har student ka score double karna hai. Isme map function ka istemal karte hain:

const scores = [80, 65, 90, 75, 85];

const doubledScores = scores.map((score) => {
    return score * 2;
});

console.log(doubledScores);
