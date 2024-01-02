const express = require('express');
const app = express() //instance
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override')
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');

 



mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //returns a promise
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log("Error is: " , err)})


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')));

app.use(express.urlencoded({extended:true})) //form data body parser
app.use(methodOverride('_method'))

// seedDB() //baar baar store hojaega if not commented

app.use(productRoutes);
app.use(reviewRoutes);

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server running at port : ${PORT}`)
})

// 1. basic Server
// 2. mogoose conection
// 3. model -> seed data
// 4. routes -> views
// 5. rating schema -> Product change -> form to add the rating and comment (show.ejs)