for (let moin = 0; moin < 26 ; moin++) {
    // console.log(moin);
}


for (let moin = 0; moin <= 26 ; moin++) {
    // console.log(moin);
}

// let see the multiple loops 
// let myarray = ['khan' , 'moin' , 'uddin']
// console.log(myarray.length);


// for (let k = 0; k < myarray.length; k++) {
//     const element = myarray[k];
//     for (let j = 0; j < element.length; j++){
//         console.log(`The number ${element[j]} is in position ${k} of the array`);
//     }
// }

// for (let index = 0; index < 10; index++) {
//    if (index == 6 ) {
//     console.log("im on 6 number buddy")
//    }
//     console.log(`the number is:${index}`)

// }

// but if we want tostopt the code on number 6 so we can use break like switch 
for (let index = 0; index < 10; index++) {
    if (index == 6 ) {
    //  console.log("im on 6 number buddy so im break now")
break;
    }
    //  console.log(`the number is:${index}`)
     
 }

//  if we want to run the code but not stop like break so we ca use continue
for (let index = 0; index < 10; index++) {
    if (index == 6 ) {
    //  console.log("im on 6 number buddy so im let go, continue now")
continue;
    }
    //  console.log(`the number is:${index}`)
     
 }


 //lets make 2 ka table with for loop
const number = 2;
for (let two = 1; two <= 20 ; two++) {
   console.log(`${number} * ${two} = ${number*two} `);
    
}



const number1 = 12
for (let index = 1; index <= 10; index++) {
    console.log(`${number1} * ${index} = ${number1*index}`);
    if (index == 5 ) {
        break;
    }
}