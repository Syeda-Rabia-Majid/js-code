// constructor function (this,new)
//everytime give new intance

const user = {
    username: 'RAbia',
    loggedcount: 13,
    isLoggedIn: true,
    getUserDetail: function(){
        // console.log(`Got username from DB`);
        console.log(`UserNAme: ${this.username}`);
        console.log(this);
    }
}

console.log(user.getUserDetail());

// const userdata = new function
function Userdata(username, loggedcount, isLoggedIn){
    this.username = username
    this.loggedcount = loggedcount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome : ${this.username}`);
    }
    // return this   //implicitly or bydefault define 
   
}
let userOne =  new Userdata('RAbia',12, true)
// let userTwo =  Userdata('Maryam', 6, false )  //override the userOne value thats why we use new keyword to make new intances in object 
let userTwo = new Userdata('Maryam', 6, false )         
console.log(userOne.constructor);                  //refrence to myself
console.log(userTwo);


// new keyword
// Step 1 : create an empty object that called instanceo
// Step 2 : construction function call due to new keyword that back all the arguments
// Step 3 : arguments inject into this keyword
