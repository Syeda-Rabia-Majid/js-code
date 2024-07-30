//for of
const array = [3,1,5,7,8,3]
for (const num of array) {
    console.log(num)
}
// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`Each letter is ${greet}`)
// }

const greeting = "Hello World"
for (const greet of greeting) {
    if (greet == " ") {
        // console.log(`This is a space character ${greet}`)
        continue
    }
    console.log(`Each letter is ${greet}`)
}

//-----------map-------------------
//unique key value  and in order
const map = new Map();
map.set('PK',"Pakistan")
map.set('FR',"France")
map.set('IN',"India")
map.set('FR',"France") //as we repeat but it not store in mapbcz of repitetion
console.log(map)
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}

//Object is not iterable in forof loop

const obj = {
    js: 'wJava Script',
    cpp: "C++",
    oop: "Object oriented programing"
}
// for (const [key,value] of obj) {
//     console.log()
// }

//----------------------------------forin loop--------------------
//Object
for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`)
}

//Array
const myarray = ['js','cpp','rb','py','oop']
for (const key in myarray) {
    console.log(myarray[key])       
}