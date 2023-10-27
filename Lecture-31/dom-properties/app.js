





// querySelector

let p = document.querySelector('p');

//innerText -> getter + setter
console.log(p.innerText);  // brainful -> this can read css(aware of the styling)

//textContent -> getter + setter
console.log(p.textContent);  //brainless -> cannot read css(unaware of the styling)

// innerHTML -> getter + setter
console.log(p.innerHTML); //brainful -> READS CSS  + shows THE TAGS TOO


// ---------------------------------------------------------
//setter
p.innerText = "hello i am bhukaali baba"

p.textContent = "hello i <h1>am bhukaali</h1> baba"

p.innerHTML = "hello i <h1>am bhukaali</h1> baba"



