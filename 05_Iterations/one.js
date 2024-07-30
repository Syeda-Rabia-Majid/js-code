//-----------------------For Loop---------------------

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log("5 is my lucky Number")
//     }
//     console.log(element)
// }

// for (let i = 0; i <=10 ; i++) {
//     console.log(`Outer loop value is ${i}`)
//     for (let j = 0; j <=10 ; j++){
//         console.log(`Inner loop value is ${j} and outer value is ${i}`)
//     }
// }index

//-----------------------Tables using loop-----------------
for (let i = 2; i <=10 ; i++) {
    console.log(`Table of ${i}`)
    for (let j = 1; j <=10 ; j++){
        let tableValue = i*j
        console.log(`${i}*${j}=${tableValue}`)
        // if (tableValue == 20) {
        //     break
        //     console.log("Table ended")
        // }
    }
    
    
}

const myarray = ["Rabia","MAryam","SAdaqat","Nazakat"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
}

//break 

for (let index = 0; index < 10; index++) {
        const element = index;
        if (index == 5) {
            console.log("5 is my lucky Number")
            break                      //stop when condition fullfill
        }
        console.log(element)
    }
// continue

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 is my lucky Number")
        continue    // skip condition of no 5 and continue ahead
    }
    console.log(element)
}

   