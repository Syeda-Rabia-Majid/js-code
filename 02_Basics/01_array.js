let arr = [0,1,2,3,6,4,8]
console.log(arr)
console.log(arr[4]) // 6 at index 4

const myarr = new Array("Rabia","Maryam","Sadaqat","Nazakat")
console.log(myarr[3]) //Nazakat

//---------------------Methods------------------------

arr.push(9)         
console.log("By pushing",arr)  //push 9 at the end of array
arr.pop()
console.log("By Popping",arr)    // pop from the last of array

myarr.unshift("Syed")
console.log("using Unshift", myarr) //push at start of array 
myarr.shift()
console.log("using shift", myarr)   //pop from the start of array

let newarr = arr.slice(1,3) 
console.log("Slice",newarr)
let newarr2 = arr.splice(1,3)
console.log("splice",newarr)







