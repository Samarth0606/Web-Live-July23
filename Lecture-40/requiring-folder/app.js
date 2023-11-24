// let jaanwar = require('./animal'); //folder

// let {cat,dog} = jaanwar ;

// console.log(jaanwar);

let {cat:catty,dog:doggy} = require('./animal'); //folder

// console.log(cat)
// console.log(dog)

console.log(catty.cat())
console.log(doggy.dog())