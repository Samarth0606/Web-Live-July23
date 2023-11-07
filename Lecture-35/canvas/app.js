
// white board
let canvas = document.querySelector('canvas');
// brush
let ctx = canvas.getContext('2d');


// draw rectangle
// ctx.fillRect(120,120,50,100); // -> x , y , w , h

// --------------------------------------------------------

// paint mei dip karo brush ko
// ctx.fillStyle = 'green';
// draw rectangle
// ctx.fillRect(120,120,50,100); // -> x , y , w , h

// --------------------------------------------------------

// outline dena
// ctx.strokeRect(150,150,100,100);

// --------------------------------------------------------

// brush ko dubao and color do
// ctx.strokeStyle = "purple"
// outline dena
// ctx.strokeRect(150,150,100,100);

// --------------------------------------------------------


// draw paths

// ctx.beginPath();
// ctx.moveTo(20,30);
// ctx.lineTo(120,130);
// ctx.lineTo(20,130)
// ctx.lineTo(20,30)
// ctx.lineTo(120,30)
// ctx.lineTo(120,95)
// ctx.strokeStyle = 'red'
// ctx.stroke();
// ctx.fillStyle = 'green'
// ctx.fill();
// ctx.closePath();

// ---------------------------------------------------------------

ctx.font = "28px sans-serif";
ctx.fillStyle = "orange"
ctx.fillText('samarth' , 50 , 75)


