

// WRONG OR RIGHT (YOU DECIDE)
//--> WRONG WAY

// function step1(){
//     console.log('Selecting the image from gallery');
//     setTimeout(function(){
//         return 'selected image'
//     } , 4000) //milli seconds => 4s
// }

// function step2(image){
//     console.log(`applying filter to the ${image} plz wait`)
//     setTimeout(function(){
//         return 'filter applied'
//     } , 2000)
// }

// let image = step1(); 
// console.log(image);
// let filteredImage = step2(image);
// console.log(filteredImage);


// ------------------------------------------------------
//--> RIGHT WAY


function step1(fn){
    console.log('Image is being selected from the gallery...')
    setTimeout(function(){
        console.log('Image is selected now');
        fn('photo.jpg') //step 2 ka functions
    } , 4000)
}

function step2(image , fn){ //filter function
    console.log(`Applying filter to the ${image}`)
    setTimeout(function(){
        console.log(`filter applied to the ${image}`);
        fn('Filtered Image') //step 3 ka function
    } , 2000)
}
function step3(filter , fn){
    console.log(`Adding caption to the ${filter}`);
    setTimeout(function(){
        console.log('caption done')
        fn('image with caption') //step 4 ka function
    } , 3000)
}
function step4(caption){
    console.log(`uploading your final ${caption}`);
    setTimeout(function(){
        console.log('Image uploaded successfully');
    } , 5000)
}

// horizontally grow -> pyramid of DOOM
step1(function(image){
    step2(image , function(filter){
        step3(filter , function(caption){
            step4(caption)
        });
    });
});













