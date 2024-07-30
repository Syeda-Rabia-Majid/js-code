//************************Filter*****************************/
//The .filter() method in JavaScript is used to create a new array 
//with all elements that pass the condition by the provided function.

const arrayNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = arrayNum.filter( (num) => num>4 )
// console.log(newNum)

// const newarr = arrayNum.filter( (num) => {
//     return num >4
// } )
// console.log(newarr)

let newNum = []
arrayNum.forEach( (item) => {
    if (item > 4)
        newNum.push(item)
} )
console.log(newNum)

let bookarray = [
    {
        bookName:'English',
        publish: 2005
    },
    {
        bookName:'History',
        publish: 2008
    },
    {
        bookName:'Math',
        publish: 2010
    },
    {
        bookName:'Urdu',
        publish: 2012
    },
    {
        bookName:'Math',
        publish: 2014
    },
    {
        bookName:'Physics',
        publish: 2009
    },
]
// let newbook = bookarray.filter ( (item) => item.bookName == 'Math');
let newbook = bookarray.filter ( (item) => { return item.bookName === 'Math' && item.publish >2010 });
console.log(newbook);