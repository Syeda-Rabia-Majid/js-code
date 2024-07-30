let score = ""
let scoreInNumber = Number(score)
console.log(scoreInNumber)  //0
console.log(typeof scoreInNumber)  //number

let value = undefined
let valueInBoolean = Boolean(value)
console.log(valueInBoolean) //false
console.log(typeof valueInBoolean)  //Boolean

let marks = null
let marksInstring = String(marks)
console.log(marksInstring)  //null
console.log(typeof marksInstring)  //string


/*
Boolean
        1 => true
        0 => false
        Rabia => true
        "" => false
        null => false 
        undefined => false 
*/

/*
Number
        "33" => 33
        33ab => NaN type(Number)
        true => 1
        "" => 0
        null => 0
        undefined => NaN type(Number)

*/

/*
String
        50 => 50 type(string)
        true => true type(string)
        null => null type(string)

*/

//-----------------------Operation---------------------

let num = 6
let negnum = -6
console.log(negnum)

// console.log(2+2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Syeda"
let str2 = " Rabia"
let str3 = str1+str2
console.log(str3)

console.log(1+"2")  //12
console.log("1"+2)  //12
console.log(1+2+"3")  //33
console.log("1"+2+3)  //123

console.log(+true) //output = 1
console.log(-true) //output = -1



let gamecounter = 4
//++gamecounter
//console.log(gamecounter)  //output = 5

//gamecounter++
//console.log(gamecounter) // output = 5

//gamecounter--
//console.log(gamecounter) //output = 3

gamecounter--
console.log(gamecounter)  //output = 3

/*
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
*/








