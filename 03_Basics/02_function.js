function PriceCalculator(...num1){
return num1
}

// if we are going to print that so it will return the first vale like in this case it give 200 so we usee spread.... in
console.log(PriceCalculator(200,86,786,8902));


const objectTest = {
    name: "John",
    age: 30,
    city: "New York"

}

// Function to get details from an object
function takingfromOb(fromObject) {
    // Return name, age and city from object
    return fromObject.name + ", you are " + fromObject.age + " years old and live in " + fromObject.city;
  }
console.log(takingfromOb(objectTest))


const arraytest = [9905,1305495,975492,875656418,84378]
function testingarryinfun (view) { // define a function called testingarryinfun
    // return the third element of the view array
    return view[2]
}
console.log(testingarryinfun(arraytest));