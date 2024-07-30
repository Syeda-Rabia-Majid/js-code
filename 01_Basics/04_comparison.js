
/*
Comparisons convert null to a number, treating it as 0. 
That’s why (4) null >= 0 is true and (2) null > 0 is false.
*/
console.log(null==0) //false
console.log(null>0)  //false
console.log(null<0)  //false
console.log(null>=0)  //true
console.log(null<=0)  //true

//On the other hand, the equality check == for undefined and null is defined such that,
//without any conversions, 
//they equal each other and don’t equal anything else. That’s why (1) null == 0 is false.

console.log(null<undefined)  //false
console.log(null>undefined)  //false

//==: Checks for loose equality (values are compared after type coercion).
console.log(null==null)  //true
console.log(null==undefined)  //true

//===
//===: Checks for strict equality (both value and type must be the same).
console.log(null===0)  //false  type(null==number)

