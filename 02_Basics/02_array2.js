const colors = ["yellow","black","blue","white"]
const birds = ["sparrow","pigeon","dove","parrot"]

const combined = colors.concat(birds) //concat() method help us achieving a desisered output,
// like merging the two array, but the problems with concat are, It complicated to concat
// more then one array simultaneously and also It takes extra space and do the merging operation.

console.log(combined)

//colors.push(birds) //push() method in array simply add the array as an new single entity in the existing array.
//console.log(colors)
//console.log(colors[4][3])

const newarr = [...colors, ...birds] //Despite push and concat we should use spread operator.
console.log(newarr)

const array = [2,78,45,1,0,[23,55,21],3,4,[1,12,[3,89,76]]]
//create a new array with all sub-array elements
// concatenated into it recursively up to a specified depth. 
const otherarray = array.flat(Infinity)
console.log(otherarray)

//creates a new, shallow-copied array instance from an array-like or iterable object
console.log(Array.from("computer")) //static method
console.log(Array.from({key:"computer"})) //The object {key: "computer"} does not have a length property,
// so Array.from() defaults to creating an empty array.
let score1 = 100
let score2 = 435
let score3 = 200

//creates a new Array instance with a variable number of arguments,
// regardless of the number or type of the arguments.
console.log(Array.of(score1,score2,score3))  //[ 100, 435, 200 ]

console.log(Array.isArray("248327"))  //false








