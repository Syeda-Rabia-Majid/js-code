 class user{
    constructor(Username, password){
        this.Username = Username
        this.password = password
    }
    get Username(){
        return `${this._Username}`
        // return `${this._Username.toLowerCase()}`;
    }
    set Username(value){
        this._Username = value.toLowerCase();             //as we set store username in lower case when access it shows as lower cse
    }
    get password(){
        return`${this._password.toUpperCase()}`;           //but when accessed it changed itno capital
    }
    set password(value){
        this._password = value                         // set/ store as bac  
    }

 }

 const userInfo = new user('RABia' , 'bac')
 console.log(userInfo.password);
 console.log(userInfo.Username);




//in old times get set in fucntion

function user2(username, email){
    this.username = username
    this.email = email

    Object.defineProperty(this, 'email',{
        get: function(){
            return `${this._email.toUpperCase()}`
        },
        set: function(value){
            this._email = value
        }
    })
}

const userdata2 = new user2('Rabia','rabia@google.com')
console.log(userdata2.email);