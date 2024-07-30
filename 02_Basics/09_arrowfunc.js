//----------this-----------
//to refer current context
const objUser ={
    username:"RaBia",
    price: 700,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);// here we do not hardcode just username but print value which is in current context
        //console.log(this); //show contexxt
    
    } 
}
//objUser.welcomeMessage();
objUser.username = "Henry"; //context means variables that hold any value
objUser.welcomeMessage();
//console.log(this)      //{} in node environment 'this' refer to empty object bcz there is no context in global

//in browser global object is 'window '  //most asking question 


/*
function classs(){
     let studentName = "HAyat"
     console.log(this) //show whole structure 
     console.log(this.studentName) //undefined
}

classs();
*/

//this' can't be used in arrow  function but can in global function

/***********************Arrow function*****************************/

const arrowfunc = () => {
    let studentName = "HAyat"
     console.log(this) //{}
     console.log(this.studentName) //undefined
}

arrowfunc()

const add =(num1,num2) => {
    return num1+num2
}
console.log(add(5,3));

//--------------------Implicit return------------------
const addTwo = (num1,num2) => (num1 + num2)  //return has to be write in curly braackets not in paranthesis 
console.log(addTwo(5,2)); //7

//to run object it has to be wrap in paranthesis

const obj = () => { username:"Rabia"}  //undefiend
console.log(obj())
const obj1 = () => ({ username:"Rabia"})  //{ username: 'Rabia' }
console.log(obj1())
/* discuss later
let myarr = [4,27,2,6]
myarr.forEach(()=>{})
*/