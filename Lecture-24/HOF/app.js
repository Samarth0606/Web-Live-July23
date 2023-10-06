
// functions are the heart of JS


// function sum(num1 , num2){
//     console.log(num1 + num2) 
// }

// sum(4 , 5);
// sum("sam" , " vohra");
// sum(true , false);

// ---------------------

// function a(fn){ //hof
//     console.log("mai hu a");
//     fn(); //calling is important for callback function
// }

// function b(){ //callback function
//     console.log("mai hu b")
// }

// a(b); 

// ---------------

// function a(fn){ //hof
//     console.log("mai hu a");
//     fn();
// }

// a(function b(){
//     console.log("mai hu b")
// }); 

// ------------------------

// function a(){ //hof

//     console.log("inside a");

//     function b(){
//         console.log("inside b")
//     }

//     return b;
// }

// let temp = a();
// temp();

// -------------------------------------
// Hgher order functions -> 'a'
// 1. when you pass the entire function as an argument in some other function then it is called HOF.
                    // or
// 2. when you return an entire function from some other funtion then the other function is your hof. 

// callback function -> 'b'
// the function which is being sent as an argument to some other function and therein called as well then it is a CALLBACK function.



// ---- USE CASE -----

// function getString(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'string'){
//             res.push(item)
//         }
//     }
//     return res;
// }
// function getNumber(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'number'){
//             res.push(item)
//         }
//     }
//     return res;
// }
// function getBool(arr){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'boolean'){
//             res.push(item)
//         }
//     }
//     return res;
// }

// let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]
// console.log(getString(arr)) 
// console.log(getNumber(arr))
// console.log(getBool(arr)) 


// ---------- use HOF -----------

function getString(item){ //cb
    return typeof(item)=== 'string'
}
function getNumber(item){ //cb
    return typeof(item)=== 'number'
}
function getBoolean(item){ //cb
    return typeof(item)=== 'boolean'
}

function get(arr , fn){ //hof
    let res = [];
    for(let item of arr){
        if(fn(item)){
            res.push(item);
        }
    }
    return res;
}

let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]

console.log(get(arr , getString)) ;
console.log(get(arr , getNumber)) ;
console.log(get(arr , getBoolean)) ;
