


let h1 = document.querySelector('h1')
let inpEl = document.querySelector('input')


inpEl.addEventListener('input' , (event)=>{
    h1.innerText = event.target.value
})









