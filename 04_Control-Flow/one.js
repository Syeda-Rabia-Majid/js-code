const isloogedIn = true
if(isloogedIn){
    console.log("User logged successfully")
}
//if(2 === '2')
if(2 == '2'){
    console.log("Executed")
}
// === strictly check (value + data Types),!===

const balance =300
if(balance>400){
    const value = 400
    console.log("Package Activated")
}
else{
    console.log("package not Activated")
    //console.log(`You need Balance, ${value}`) out of scope block
}
const AccountBalance = 1000
if(AccountBalance===1000) console.log("Your account balance is 1000")

const IsUserLoggedIn = true
const DebitCard = true
if(IsUserLoggedIn && DebitCard){
    console.log("User Logged In")
}

const loginFromGoogle = true
const loginFromEmail = false
if(loginFromGoogle || loginFromEmail){
    console.log("User logged In")
}

