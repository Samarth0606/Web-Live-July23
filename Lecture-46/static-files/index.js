const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
// static -> harr req -> middleware
app.use(express.static(path.join(__dirname, 'public')));



// route -> page -> styling (public -> css -> style.css )
app.get('/whatever' , (req,res)=>{
    res.render('whatever')
})

// route -> page -> styling (style.css , bootstrap) + DRY PRINCIPLE
app.get( '/horror' , (req,res)=>{
    res.render('horror')
} )


let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`)
})


