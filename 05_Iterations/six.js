//***************************************Map************************************/
//The .map() method in JavaScript is used to create a new array by applying a
// function to each element of an existing array
const arrayNum = [1,2,3,4,5,6,7,8,9]
const newarray = arrayNum.map( function (num){
    return num + 10
} ) 
console.log(newarray)

//using foreach 

const myarray = [5,10,15,20]
myarray.forEach(item => {
    const newVAlue = item + 5
    console.log(newVAlue)
});


//************************************** Chaining ***********************************/

const number = [3,5,6,2,1]
const newNumber = number.map( (num) => { return num * 5} ).map( (num) => {return num + 1} ).filter( (num)  => { return num >=15} )
console.log(newNumber)