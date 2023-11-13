
// console.log($)//-> $ == jQuery



// selection --------------
// let h1 = $('h1');  //document.querySelectorAll('h1)

// ID
// let iddd = $('#sam');  //document.querySelectorAll('h1)

// CLASS
// let kilaas = $('.samarth');  //document.querySelectorAll('h1)

// let para = $('p'); //select p

// ---------------------------------------------
// manipulation ---------------

// para.css('color' , 'red')
// para.css('border' , '2px solid black')
// para.css('background-color' , 'yellow')

// better approach
// para.css({
//     color:'blue',
//     border:'5px solid green',
//     fontSize : '40px',
//     backgroundColor : "pink"
// })

// ---------------------------------------------
// accessing text
// GETTER
// console.log(para.text()) //brainless -> TEXTCONTENT

// SETTER
// para.text('FILMO KE SAARE HERO MERE AAGE HAI ZEROO')

// getter  + setter
// console.log(para.html()) //-> INNERHTML

// ---------------------------------------------

// attributes -> attr()

// let inp = $('input');
// getAtribute //getter
// console.log(inp.attr('type'))
// console.log(inp.attr('id'))

// setAtribute //setter -> 2 (jis , jisse)
// inp.attr('type' , 'color')
// inp.attr('type' , 'date')
// inp.attr('type' , 'checkbox')


// ---------------------------------------------
// selecting first and last element
// let lis = $('ul li');
// let lis = $('ul li').first();
// lis.css('color' , 'red')

// let liss = $('ul li').last();
// liss.css('color' , 'green')


// ---------------------------------------------
//getter + setter
// .val()

// let inp = $('input');

// console.log(inp.val()); //getter
// inp.val('mai nhi bataunga'); //setter

// --------------------------------------------

// class attributes
// CLASSLIST.ADD  , CLASSLIST.REMOVE


let para = $('p'); //select p

// add
// para.addClass('a')
para.addClass('a b c') //yes
// para.addClass('a','c') //no

// remove
// para.removeClass('a')
// para.removeClass('a b c')

// toggle
// para.toggleClass('a')
// para.toggleClass('a b')

// hasClass
console.log(para.hasClass('a'))  //true