let fs = require('fs'); //object

let data = "my name is samarth thanks alot";

// create -> writeFile()
//4 arguments
// fs.writeFile('abc.txt' , data , {} , ()=>{} ) 

// fs.writeFile('abc.txt' , data , 
//     { //optional part
//         encoding:'utf-8',
//         flag:'w'
//     } , 
//     (err)=>{
//         if(err){throw err}
//         console.log('file written successfully')
//     } 
// ) 

// fs.writeFile('abc.txt' , data , 
//     // { //optional part
//     //     encoding:'utf-8',
//     //     flag:'w'
//     // } , 
//     (err)=>{
//         if(err){throw err}
//         console.log('file written successfully')
//     } 
// ) 

// read -> readFile()
//3 arguments
// fs.readFile('def.txt' , {} , ()=>{} )

// fs.readFile('def.txt' , 
//     // {
//     //     encoding:"utf-8",
//     //     flag:'r'
//     // } , 
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data);
//     } 
// )

// --step1 to improve--
// fs.readFile('def.txt' , 
//     // {
//     //     encoding:"utf-8",
//     //     flag:'r'
//     // } , 
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data.toString()); //buffer->string
//     } 
// )
// --step2 to improve--
// fs.readFile('def.txt' , 
//     {
//         encoding:"utf-8",
//         flag:'r'
//     } , 
//     (err , data)=>{
//         if(err){throw err}
//         console.log(data); //buffer->string
//     } 
// )

// update -> appendFile()

// fs.appendFile('abc.txt' , ' bhaukaali' ,  
//     (err)=>{
//         if(err){throw err}
//         console.log("file edited successfully")
//     } 
// )



//delete -> unlink()

// fs.unlink('def.txt' , 
//     (err)=>{
//         if(err){throw err}
//         console.log("file delted successfully")
//     }
// )



