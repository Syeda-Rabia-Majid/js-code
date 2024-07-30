//----------------------------------- .reduce()------------------------------------------

// The .reduce() method in JavaScript is used to execute a reducer function on each element of the array,
//  resulting in a single output value. This method is useful for calculating a cumulative value, such as a 
// sum or product, or for transforming an array into an object or another data structure.

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);
// Expected output: 10

const arrayValue = [1,2,3,4]
const initialValue = 0
const newArrayvalue = arrayValue.reduce( (accumulator, currentValue) => {
    console.log(`accumulator is ${accumulator}, current VAlue is ${currentValue}`)
     return accumulator + currentValue
},0 )

console.log(newArrayvalue)

const shoppingCart = [
    {
        Brand: 'Vivo',
        price: 50000
    },
    {
        Brand: 'SAMSUNG',
        price: 70000
    },
    {
        Brand: 'OPPO',
        price: 40000
    },
    {
        Brand: 'Infinix',
        price: 30000
    },
]

const AddPrices = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
console.log(AddPrices)

//counting occurences in array
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const letterCounts = letters.reduce((accumulator, letter) => {
    if (!accumulator[letter]) {
        accumulator[letter] = 0;
    }
    accumulator[letter]++;
    return accumulator;
}, {});
console.log(letterCounts); 
// { a: 3, b: 2, c: 1 }
