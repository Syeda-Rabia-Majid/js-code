class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is logged in`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log((`A new course is added by ${this.username}`));
    }
}

let userdata1 = new Teacher('MAryam','adf.com', 56)
userdata1.addCourse();

let userdata2 = new user('RAbia','rabia@google.com', 999)
userdata2.logMe()

console.log(user === Teacher);    //false
console.log(user instanceof Teacher);      //false
console.log(Teacher instanceof user);
console.log(userdata1 instanceof Teacher);
console.log(logMe instanceof user);