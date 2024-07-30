const Name = "syed-Rabia-Majid"
const  rollno = 21009
console.log(`My name is ${Name} and my roll-no is ${rollno}`)

const sisName = new String("SyedaMaryamBano")
console.log(typeof sisName)  //object

/*
String {'SyedaRabia'}
0: "S"1: "y"2: "e"3: "d"4: "a"5: "R"6: "a"7: "b"8: "i"9: "a"
//since it is object type so these are key:values
length: 10[[Prototype]]: 
String[[PrimitiveValue]]: "SyedaRabia"
*/
console.log(sisName[3]) //d
console.log(sisName.length) //10
console.log(sisName.__proto__) //{} object type 

//********************************protoType******************************

console.log(sisName.charAt(5)); //M
//charCode() returns the Unicode of the character at a specified index in a string.
console.log(sisName.charCodeAt(7)) //114 corresponds to the Unicode value of the character 'R'
console.log(sisName.codePointAt(5)) //77 handles Unicode code points that are beyond the Basic Multilingual Plane (BMP)
console.log(Name.concat(sisName))// syed-Rabia-MajidSyedaMaryamBano
console.log(sisName.indexOf('r'))   //7
console.log(sisName.includes('y'))  //true


const newstring = Name.substring(0,4)
console.log(newstring)  //syed

//const otherstring = Name.slice(2,6)  //ed-R
//const otherstring = Name.slice(-11,-7)  //Rabi -7 is not include
//const otherstring = Name.slice(-11,-6)     //Rabia
const otherstring = Name.slice(-5)   //Majid
console.log(otherstring)

const str = " RABIA  "
console.log(str.trim()) //remove spaces
console.log(str.trimEnd) // remove ended spaces

console.log(Name.replace('-',' ')) // syed Rabia-Majid
//The replace method in JavaScript only replaces the first occurrence of the specified value
console.log(Name.replace(/-/g ,' ')) //syed Rabia Majid
//To replace all occurrences, use a regular expression with the global flag. 

console.log(Name.split('-')) //[ 'syed', 'Rabia', 'Majid' ]
//split the string into an array of substrings based on the hyphen character.

const NameFix = Name.split('-')
console.log(NameFix.join()) // syed,Rabia,Majid   convert array into string
console.log(NameFix.join(' ')) //syed Rabia Majid