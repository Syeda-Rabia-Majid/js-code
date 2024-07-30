// singleton when object used in container
// onject used as literals

//using symbol
const mysym =  Symbol("java script")

const jsUser = {
    Name: "Syeda Rabia",
    age: 22,
    location: "Mian Channu",
    email: "rabia@gmail.com",
    lastloggingdays:["Mon","Wed","Fri"],
    "id": "2414",
    [mysym]: "java",       // [Symbol(java script)]: 'java'
    //Add methods to object
    greeting :  function(){
    console.log("Hello js user")
},
    greetingTwo : function(){
    console.log(`Hello js user ${this.Name}`)
}

}

//how to access keys of objects

console.log(jsUser.Name)  //mostly used
// right method to access
console.log(jsUser["age"])
console.log(jsUser["location"])
console.log(jsUser["email"])
console.log(jsUser["lastloggingdays"])
console.log(jsUser["id"])  //by this method we access string based keys also/ 
                           //in actual keys behave as strig
jsUser.email =   "syeda@gmail.com"    //change values of objects
//console.log(jsUser)

console.log(jsUser[mysym])  //symbol access in object

//Object.freeze is used to freeze an object so that it can no longer be modified.
Object.freeze(jsUser) 
jsUser.email = "fatima@gmail.com"  //Attempt to modify a frozen object
console.log(jsUser["email"])

//. When you call jsUser.greeting() and jsUser.greetingTwo(), you don't need to wrap them
// in console.log() because they already include console.log statements inside them.
// Additionally, when you use console.log to call these methods,
// the result will be undefined because the functions don't return anything.


console.log(jsUser.greeting()) //Hello js User eith undefined
console.log(jsUser.greetingTwo())


console.log(typeof jsUser[mysym]) // Should output 'string' as the value of the symbol property
console.log(typeof jsUser.greetingTwo())  //ooutput : undefined
//typeof is designed to return the type of a value or 
//expression, not the type of a property or method in an object.


console.log(jsUser)


