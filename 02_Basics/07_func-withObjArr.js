/*
function calculateCartPrice(num){
    return num;
} 
console.log(calculateCartPrice(5))
8*/

//if argumentd are not final
//-------------use rest operator (...)-------
function calculateCartPrice(...num){     
   return num;                         //[ 300, 450, 1000, 500 ]
}
/*function calculateCartPrice(value1,value2,...num){
    return num;                            
}
//  output[ 1000, 500 ] 
300, 450 store in value1,value2 remaining arguments store into array
*/
console.log(calculateCartPrice(300,450,1000,500));

//function with object
const objUser ={
    username:"Rabia",
    Price: 4500
}

function handleObj(anyobj){
    return `username is ${anyobj.username},and product price is ${anyobj.Price}`
}

console.log(handleObj(objUser))

//array pass in function

const myarr = [23,56,87,24,90]
//const myarr = []

 function handlefunc(userarr){
    return userarr
 }

 console.log(handlefunc(myarr)) //[ 400, 200, 300 ]
 console.log(handlefunc(myarr[2])) //300
// 
console.log(handlefunc([23,33,43]))