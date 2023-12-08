const express = require('express'); //function
const app = express(); //object -> instance


// middleware -> function -> harr incoming request par chlta hai
// app.use( (req,res)=>{  //path isnot speicified
//     res.send('<h1>Hi i am middleware</h1>')
// } )

// top to bottom -> (code flow)

// app.use('/cat' ,(req,res)=>{  //path isnot speicified
//     res.send('<h1>Hi i am cat middleware</h1>')
// } )


// middleware advance->
app.use('/cat' ,(req,res,next)=>{  //path isnot speicified
        console.log('Hi i am cat middleware');
        next(); //agle middleware(function) par bhejdo
} )

// GET -> PATH , CB FUNCTION
app.get('/samarth' , (req,res)=>{
    res.send("<h2>hi i am samarth</h2>")
})

app.get('/cat', (req,res)=>{
    res.send('get request from /cat aagyi')
})

// for all the left over paths
app.get('*' , (req,res)=>{
    res.send('error page 404')
})


const PORT = 8080;
app.listen( PORT , ()=>{
    console.log(`server is connected at port: ${PORT}` )
})