let a = 2;    // Global scope 'a'
const b = 3;  // Global scope 'b'
var c = 5;    // Global scope 'c'

if(true){
    let a = 10;    // Block scope 'a' inside if
    const b = 80;  // Block scope 'b' inside if
    var c = 60;    // Reassigns global 'c'
};

console.log(a); // Logs: 2 (global 'a')
console.log(b); // Logs: 3 (global 'b')
console.log(c); // Logs: 60 (global 'c' reassigned in if block)


function one(){
    const username = "Rabia"
    function two(){
        const email = "rabia@gmail.com"
        console.log("username is", username)
    }
    //console.log("Email address is ",email) //// This will throw an error because `email` is not accessible here.
    two()

}
one();

if(true){
    const user = "Rabia"
    if(user === "Rabia" ){
        const Email = "syeda@gmail.com"
    console.log(user+Email)
    }
    //console.log(Email)  //ReferenceError: Email is not defined bcz it is out of scope

}
//console.log(user)  //ReferenceError: user is not defined bcz not accesible outer scope

//simple function deleration
console.log(addone(5))
function addone(num){
    return num+1
}
//variable hold function also said expression
console.log(addtwo(5))  //scope error 
const addtwo = function(num){
    return num + 2
}