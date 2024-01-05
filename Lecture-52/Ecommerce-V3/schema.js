const Joi = require('joi');


const productSchema = Joi.object({
    name: Joi.string().required().trim(),
    img: Joi.string().trim(),
    price: Joi.number().min(0).required() ,
    desc: Joi.string().trim()
});


const reviewSchema = Joi.object({
    rating: Joi.number().min(0).max(5), 
    comment: Joi.string().trim()
})

module.exports = {productSchema , reviewSchema};

