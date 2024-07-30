class user{
    // as such new keyword used or new instance create constructor called
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptedPassword(){
        return (`${this.password}24325`)
    }

    capitaliseUsername(){
        return(`${this.username.toUpperCase()}`)
    }
}

let userdata = new user('RAbia','rabia@google.com', 999)
console.log(userdata.capitaliseUsername());
console.log(userdata.encryptedPassword());

//behind the scene

function user2(username, email, password){
    this.username = username
        this.email = email
        this.password = password
}

user2.prototype.encryptedPassword= function(){
    return(`${this.username.toUpperCase()}`)
}

let userdata2 = new user2('MAryam','adf.com', 56)
console.log(userdata2.encryptedPassword);