// const fs = require('fs'); //object
// const path = require('path'); //object

// fs.writeFile('')
// path.join('samarth' , 'vohra')
// ------------------------------------

const express = require('express'); //function
//this app is the entire instance of your application.
const app = express(); //return something? -> main application object

// console.log("samarth bhai backend fatgya");

// middleware -> function
// app.use( ()=>{ //cb
//     console.log("you made a request")
// } ) 
// runs on every incoming request
app.use( (req , res)=>{ 
    console.log("you made a request")
    // console.log(req);
    // console.log(res);
    // res.send("hi server ne response bhejdia")
    res.send("<h1> hi server ne response bhejdia </h1>")
} ) 


app.listen(8080 , ()=>{  //portno , cb
    console.log("server connected at port 8080 bhaijaan")
})
// -------------


