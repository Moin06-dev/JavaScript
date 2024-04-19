const { log } = require("console");

const scores = [80, 65, 90, 75, 85];

const totalScore = scores.reduce((accumulator, currentScore) => {
    return accumulator + currentScore;
}, 0);

console.log(totalScore);


const reducesikh = [200,300,100,300,50,25,15,10]

const ekvariable = reducesikh.reduce((acc , curr)=>{
    return acc + curr
},0);

console.log(ekvariable);