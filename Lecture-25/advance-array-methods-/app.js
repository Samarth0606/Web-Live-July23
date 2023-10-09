
//array
// let worldCup = ['india' , 'australia' , 'pakistan' , 'New Zealand' , 'sri lanka']

// 1. forEach() -> method which accepts a cb function

// worldCup.forEach(); ->syntax -> HOF

// worldCup.forEach( function(item){ //item -> just a regular variable
//         console.log(item);
// } );


// worldCup.forEach( function(item , index){ //index -> just a regular variable
//     console.log(index + '-->' + item);
// } );


// -------------------------------------

//2. map() - > methods

// let worldCup = ['india' , 'australia' , 'pakistan' , 'New Zealand' , 'sri lanka']
// let numbers = [10 , 20 , 30 , 40 , 50]



// worldCup.map() -> syntax -> HOF
// let newArray = worldCup.map(function(item){ //returns a new array
//     return item.toUpperCase();
// })
// console.log(worldCup)
// console.log(newArray)

// ----------

// let newSqrArray = numbers.map(function(item , index){ //returns a new array
//     return item*index;
// })


// console.log(numbers)
// console.log(newSqrArray)


// ------------------------------------------------------
// 3. filter -> method() 


// let numbers = [10 , 20 , 30 , 40 , 50]

// let filteredArray = numbers.filter(function(item){
//     if(item >=80){
//         return true
//     }else{
//         return false
//     }
// })

// console.log(numbers)
// console.log(filteredArray)

// 4. reduce -> method() -> HW -> MDN/W3SCHOOLS










