


const PI = 3.145;

// const ans1 = (num)=>{
//     return num*num;
// }
        // or
const ans1 = num => num*num;


const ans2 = (a,b) => a+b;

console.log(PI)
console.log(ans1(7))
console.log(ans2(3,8))

// when u donot export anyhting from ur file by default empty object is being sent

// module.exports = {} //by default

// module.exports = { 
//     PI : PI , 
//     ans1 : ans1 , 
//     ans2 : ans2
// } 

// if my key and value are the ame then i can ignore writing my (: value) part
// module.exports = { 
//     PI , 
//     ans1 , 
//     ans2 
// } 


// module.exports = { 
//     PII : PI , 
//     ans1 , 
//     ans2 
// } 


module.exports = "samarth" 