const accountId = 95428
let accountEmail = "syeda@gmail.com"
var accountPassword = "123"
accountCity = "Mian channu"
console.log(accountId);
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "rabia@gmail.com"
accountPassword = "456"
accountCity = "Sahiwal"
console.log( accountEmail);
console.table({
    accountId: accountId,
    accountEmail: accountEmail,
    accountPassword: accountPassword,
    accountCity: accountCity,
    accountState: accountState
});


 


