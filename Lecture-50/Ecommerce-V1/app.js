const express = require('express');
const { Server } = require('http');
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');

mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //returns a promise
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log("Error is: " , err)})


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')));

// seedDB() //baar baar store hojaega if not commented


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server running at port : ${PORT}`)
})

// 1. basic Server
// 2. mogoose conection
// 3. 
// 4. 
// 5.