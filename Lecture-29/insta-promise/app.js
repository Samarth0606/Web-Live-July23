
// promise
// first class functions 
// why functions are called first class citizens in JS

// image selection
let step1 = function(){
    console.log('Selecting image');
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('image.jpg');
        } , 4000)
    });
}
let step2 = function(image){
    console.log(`Applying filter to ${image}`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('filter applied image');
        } , 2000)
    });
}
let step3 = function(filter){
    console.log(`Adding caption to ${filter}`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('caption added');
        } , 3000)
    });
}

let step4 = function(comment){
    console.log('image uploading plz wait...');
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('all done, image uploaded plz like and share');
        } , 5000)
    });
}

//promise chaining
step1()
.then(function(image){
    console.log('image selected')
    return step2(image);
})
.then(function(filter){
    console.log('filter applied')
    return step3(filter);
})
.then(function(comment){
    console.log(`${comment} to the image`);
    return step4(comment)
})
.then(function(final){
    console.log(final)
})
.catch(function(err){
    console.log(err);
})



















