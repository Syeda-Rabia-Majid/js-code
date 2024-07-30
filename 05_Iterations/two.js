//-----------------While loop----------------

let index = 0
while (index<=10) {
    console.log(`this time index value is ${index}`)
    index = index+5
}

const myarray = ['blue','red','white','black']
let arr = 0
while (arr<myarray.length) {
    console.log(`color is ${myarray[arr]}`)
    arr = arr+1
}

// let score = 10
// do {
//     console.log(`score is ${score}`)
//     score++
// } while (score<15);

//--------------------------do while loop-----------------------
let score = 20
do {
    console.log(`score is ${score}`)   //first work then check condition that's why 20 print
    score++
} while (score<15);