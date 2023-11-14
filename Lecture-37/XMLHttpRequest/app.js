
// 1. XMLHttpRequest 
// constructor function

let req = new XMLHttpRequest();

// Request  open ==  connection banana
console.log(req);
req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls');

// request ko actually mei bhejna
req.send();


// req.onerror = function(){}

req.onload = function(response){
    // console.log(response);
    console.log(this.response);
}





