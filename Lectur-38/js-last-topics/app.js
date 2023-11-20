// const person = {
//     first:"samarth" , 
//     favColor:"blue",
//     last:"vohra"
// }

// console.log(person)

// can i add a property? -> YESSSS
// person.age = 39;

// console.log(person)

// can i change the existing value ? -> YESS

// person.first = "ratnesh"
// console.log(person)

//  can i delete a property? -> YESSS
// delete person.age;
// delete person.last;
// delete person.favColor;
// console.log(person)

// -------------------------------------------


// SPREAD OPERATOR

// array par spread
// let arr = [10,20,30,40,50];
// let arr2 = [80,90,100];


// concationation (jodhna)
// let ans = arr.concat(arr2)
// console.log(ans)

// modern -> most widely used

// arr2 = [...arr ,80,90,100];

// let anss = [...arr , ...arr2];

// console.log(arr2)
// console.log(anss)

// -----------------------

// object par spread
// let obj = {
//     l: "sam",
//     m: "vohra" ,
//     n : 10
// }

// let obj1 = {
//     ...obj , 
//     age: 45
// }

// console.log(obj)
// console.log(obj1)

// obj1.l = 200;

// console.log(obj)
// console.log(obj1)

// ----------------------


// destructuring in array
// let fruits = ['apple' , 'mango' , 'pineapple' , 'strawberry'];
// let fruits = ['apple' , 'mango' , 'pineapple' , 'strawberry' , 'lichi'];

// bekaar
// console.log(fruits[2]);
// console.log(fruits[0]);

// modern way
// let [a,b,c,d] = fruits;
// let [a,b, ,d] = fruits;
// let [a,b,c,d,e="banana"] = fruits; //default
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// -------------------------------

// destructuring in objects

const car = {
    name: 'bm-babloo',
    price: 150 
}

// normal way
console.log(car.name)
console.log(car.price)

// modern

// let  {n , p} = car; //wromg
// let  {name , price} = car; //right

// let  {name:badalahuanaam , price} = car; 
let  {name:badalahuanaam="samkicar" , price} = car; //default

console.log(name) //no 
console.log(badalahuanaam) //yes
console.log(price)





