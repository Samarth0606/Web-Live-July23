
// ------------------- step 1 -------------------
// let canvas = document.querySelector('canvas');//board
// let ctx = canvas.getContext('2d'); //brush

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;

// // snake ko draw
// function draw(){}

// // harr thodi der baad snake update hoga
// function update(){}


// setInterval(function(){
//     update();
//     draw();
// } , 200)



// ------------------- step 2 -------------------

// let canvas = document.querySelector('canvas');//board
// let ctx = canvas.getContext('2d'); //brush

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;

// // snake ke cells jiski vajah se snake rectangle bann rha hai
// // let snakeCells = [ [0,0] , [50,0] ,[100,0] ]
// let snakeCells = [ [0,0] ];

// // snake ko draw
// function draw(){
//     // erase poori board
//     ctx.clearRect(0 , 0 , boardWidth , boardHeight);
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = 'red';
//         ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
//     }
// }

// // harr thodi der baad snake update hoga
// function update(){
//     let headX = snakeCells[snakeCells.length - 1][0];
//     let headY = snakeCells[snakeCells.length - 1][1];

//     let newHeadX = headX + cellSize;
//     let newHeadY = headY;

//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift();
// }

// setInterval(function(){
//     update();
//     draw();
// } , 200)


// ------------------- step 3 (we have to do it) -------------------

let canvas = document.querySelector('canvas');//board
let ctx = canvas.getContext('2d'); //brush

let cellSize = 50;
let boardHeight = 600;
let boardWidth = 1000;

// snake ke cells jiski vajah se snake rectangle bann rha hai
let snakeCells = [ [0,0] , [50,0] , [100,0] ]
// let snakeCells = [ [0,0] ];

// snake ko draw
function draw(){
    // erase poori board
    ctx.clearRect(0 , 0 , boardWidth , boardHeight);
    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
    }
}

// harr thodi der baad snake update hoga
function update(){
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    let newHeadX = headX + cellSize;
    let newHeadY = headY;

    snakeCells.push([newHeadX , newHeadY]);
    snakeCells.shift();
}

setInterval(function(){
    update();
    draw();
} , 200)








