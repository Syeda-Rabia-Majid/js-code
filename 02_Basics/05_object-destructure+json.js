const course = {
    courseName: "Java",
    Price: 1000,
    duration: "3-5 Months"
}
// object destructure
const {courseName} = course
console.log({courseName})

const {courseName: Name} = course
console.log({Name})

//json
//keys and values both are string in json
{
    "Name" : "Rabia",
    "Learning" : "java"
    "target" : "3 Months"
}

//sometimes in form of array (object)
[
    {},
    {},
]