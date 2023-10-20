


// function getData(cb){
//     setTimeout(function(){
//         // let data = 'Hello my family'; //assumed kiserver de rha hai
        
//         // cb(data, null); //server decide krega
//         cb(null); //server decide krega
//     } , 4000)
// }

// getData(function(data , error){
//     if(error){
//         console.log(error ,'if')
//     }else{
//         console.log(data , 'else');
//     }
// })

// -----------------------------
// callback hell -> Promise

// step-1
// let promise1 = new Promise() //object
// ------------------------------------------
// step-2
// let promise1 = new Promise(function(){

// }) 
// ------------------------------------------
// step-3
// let mypromise = new Promise(function(resolve , reject){

//     setTimeout(function(){

//         // let data = 'Hello my promise family'; //server dega
//         resolve(data); //waada poora 

//     } , 4000)

// }) 



// mypromise.then( function(data){ //accepts a cb function
//     console.log(data);
// }) 


// ---------------------------------------------\
// let mypromise = new Promise(function(resolve , reject){

//     setTimeout(function(){

//         // let data = 'Hello my promise family'; //server dega
//         let err = 'mai server hu nhi derha data' //eroor
//         // resolve(data); //waada poora 
//         reject(err) //waada todd dena

//     } , 4000)

// }) 


// mypromise.then().catch()

// mypromise
// .then(function(data){ //accepts a cb function
//     console.log(data);
// })
// .catch(function(errr){
//     console.log(errr)
// })

// ------------------------------------------------


let mypromise = new Promise(function(resolve , reject){

    setTimeout(function(){

        let data = 'Hello my promise family'; //server dega
        let err = 'mai server hu nhi derha data' //eroor
        reject(err); //waada todd dena
        resolve(data); //waada poora 

    } , 4000)

}) 

// mypromise.then().catch()

mypromise
.then(function(data){ //accepts a cb function
    console.log(data,'resolve');
})
.catch(function(errr){
    console.log(errr , 'reject')
})






