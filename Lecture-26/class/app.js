


// constructor function
// function Person(naam, umar){
//     this.username = naam;
//     this.age = umar;  
// }

// Person.prototype.getFullName = function(){
//    return (`Naam is ${this.username}`)
// }

// Person.prototype.printName = function(){
//     console.log(`my name is ${this.username}`)
// }

// let person1 = new Person("sam" , 124);
// console.log(person1);


// ------------------------------------------------

// class syntax

class Person{
    constructor(naam, umar){
        this.username = naam;
        this.age = umar;  
    }
    printName(){
        console.log(`my name is ${this.username}`)
    }
    getFullName(){
        return (`Naam is ${this.username}`)
    }
}

let person2 = new Person("jatin" , 22);
console.log(person2)





