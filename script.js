const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/* Set up player avatar and center */
let playerWidth = 60;       //set base of triangle
let playerHeight = 2*playerWidth; //set height of triangle
let playerPositionX = (canvas.width - playerWidth)/2 - playerWidth; //Start triangle in middle of x
let playerPositionY = canvas.height - 1.5*playerHeight; //Start triangle at bottom of y

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

function keyDownHandler(e) {
    let keyPress = e.key;
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      rightPressed = true;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      leftPressed = true;
    }
    else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        upPressed = true;
    }
    else if (e.key === "Down" || e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        downPressed = true;
    }
  }
  
  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      rightPressed = false;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      leftPressed = false;
    }
    else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        upPressed = false;
    }
    else if (e.key === "Down" || e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        downPressed = false;
    }
  }
  

 function drawPlayer() {
    ctx.beginPath();
    ctx.moveTo(playerWidth + playerPositionX, 1.5*playerHeight + playerPositionY);  //bottom left corner of triangle
    ctx.lineTo((playerWidth + 2) + playerPositionX, 1.5*playerHeight + playerPositionY); //smooth out bottom corners sligtly
    ctx.lineTo(1.5*playerWidth + playerPositionX, 1.35*playerHeight + playerPositionY);  //give triangle indent
    ctx.lineTo((2*playerWidth - 2) + playerPositionX, 1.5*playerHeight + playerPositionY);  //smooth out bottom corners slightly
    ctx.lineTo(2*playerWidth + playerPositionX, 1.5*playerHeight + playerPositionY);  //bottom right corner of triangle
    ctx.lineTo(1.5*playerWidth + playerPositionX, playerHeight + playerPositionY);  //tip of triangle
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
 } 
 
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(); 
    if(rightPressed) {
        playerPositionX += 7;
        if (playerPositionX + 2*playerWidth > canvas.width){
            playerPositionX = canvas.width - 2*playerWidth;
        }
    }
    else if(leftPressed) {
        playerPositionX -= 7;
        if (playerPositionX < 0-playerWidth){
            playerPositionX = 0-playerWidth;
        }
    }

    else if(downPressed) {
        playerPositionY += 7;
        console.log(canvas.height + " " + playerPositionY);
        if (playerPositionY + 1.5*playerHeight > canvas.height){
            playerPositionY = canvas.height - 1.5*playerHeight;
            
        }
    }
    else if(upPressed) {
        playerPositionY -= 7;
        if (playerPositionY < 0 - playerHeight){
            playerPositionY = 0 - playerHeight;
        }
    }
}
  

setInterval(draw, 10);