



let inpEl = document.querySelector('input');
let btnEl = document.querySelector('button');
let list = document.querySelector('#list');


btnEl.addEventListener('click' , function(e){
    let noteText = inpEl.value;

    let li = document.createElement('li');

    li.innerText = noteText;

    list.appendChild(li);

    inpEl.value = ""; //setter

    li.addEventListener('click' , (e)=>{
        // li.remove();
        e.target.remove();
    })
})













