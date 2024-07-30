const number = 350
//console.log(number)
const othernumber = new Number(100)
console.log(othernumber)
console.log(othernumber.__proto__)  // to check type 

// -------------toString()-----------
console.log(othernumber.toString()) // convert number to string now we use string function
console.log(othernumber.toString().length)  //length function of string
//console.log(typeof othernumber)

// -----------toFixed()---------
console.log(othernumber.toFixed(2))  // set decimal value after point  output:100.00


// --------toPrecion()----------
const score = 345.9934
console.log(score.toPrecision(3))  // output:346
console.log(score.toPrecision(2))  
// output:The number 345.9934 is rounded to 2 significant digit,
// which is 3.5. Since 2 is far less than 1234.5,
// it uses exponential notation to represent the number. 
// 5e+2 means 5 * 10^2, which equals 100.
console.log(score.toPrecision(1))   // output: 3  3*10^2

// ----------toLocaleString()----------

const value = 10000000
console.log(value.toLocaleString('en-pk'))  // use Pakistani standard of a number

// ---------isFinite()------ 
//to determine whether a given value is a finite number.
// It returns true if the value is finite and false if it is Infinity, -Infinity, or NaN.
console.log(isFinite(0))     //true
console.log(isFinite(null))  //true
console.log(isFinite(45573))  //true
console.log(isFinite(Infinity))  //false
console.log(isFinite(NaN))    //false
console.log(isFinite(-Infinity))   //false

// -----------maxValue()--------

//--------------------------------Math----------------------------------
console.log(Math);
console.log(Math.abs(-90)) // output: 90
console.log(Math.round(56.9))  //output: 57
console.log(Math.ceil(45.3))  //output: 46
console.log(Math.floor(45.3))  //output: 45
//The Math.random() function returns a floating-point number
// between 0 (inclusive) and 1 (exclusive)
console.log(Math.round());     //output:NaN    Math.round requires an argument
console.log(Math.random()*10)   //multiplying it by 10 scales this to the range [0, 10).
console.log((Math.random()*10)+1) //Adding 1 shifts this range to [1, 11).
console.log(Math.max(45,67,90,23))
console.log(Math.min(56,89,34,78))
const min = 4
const max = 14
//adding min shifts the range to start at min.
console.log(Math.random()*(max-min+1)+min) //output:6.470949348013773,13.805581735160612
//Math.floor rounds it down to the nearest integer.
console.log(Math.floor(Math.random()*(max-min+1)+min))  //output:5,10,6

