


// appendChild()
let section = document.querySelector('section')


let h2 = document.createElement('h2');
let p = document.createElement('p');


h2.innerText = 'samarth'
p.innerText = 'galori bina chutney kaise bani'


// section.appendChild(h2) //right
// section.appendChild(h2 , p) //wrong -> mutliple
// section.appendChild("hi") //wrong -> string

// -------------------------
// append() -> mutiple and string also accepted

// section.append(h2)
// section.append(h2 , p) //right 
// section.append("hello from chamakadh") //right 
 //right 

// ---------------------------

// starting mei add 
// prepend() -> start -> multiple -> string 

// section.prepend(`<h1>hello from chamakadh</h1>`)
// section.prepend(p , h2)
// section.prepend(p)
// section.prepend(h2)

// ---------------------------
section.before(h2)
section.after(h2)



//PTR -> 1 ELEMENT ya to append hoga ya fir prepend dono ek saath nhi ho sakta
