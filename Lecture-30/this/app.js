

// regular functional invocation/calling

// let obj = {
//     number: 200,
//     fun: function(){
//         console.log(this)
//     }
// }

// 1. bina obj ke bhi this keyword exist krta hai.

// this always depends on how it(this) is being called. (khatam this)

// function fn(){
//     console.log(this);
// }

// fn(); //regular function calling

// 1. In case of regular function calling -> "this" always points to the window object

// window -> global object -> 

// eg:

// function saraswat(){
//     console.log(this)
// }
// saraswat();


// -----------------------------------------------------

// 2. method invocation

// let obj = {
//     number: 200,
//     fun: function(){
//         console.log(this) //obj
//     }
// }

// obj.fun(); //method invocation

// method invocation -> this always points to the object it is being called upton.

// eg1:
// let obj2 = {
//     a:100,
//     sam:function(){
//         console.log(this) //obj2
//     }
// }

// obj2.sam();
// direct function ? -> no
// method ? -> yes


// eg2:
// let obj2 = {
//     a:100,
//     sam:function(){
//         console.log(this) //obj2
//         // console.log(this === window) 
//     }
// }

// let bhaukaal = obj2.sam;
// bhaukaal(); //direct function -> window

// eg3:


// let obj3 = {
//     a: 10,
//     fn: function(){
//             console.log(this); //1 -> obj3
//             function sam(){
//                 console.log(this) //2 -> window
//             }
//             sam(); //direct function -> window
//     }
// }

// obj3.fn(); //method invocation

// -----------------------------------------------


// 3. constructor invocation (easiest)
// constructor invocation -> "This" always points to the newly created object.

// function CreateObj(){
//     this.x = 200;
// }

// let obj = new CreateObj(); //object create

// console.log(obj.x);


// ------------------------------------------------------


// 4. indirect invocation
//call() -> arguments are comma seperated
// apply() ->

// let obj = {
//     sam : 20,
//     fn : function(a,b,c){
//         console.log(this,a,b,c)
//     }
// }

// let obj2 = {
//     sam : 50
// }

// obj.fn(1,2,3);//method invocation

// yes -> how ? -> call() 
// obj.fn(); 
// obj.fn.call(obj2) //-> this -> obj2 -> changes the context of this
// obj.fn.call(obj2,1,2,3) //-> this -> obj2 -> changes the context of this


// ----------------------------------------------------
// apply
// call and apply are same -> changes the context of this
// obj.fn.apply(obj2 , 1, 2, 3)❌
// obj.fn.call(obj2 , 1, 2, 3)
// obj.fn.apply(obj2 , [1,2,3])


// -------------------------------------------------
// bind

// let obj3 = {
//     fn:function(){
//         console.log(this);
//     }
// }


// let myfun = obj3.fn.bind(obj3); //call no , assign yes

// console.log(myfun)
// myfun();


// -------------------

// let obj3 = {
//     fn:function(){
//         console.log(this);
//     }
// }

// function fn3(){
//     console.log(this);
// }
// // fn3();
// let fn4 = fn3.bind(100); //assign
// fn4();


// ------------------------------------------------------

// 5. arrow function
// let obj5 = {
//     fn: function(){
//         console.log(this);
//     }
// }

// obj5.fn();//method invocation

// // eg2:
// let obj5 = {
//     fn: function(){
//         function sam(){
//             console.log(this);
//         }
//         sam(); //direct calling
//     }
// }

// obj5.fn();


// -> arrow functions -> this refers to the lexical parent
// eg3:
// let obj5 = {
//     fn: function(){
//         console.log(this)
//         let sam = ()=>{
//             console.log(this); //obj5
//         }
//         sam(); 
//     }
// }

// obj5.fn();

// eg4:
// window
// let obj5 = {
//     fn: ()=>{
//         console.log(this)
//         let sam = ()=>{
//             console.log(this); 
//         }
//         sam(); 
//     }
// }

// obj5.fn();






