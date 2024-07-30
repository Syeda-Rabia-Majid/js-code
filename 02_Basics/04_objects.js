// singleton
const myobj = new Object()
console.log(myobj)

myobj.email = "abc@gmail.com"
myobj.id = 43254
myobj.course = "java script"
myobj.duration = function(){
    console.log("3-6 months")

}
console.log(myobj)

//non singleton
 const obj = {
    personId: 21009,
    personName: {
        FullName:{
            FirstName: "Rabia",
            LastName: "Majid"
        },
        personContact: 15241325719
    },
    personCity : "Mian Channu"
 }

 //console.log(obj.personName.FullName)
 //console.log(obj.personName)
 console.log(obj)

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"c",4:"d"}

 const obj3 = {obj1,obj2} // This creates an object containing obj1 and obj2 as properties
 const obj4 = Object.assign({},obj1,obj2) // This merges obj1 and obj2 into a new object
                                          //{} => target, obj1,obj2 =>source
console.log(obj4)
/*
Since both objects have properties with the same keys, the values from obj2 overwrite those from obj1.
const obj1 = {1:"a",2:"b"}
 const obj2 = {1:"c",2:"d"}
 const obj4 = Object.assign({},obj1,obj2) 
 console.log(obj4)  output:{ '1': 'c', '2': 'd' }
 //Since both objects have properties with the same keys, the values from obj2 overwrite those from obj1.
*/
const obj5 = {...obj1, ...obj4}
console.log(obj5)


// important for database
// when we fetch data from db like users come into objects of array

const objarr = [
    {
        id: 233,
        email: "syeda@gmaidl.com"
    },
    {
        id: 234,
        email: "r@gmaidl.com"
    },
    {
        id: 235,
        email: "m@gmaidl.com"
    },
    {
        id: 236,
        email: "s@gmaidl.com"
    },
]

//access object from array
console.log(objarr[2].email)  // m@gmaidl.com
console.log(objarr[3]) //{ id: 236, email: 's@gmaidl.com' }

console.log(Object.keys(myobj)) //[ 'email', 'id', 'course', 'duration' ]
console.log(Object.values(myobj)) //[ 'abc@gmail.com', 43254, 'java script', [Function (anonymous)] ]
console.log(Object.entries(myobj))

//to check if object has specific property or not
console.log(myobj.hasOwnProperty('duration')) //true
console.log(myobj.hasOwnProperty('subject')) //false