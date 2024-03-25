const myArr1 = [100 , 200 ,786 ,2, 3, 4, 5, 6, 9];
// console.log(myArr1);
// console.log(typeof myArr1);
// console.log(myArr1[2]);

const Arr2 = ["moin" , "khan"]
// console.log(Arr2)
// console.log(Arr2 [2]);
// console.log(Arr2 [1]);

//Methods In Array

// myArr1.push(10)
// console.log("After Push: ",myArr1);
// console.log(myArr1.push([500 , "moin"]));

// myArr1.pop()
// console.log("After Pop the value The Pop will Remove the number from last in array",myArr1);

// myArr1.unshift(0)
// console.log("After UnShift : ",myArr1);

// myArr1.shift()
// console.log("After Shift : ",myArr1);


// converting array to string 
// const newArr = myArr1.join()
// console.log(newArr);

// slice and splice 

console.log("The Original Array 1: ",myArr1);

const mySliceArr = myArr1.slice(0, 3)
console.log("Array Sliced From Icndex 0 To 3 (Not include 3): ",mySliceArr);


const mySpliceArr = myArr1.splice(0 ,4);
console.log("Array Splice from 1 to 3 : ", mySpliceArr);