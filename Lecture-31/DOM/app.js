

// using js ill manipulate html
// selectors
//document -> html mei se select kro is-is way se


// way-1 -> getElementById

// let elem = document.getElementById(samarth);//h2 -> NO
// let elem = document.getElementById("samarth");//h1 -> YES
//only returns 1 single entity -> 1st occurance


// ------------------------------------------------
// styling...

// alag alag same element par properties provide karna
// elem.style.color = "red";
// elem.style.backgroundColor = "green";
// elem.style.border = "10px solid black";

//ek saath element pr properties apply karna
// elem.style.cssText = `
//     color : purple;
//     font-size : 50px;
//     background-color : gold;
// `

// -----------------------------------------------------

// way-2 -> getElementsByTagName -> return an array(html collection)

// document.getElementsByTagName(h1) //NO
// let allheading = document.getElementsByTagName('h1') //YES

// heading.style.color = "red"; //directly nhi use hoga -> use looping

// for(let heading of allheading){
//     heading.style.color = "red";
//     heading.style.backgroundColor = "orange";
// }

// for(let heading of allheading){
//     heading.style.cssText = `
//     color : red;
//     background-color : green;
//     font-size : 100px
//     `;
// }

// --------------------------------------------------------

// way-3 -> getElementsByclassName -> return an array(html collection)

// let classEle = document.getElementsByClassName('sam'); //array -> looping

// for(let elem of classEle){
//     elem.style.textDecoration = "line-through";
// }

// ---------------------------------------------------------

//way-4 -> querySelector -> 3 in 1 kaam krta hai -> only 1 element ko select krta hai

// Id -> 
// let qs1 = document.querySelector('#samarth'); //single selector

//className -> 
// let qs2 = document.querySelector('.sam'); //single possible

//tagName ->
// let qs3 = document.querySelector('p'); //single possible

// ---------------------------------------------------------

//way-5 -> querySelectorAll -> 3 in 1 kaam krta hai -> all the elements ko select krta hai

// Id -> 
let qs1 = document.querySelectorAll('#samarth'); // selects All

//className -> 
let qs2 = document.querySelectorAll('.sam'); //single possible

//tagName ->
let qs3 = document.querySelectorAll('p'); //single possible
