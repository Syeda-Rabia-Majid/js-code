 const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
 console.log(descriptor);

//  {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,       
//     configurable: false
//   }            

Math.PI = 6
console.log(Math.PI);     //we can't change pi value

// const myObj = Object.create(null)        //to create object

const coffee = {
    coffeeType: 'LAtte',
    price: 450,
    isAvailable: true,
    discount: function(){
        console.log('10 % available');
    }
    
}
   
console.log(Object.getOwnPropertyDescriptor(coffee, 'coffeeType'));
Object.defineProperty(coffee, 'coffeeType',{
    writable: false,            
    enumerable: false,                      //means iterable
})

console.log(Object.getOwnPropertyDescriptor(coffee, 'coffeeType'));

for (let [key,value] of Object.entries(coffee)) {                               //values in object are not direct iterable
    if( typeof value != 'function'){
        console.log(`${key}: ${value}`);
    }
  
}


