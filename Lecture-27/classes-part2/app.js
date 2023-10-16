


// class Person{
//     constructor(naam , umar){
//         this.username = naam;
//         this.age = umar;
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `naam is ${this.username}`
//     }
// }


// let person1 = new Person('samarth' , 120);
// console.log(person1);
// console.log(person1.printName());
// console.log(person1.getName());

// ----------------------------------------------------
//  not one of the good ways (but correct hai)
// class Person{
//     constructor(naam , umar){
//         this.username = naam;
//         this.age = umar;
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `naam is ${this.username}`
//     }
// }

// class Student{
//     constructor(naam , umar){
//         this.username = naam;
//         this.age = umar;
//     }
//     printName(){
//         console.log(`my name is ${this.username}`)
//     }
//     getName(){
//         return `naam is ${this.username}`
//     }
// }

// let person2 = new Student('anand' , 23);
// console.log(person2);


// ----------------------------------------------------


class Person{
    constructor(naam , umar){
        this.username = naam;
        this.age = umar;
    }
    printName(){
        console.log(`my name is ${this.username}`)
    }
    getName(){
        return `naam is ${this.username}`
    }
}

class Student extends Person{
    constructor(naam , umar , rollNo){
        super(naam , umar); //parent
        this.rollnumber = rollNo;
    }
    printName(){
        console.log(`kaa hua ${this.username}`)
    }
    alag(){
        console.log('mai hu alag')
    }
}

let person3 = new Student('anshika' , 22 , 73);
console.log(person3);
console.log(person3.printName());
console.log(person3.alag());






