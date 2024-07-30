// Function  Definition
function addNum(num1, num2){ // num1,num2 =>parameters
    let result = num1+ num2
    return result
    //console.log() after return cant write any instruction

}

const result = addNum(5,8) //5,8 arguments pass to methods
console.log("Result = ", result)    

//addNum() here addNum => refrence, () => execution

function subNum(num1,num2){
    return num1-num2;  // only return value not print
}
const afterSub = subNum(10,5)
console.log("After Subtraction = ",afterSub)

function username(Name){
    if(Name === undefined){       //   if(!Name)  id same as Name=== undefined
     return    "Enter user name"
    }
    else{
    return `${Name} just logged In`
    }
}
//console.log(username())
console.log(username("Rabia"))

