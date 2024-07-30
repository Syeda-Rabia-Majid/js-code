const promiseOne = new Promise(function(resolve, reject){
    //Do any async task
    //DB connected, cryptography, Network
    setTimeout(function(){
        console.log("Async Task");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async TAsk 2 Resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({UserNAme: 'RAbiA', email: 'rabia@gmail.com'})                                 //directly connected into then
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({UserNAme: 'RAbiA', email: 'rabia@gmail.com', password:'123'})
        }else{
            reject("ERROR: Something went wrong");
        }
    },1000)
})
// promiseFour.then(function(user){
//     console.log(user);
// })
// .catch(function(error){
//     console.log("error consumed");
// })


//how to avoid callback hell
promiseFour.then(function(user){
    console.log(user);
    return user.email;
})
.then(function(Email){                    //chaining 
    console.log(Email);
})
.catch(function(error){
    console.log("Error");
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})

//usingasync 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({CourseNAme: 'JS', duration:'30 days'})
        }else{
            reject("ERROR: JS went wrong");
        }
    },1000)
})
async function promiseFiveConsume(){
    try {
        const response = await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
    
}
promiseFiveConsume();

// async function getUserData(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: " , error);
//     }
    
// }
// getUserData()


fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error Occur");
})