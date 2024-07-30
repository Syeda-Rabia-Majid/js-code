//------------------------Falsy values----------------------
// false,0,-0,NaN,Null,undefined,BigInt 0n, ""
//Truthy VAlues
// "0", 'false, " ", [], {}, function(){}, 

const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//A kind of call back how to handle error

//Nullish Coalescing operator(??): null,undefined

let value1;
// value1 = 5 ?? 10          //5
// value1 = null ?? 110     //110
// value1 = undefined ?? null  //null
// value1 = undefined ?? 30  //30
value1 = null ?? 30 ?? 20    //30

console.log(value1)

//---------------------------- Ternary Operator---------------------
// condition ? true : false

const coffeePrice = 200;
coffeePrice >= 150 ? console.log("Coffee Price is greater than 150"): console.log("Coffee Price is less than 150");

