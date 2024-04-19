// const filtering = [1,2,3,4,5,6,7,8,9,10]

// const updateddfiltering= filtering.filter( (num)=> num > 5 && 4)
// console.log(updateddfiltering);

//
const scores = [80, 65, 90, 55, 85];

const passingScores = scores.filter((score) => {
    return score >= 60;
});

console.log(passingScores);
