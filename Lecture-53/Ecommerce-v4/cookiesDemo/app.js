const express = require('express');
const app =  express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('youneedabettersecret'));

app.get('/' , (req,res)=>{
    // console.log(req.cookies);
    // res.send(req.cookies);
    res.send(req.signedCookies);
})

app.get('/setcookie' , (req,res)=>{
    res.cookie('mode' , 'light');
    res.cookie('location' , 'delhi');
    res.cookie('username' , 'samarth');
    res.send('ent you a cookie successfully');
})

app.get('/greet' , (req,res)=>{
    let {username} = req.cookies;
    // console.log(req.cookies);
    res.send(`hi bro ${username} hope you r doing good`);
})

app.get('/getsignedcookie' , (req,res)=>{
    res.cookie('earthquake' , 'aaya' , {signed:true});
    res.send('cookie sent successfully')
})

app.listen(3000 ,(req,res)=>{
    console.log("server running at 3000");
})