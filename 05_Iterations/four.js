//---------------------forEach loop----------------

const programing =  ['js','cpp','rb','py','oop']
programing.forEach( function (item) {
    console.log(item)
})
//also used in arrow function
// programing.forEach( () => {})

//*********Printme function*****/
// used for printing
// function Printme(item) {
//     console.log(item)
// }
// programing.forEach(Printme)

programing.forEach( (item, index, array) => {
    console.log(item,index,array)
})

//objects in array

const coding = [
    {
        LanguageName: 'java script',
        Languagefile: 'js'
    },
    {
        LanguageName: 'Python',
        Languagefile: 'py'
    },
    {
        LanguageName: 'Object Oriented Programing',
        Languagefile: 'oop'
    },
    {
        LanguageName: 'C++',
        Languagefile: 'cpp'
    },
]
coding.forEach( (item) => {
    console.log(item.LanguageName)
} )
//foreach does not return any value

// const value = coding.forEach( (item) => {
//     console.log(item.LanguageName)
//     return item // undefined
// } )







// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
