
// var b = 20;
// function a(){
//     console.log(b);
// }

// a();


// --------------------

// function outer(){
//     var b = 10;

//     inner();
//     function inner(){
//         console.log(b);
//     }
// }

// outer();

// ---------------

var a = 100;

function outer(){
    var b = 10;

    inner();
    function inner(){
        var b = 1000;
        console.log(b);
    }

    console.log(b);
}

outer();

// -------------------

// function outer(){
//     var b = 10;

//     // inner();
//     // function inner()
//     {
//         var b = 1000;
//         console.log(b);
//     }
    
//     console.log(b);
// }

// outer();





















