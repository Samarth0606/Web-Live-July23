const express = require('express');
const app = express();


// app.get('/r/cat' , (req,res)=>{
//     res.send('cat')
// })

// app.get('/r/dog' , (req,res)=>{
//     res.send('dog')
// })

// -------------------------------------------
// path paramter(:) -> req.params -> object
app.get('/r/:macchar' , (req,res)=>{
    // console.log(req)
    console.log(req.params) //object
    let {macchar} = req.params;
    res.send(`req sent at : ${macchar}`)
})

// query paramter(?) -> req.query -> object
app.get('/search' , (req,res)=>{
    // console.log(req);
    console.log(req.query);
    let  {bhagwaan , wife} = req.query;
    res.send(`query paramter agya ${bhagwaan} and ${wife}`)
})

app.listen(8080 , ()=>{
    console.log("server connected at 8080")
})