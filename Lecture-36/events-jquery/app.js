

// $('button').click(function(){
//     console.log("hello")
// })

// queryselectorall
$('ul li').click(function(e){
    // console.log(e)
    // console.log(e.target) 
    // e.target.css('color' , 'red') //wrong

    // jquery waala this -> target bas
    $(this).css('color' , 'red')
})


// keyup , keydown

// $('input').keyup(function(){
//     console.log("hello")
// })

// ----------------------------------------------

// // addEeventlistener()
// $('button').on('click' , function(){
//     // console.log('hello')
//     let ans = $('input').val()
//     console.log(ans)
// })



// ------------------------------------------
//effects


$('#fadeIn').on('click' , function(){
    $('#container').fadeIn()
})
$('#fadeOut').on('click' , function(){
    $('#container').fadeOut()
})
$('#fadeToggle').on('click' , function(){
    $('#container').fadeToggle()
})


// slideIn , slideOut -> effects = docs refer







