// function something(){
//     console.log("mai to ji dabb gya");
// }

// ---------------------------------
//2nd way

// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("bagrang bali ki jai")
// }

// or

// let btn = document.querySelector('button');
// let samarth =   function(){
//                     console.log("bagrang bali ki jai")
//                 }
// btn.onclick = samarth;

// --------------------------------


// interview sawaal

// let btn = document.querySelector('button');

// function naacho(){
//     console.log("natu natu natuuu...")
// }

// function gaayo(){
//     console.log("sa re ga ma pa dha ni sa")
// }

// ek event par ek kaam

// btn.onclick = naacho;
// btn.onclick = gaayo;

// ----------------------------------

// multiple kaams/functions

// 3rd method -> 3way -> addEventListner()

// btn.addEventListener('click' , function(){
//     console.log("event chal gya")
// })

// -----------------------------
// multiple functions
// btn.addEventListener('click' , naacho);
// btn.addEventListener('click' , gaayo);


// ---------------------
// task


let btn = document.querySelector('button');
let body = document.querySelector('body');

btn.addEventListener('click' , function(){
    body.style.backgroundColor = "red"
})


