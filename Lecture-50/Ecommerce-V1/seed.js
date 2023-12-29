const mongoose = require('mongoose'); //object
const Product = require('./models/Product');



const products = [
    { 
        name:"iphone 15pro" , 
        img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D" , 
        price: 124000,
        desc: "very costly phone it is"
    },
    { 
        name: "macbook pro", 
        img: "https://images.unsplash.com/photo-1598495037740-2c360cf49e50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjJTIwYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D" , 
        price: 230000,
        desc: "hello i am a good machine"
    },
    { 
        name: "apple pencil", 
        img: "https://images.unsplash.com/photo-1551651639-927b595f815c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBwZW5jaWx8ZW58MHx8MHx8fDA%3D", 
        price: 10000,
        desc: "i can write future"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("DB seeded")
}

module.exports = seedDB;