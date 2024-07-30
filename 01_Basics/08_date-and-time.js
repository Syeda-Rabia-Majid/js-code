let myDate = new Date() 
console.log(typeof myDate)  //object beacuse myDate is instance of object when we use new 
console.log(myDate)   //2024-07-10T04:25:03.402Z     not understable
console.log(myDate.toString())  //Wed Jul 10 2024 09:27:24 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()) // Wed Jul 10 2024
console.log(myDate.toISOString())  //2024-07-10T04:28:37.548Z
console.log(myDate.toLocaleTimeString())// 9:35:00 AM
console.log(myDate.toLocaleDateString()) // 7/10/2024
console.log(myDate.toLocaleString())   // 7/10/2024, 9:35:00 AM
console.log(myDate.toJSON())  //2024-07-10T04:35:00.868Z

//The Date constructor in JavaScript uses a 0-based index for the month,
// meaning January is 0 and December is 11.
let atTime = new Date(2023,0,14)
console.log(atTime.toLocaleString()) //1/14/2023, 12:00:00 AM since time not given it set by default
console.log(atTime.toLocaleDateString()) //1/14/2023

let createdDate = new Date("21-09-2002")
console.log(createdDate.toLocaleDateString()) //invalid date
//The ISO format (YYYY-MM-DD) is a standard format recognized by the Date constructor.

/*   chatgpt
let dateString = "21-09-2002";
let [day, month, year] = dateString.split('-').map(Number);
let createdDate = new Date(year, month - 1, day); // Month is 0-based
console.log(createdDate.toLocaleString());
console.log(createdDate.toLocaleDateString());
console.log(createdDate);
*/

let timedate = new Date(2024,11,16,5,30)
console.log(timedate.toLocaleString()) //12/16/2024, 5:30:00 AM


//-----------------------Date.now()---------
//This method returns the current timestamp in milliseconds
// since the Unix epoch (January 1, 1970, 00:00:00 UTC).

let myTimeStamp = Date.now()
console.log(myTimeStamp)  //1720591888546
console.log(Math.floor((Date.now())/1000))  //1720591888  convert into seconds

let dueTime = new Date(2023,0,14)
console.log(dueTime.getTime())  // 1673636400000 in milliseconds


let dateis = new Date()   
console.log(dateis.getDay())  //3
console.log(dateis.getMonth()+1)  //7
console.log(dateis.getFullYear())  //2024
console.log(dateis.toLocaleString('default',{
    weekday: "long",  //Wednesday
    day: "2-digit",   //10
    dayPeriod: "long"  //in the morning
}))
