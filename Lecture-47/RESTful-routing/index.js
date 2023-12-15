const { log } = require('console');
const express = require('express'); //function
const app = express(); //object
const path = require('path'); //node module already present

let comments = [ //array of objects
    {
        id:0,
        username: "Sam",
        comment: "Live batch ke students kisi se kam hai kya?"
    },
    {
        id:1,
        username: "Abdul",
        comment: "didi tera dewar dewana"
    },
    {
        id:2,
        username: "Ramraj",
        comment: "mandir yahi banega aur hum banaege"
    },
    {
        id:3,
        username: "Jatin",
        comment: "hey prabhu , hey hari ram krishna jaganathan premanand, ye kya hua"
    }
]

app.set('view engine' , 'ejs'); //engine
app.set('views' , path.join(__dirname , 'views')); //templates
app.use(express.static(path.join(__dirname , 'public'))); //public -> static files

// body parsing middlewares ->
// app.use(express.json()) // -> for json data
app.use(express.urlencoded({ extended: true })) // -> for form data


// RESTful route according to the RESTful table -> right to left
//TASK-1 -> show all the comments -> where are my comments -> DB == ARRAY

app.get('/comments' , (req,res)=>{
    res.render('index' , {comments})
})

//TASK-2 -> show form for new comment 
app.get('/comment/new' , (req,res)=>{
    res.render('new')
})

//TASK-3 -> to actually add the comment in the DB/ARRAY  -> req.body
app.post('/comments' , (req,res)=>{
    // console.log(req.body); //by default -> undefined -> to change i use middlewares
    let { username , comment } = req.body;
    // comments.push({username:username , comment:comment , id:commen(ts.length });
    comments.push({username , comment , id:comments.length }); //ES6 (JS6)
    res.redirect('/comments'); //GET request gyi '/comments' par
})

let PORT = 5050;
app.listen(PORT , ()=>{ //listener
    console.log(`server connected at port :${PORT}`);
})