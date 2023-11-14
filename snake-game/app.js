
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let cellSize = 50;
let boardWidth = 1000;
let boardHeight = 600;

let snakeCells = [ [0,0]  ];

let direction = 'right';

let foodCells = generateRandomCells(); // [x,y]

let gameOver = false;

let score = 0;

document.addEventListener('keydown' , function(e){
    console.log(e)
    if(e.key === 'ArrowLeft'){direction = 'left'}
    else if(e.key === 'ArrowUp'){direction = 'up'}
    else if(e.key === 'ArrowDown'){direction = 'down'}
    else if(e.key === 'ArrowRight'){direction = 'right'}
})


function draw(){

    if(gameOver === true){
        clearInterval(intervalId);
        ctx.fillStyle = 'red'
        ctx.font = '50px sans-serif'
        ctx.fillText('Game Over!!' , 200,200)
        return;
    }

    ctx.clearRect(0,0,boardWidth,boardHeight);
    // draw snake
    for(let item of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(item[0] , item[1] , cellSize ,cellSize );
        ctx.strokeStyle = "golden"
        ctx.strokeRect(item[0] , item[1] , cellSize ,cellSize );
    }
    // draw food
    ctx.fillStyle = "yellow"
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize ,cellSize )

    // draw score
    ctx.font = '22px cursive'
    ctx.fillText(`Score: ${score}` , 30 , 30);

}

function update(){
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    let newHeadX;
    let newHeadY;
    // according the direction
    if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0 || checkmate(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY-cellSize;
        if(newHeadY < 0 || checkmate(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    else if(direction === 'down'){
        newHeadX = headX;
        newHeadY = headY+cellSize;
        if(newHeadY === boardHeight || checkmate(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    else if(direction==='right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || checkmate(newHeadX,newHeadY)){
            gameOver = true;
        }
    }
    
    snakeCells.push([newHeadX ,newHeadY]);

    if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
        foodCells = generateRandomCells();
        score+=1;
    }
    else{
        snakeCells.shift()
    }

    
}

function generateRandomCells(){
    return [
        Math.round((Math.random()*(boardWidth - cellSize))/cellSize)*cellSize , //x
        Math.round((Math.random()*(boardHeight - cellSize))/cellSize)*cellSize  //y
    ]
}

// khud ko kaatoge to marr jaoge
function checkmate(newHeadX , newHeadY ){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}


let intervalId = setInterval(function(){
        update();
        draw();
} , 200)

