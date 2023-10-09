





function counter(){
    let count = 0;

    return {
        getCount: function(){
            return count;
        },
        increment: function(){
            count ++ 
        },
        decrement: function(){
            count --
        },
        reset: function(){
            count = 0
        }
    }

}

let counter1 = counter();
console.log(counter1); //gets the methods only not the count variable
// let counter1 = {
//     getCount: function(){
//         return count;
//     }
// }
// console.log(count); //error throw

// console.log( counter1.getCount() ); //0

// counter1.increment(); //-> 1
// counter1.increment(); //-> 2

// console.log( counter1.getCount() ); //2

// counter1.increment(); //-> 3
// counter1.decrement(); //-> 2
// counter1.increment(); //-> 3

// console.log( counter1.getCount() ); //3

// counter1.reset(); //-> 0

// console.log( counter1.getCount() ); //0



// ------------------------
// counter1.increment();
// counter1.increment();
// let ans = counter1.getCount() - 1
// console.log(ans)