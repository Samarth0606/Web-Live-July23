const { log } = require('console');
const express = require('express'); //function
const app = express(); //object
const path = require('path'); //node module already present
const methodOverride = require('method-override'); //for put/patch/delete methods 


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

app.use(methodOverride('_method'))//method overriding

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

//TASK-4 -> to show a particular comment in the DB/ARRAY  -> req.params
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{
        // console.log(comment.id);
        // console.log(commentId);
        // return comment.id === commentId
        // return comment.id == commentId //way-1
        return comment.id === parseInt(commentId) //way-2
    })
    // console.log(foundComment);
    res.render('show' , {foundComment} );
})
 

//TASK-5 -> to show a the edit form  
app.get('/comments/:commentId/edit' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId);
    })
    res.render('edit' , {foundComment});
})

//TASK-6 -> to actually edit in the DB/ARRAY
app.patch('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId);
    })
    let {comment} = req.body;  //post
    foundComment.comment  = comment;
    res.redirect('/comments');
})


//TASK-7 -> to actually delete from the DB/ARRAY
app.delete('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let newComments = comments.filter((comment)=>{return comment.id != commentId});
    comments = newComments;
    console.log(newComments,'sam');
    res.redirect('/comments');
})





let PORT = 5050;
app.listen(PORT , ()=>{ //listener
    console.log(`server connected at port :${PORT}`);
})