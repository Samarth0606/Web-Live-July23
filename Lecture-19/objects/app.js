
// let todo = {}
// unordered DS
// let todo = {
//     // properties => key : value
//     //key : value
//     title : "buy chocolate" , //comma seperation
//     completed : false ,
//     ande : "nahi khae" ,
//     mickeymouses : 100 ,
//     5 : true , 
//     s5 : 300 ,
//     e5 : 300
// }

// console.log(todo)
// console.log(todo['title'])
// console.log(todo['5'])
// console.log(todo[5])

// 1. never use numbers as keys
// 2. donot start with numbers
// 3. BTS the key are stored as string and can be accessible like array but using a string only. //exception -> numbers
// 4. do we access objects like this way -> ❌
// 5. we always use dot notation (.) 


// DOT notation

let todo = {
    title : "buy chocolate" , //comma seperation
    completed : false ,
    ande : "nahi khae" ,
    mickeymouses : 100 
}


// console.log(todo);

// console.log(todo.ande)
// console.log(todo['ande'])
// console.log(todo.title)
// console.log(todo['title'])


// console.log(todo['completed'])
console.log(todo.completed) //getter
todo.completed = true; //setter 
todo['completed'] = 'hello'; //setter 
console.log(todo.completed)


console.log(typeof(todo));


//------wrong ways----------
// console.log(todo['0'])
// console.log(todo['1'])
// console.log(todo.0)















