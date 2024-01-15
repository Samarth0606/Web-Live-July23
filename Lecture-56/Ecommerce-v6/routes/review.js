const express =  require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const {validateReview , isLoggedIn} = require('../middleware')

const router = express.Router();

router.post('/products/:productId/review' , isLoggedIn , validateReview, async(req,res)=>{
        try{
                let {productId} = req.params;
                let {rating , comment} = req.body;
                const product = await Product.findById(productId);
                // console.log(product);
                // creating a new review
                const review  = new Review({rating , comment}); // let review  = new Review({...req.body}) 
                
                // adding review id to product array
                product.reviews.push(review); //mongodb internally isme se id nikaal kr usse push krdega.
                
                await review.save();
                await product.save();
                req.flash('success' , 'Review added successfully');
                res.redirect(`/products/${productId}`)
        }
        catch(e){
                res.status(500).render('error' ,{err:e.message})
        }      
    
})


module.exports = router;