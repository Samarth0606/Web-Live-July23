const mongoose = require('mongoose'); //object

// schema
const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }
    
} , { timestamps: true })

// model/collection -> JS class -> objects/document
//model -> sigular & capital letter

let Review =  mongoose.model('Review' , reviewSchema);

module.exports = Review;
