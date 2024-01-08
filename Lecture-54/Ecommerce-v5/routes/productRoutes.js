const express =  require('express');
// const Joi = require('joi');
const Product = require('../models/product');
const router = express.Router();
const {validateProduct} =  require('../middleware');
const Review = require('../models/review');

// displaying all the products
router.get('/products' , async(req,res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index' , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
    
})


// adding a fomr for  anew product
router.get('/products/new' , (req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// actually adding a product in a DB 
router.post('/products' , validateProduct , async (req,res)=>{
    try{
        let {name,img,price,desc} = req.body;

        await Product.create({name,img,price,desc});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// route for shwoing the deatails of thre products
router.get('/products/:id' , async(req,res)=>{
    try{

        let {id} = req.params;
        // let foundProduct = await Product.findById(id);
        let foundProduct = await Product.findById(id).populate('reviews');
        // console.log(foundProduct);
        res.render('products/show' , {foundProduct , msg:req.flash('msg')});
    }

    catch(e){
        res.status(500).render('error' , {err:e.message});
    }

})

// route for editing the product so we need form for it
router.get('/products/:id/edit' , async(req,res)=>{
    try{

        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit' , {foundProduct});
        
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// changing the original edits in the database made in the editform 
router.patch('/products/:id', validateProduct, async(req,res)=>{
    try{

        let {id} = req.params;
        let {name,img,price,desc} = req.body;
        await Product.findByIdAndUpdate(id , {name,img,price,desc});
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/products/${id}`)
    }

    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

//delete a route
router.delete('/products/:id' , async(req,res)=>{
    try{

        let {id} = req.params;
        const product = await Product.findById(id);
        
        for(let id of product.reviews){
            await Review.findByIdAndDelete(id);
        }
        
        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/products');
    }

    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})



module.exports = router;