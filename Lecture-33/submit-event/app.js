




// let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , ()=>{

//     console.log("form submitted")
// })


// ------------------

// let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , (event)=>{
//     event.preventDefault(); //refresh nhi hoga
//     console.log("form submitted")
// })

// ----------------------------


let formEl = document.querySelector('form');

formEl.addEventListener('submit' , (event)=>{
    event.preventDefault();
    // console.log(formEl.elements)
    // console.log(formEl.elements[0])
    // console.log(formEl.elements[1])
    console.log(formEl.elements[0].value)
    console.log(formEl.elements[1].value)
})



