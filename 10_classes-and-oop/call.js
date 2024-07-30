const setUSerName = function(username){
    this.username = username;
    console.log("Called");
}
 
const createUser = function(username,email,password){
    setUSerName.call(this, username);         //holds refrence

    this.email = email
    this.password = password

}

let syeda = new createUser("Syeda RAbia",'rabia@gmail.com', 123 )
console.log(syeda);