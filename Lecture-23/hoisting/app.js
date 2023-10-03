
// b(); //yes
// console.log(a) //yes


// var a = 30;
// function b(){
//     console.log(c); //yes
//     var c = 100;
// }

//accessing a variable/function before its declaration -> hoisting

// ---------------------------------

// let a = 10;
// console.log(a); //no hoisting

// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); //no

// ----------------------

// let a; //declare ---> js engine -> undefined --> let a = undefined;
// console.log(a); //no hoisting
// a=100; //reinitialise
// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); //no

// ---------------------

// var a; //declare ---> js engine -> undefined --> let a = undefined;
// console.log(a); //no hoisting
// a=100; //reinitialise
// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); //no

// ----------------

// const a = 100; //declare ---> js engine -> undefined --> let a = undefined;
// console.log(a); //no hoisting
// // a=200; //reinitialise --> invalid
// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); //no

// ----------------


// console.log(sam);
// a();

// var sam = 100;
// function a(){
//     console.log("inside a")
// }


// ---------------

// console.log(sam);
// a();

// // let sam = 100; //declarative change hue hai
// function a(){
//     console.log("inside a")
// }

// ------------------------

// console.log(a);
// var a;
// a=1000;
// console.log(a);



// console.log(a); //error
// const a = 1000; //-> error -> dead temporal zone || temporal dead zone
// // a=1000;
// console.log(a); //1000

// 1. error ✅
// 2. error 1000
// 3. undefined 1000
// 4. 1000 1000





