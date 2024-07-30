// JavaScript is a dynamically typed language. This means
// that you don't need to specify the data type of a variable when you declare it.

//-----------Primitive-------------------(copy of value/variable)
//Boolean,Number,String,null,undefined,symbol,BigInt,

let bigNumber = 13214354648572332n
console.log(typeof bigNumber)  //bigint

let id = Symbol('123')
let otherId = Symbol('123')
console.log(id==otherId)  //false because symbol used for uniqueness
console.log(typeof id)    //symbol





//-----------Refrence(non premitive)------------(refrence of value)
//object,function,arrays

const myFunction = function(){
    console.log("Hye Syeda")
}


let myObject={
    Name: "Syeda Rabia",
    age: 22
}
console.log(myObject)

const color = ["white","black","blue"]
console.log(color)


//*******************************************************
//     stack(primitive) copy value

let person = "Rabia"
let otherperson = person

otherperson = "Amina"

console.log(person)       // Rabia
console.log(otherperson)  // Amina

//     heap(non-primitive)  copy refrence

let userOne ={
    Name: "Syeda Rabia",
    rollno: 345
}
let userTwo = userOne
userTwo.Name = "Amina Batool"

console.log(userOne.Name)  //Amina Batool 
console.log(userTwo.Name)  //Amina Btool

console.log(userOne)
console.log(userTwo)