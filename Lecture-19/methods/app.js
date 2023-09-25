


// let person = {
//     // property 
//     naam : "samarth vohra",
//     city : "new delhi" ,

//     //methods -> functions
//     describe : function describe(){
//         console.log("hi my name is samarth")
//     }
// }

// console.log(person);

// console.log(person.naam);
// console.log(person.city);
// console.log(person.describe); //wrong
// console.log(person.describe()); //right


// --------------------------------------


// let person = {
//     // property 
//     naam : "samarth vohra",
//     city : "new delhi" ,

//     //methods -> functions
//     // describe : function describe(){
//     // describe : function desc(){
//     describe : function (){
//         console.log("hi my name is samarth")
//     }
// }


// describe(); //wrong
// person.describe(); //right
// person.desc(); //wrong
// desc(); //wrong


// --------------------------------

// let personteriyyadsataihaipalpalmujetadpatihaiwelcomebackdeer = {
let person = {
    // property 
    naam : "samarth vohra",
    city : "new delhi" ,

    //methods -> functions which are described/written inide the object
    describe : function (){
        // console.log(a)
        console.log(`hi my name is samarth vohra`)
        console.log(`hi my name is ${person.naam}`)
        console.log(`hi my name is ${this.naam}`)
        // return person;
    }
}

let ans = person.describe(); //by defualt undefined is returned
// let ans = person.describe(10); //by defualt undefined is returned
console.log(ans);





