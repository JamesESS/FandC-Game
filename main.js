import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { ProjectileHandler } from './projectilehandler.js';
import { EnemyHandler } from './enemyhandler.js';

window.addEventListener('load', function(){   //waits for page to load before starting
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 650;
let gameState = true;
let gameAr = [];
let gameOverTimer = 3000;
class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.projectileHandler = new ProjectileHandler(this);
        this.player = new Player(this);
        this.input = new InputHandler();
        this.enemyHandler = new EnemyHandler(this);
        this.backgound = new Background(this);
        this.score = setInterval((e) => {       //increases score by 100 every 4 seconds
            this.score += 100;
        },4000);
        this.score=0;
    }
    update(){
        this.player.update(this.input.keys);
    }
    draw(context){
        this.backgound.draw(context);
        this.player.draw(context);
        this.projectileHandler.draw(context);
        this.enemyHandler.draw(context,this.score);   
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "white";  
        ctx.fillText(String("Score: "+this.score),10,50);   //output score to top right of screen
        ctx.fillText(String("Health: "+this.player.health),300,50);
    }
    gameOver(){
        console.log("gameover");
        // alert("Game Over");
        gameState = false;
        // document.location.reload();
    }
}
let game = new Game(canvas.width, canvas.height)
// const game = new Game(canvas.width, canvas.height);
// gameStateHandler() ;
function animate(){
    if(gameState) {
    ctx.clearRect(0,0, canvas.width, canvas.height);
        /* game.update();
        game.draw(ctx); */
        gameAr[0].update();
        gameAr[0].draw(ctx);
        requestAnimationFrame(animate);
    }
    else {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height)
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("GAME OVER",20,canvas.height/2)
        ctx.font = "40px Comic Sans MS";
        ctx.fillText(String("NEW GAME IN "+Math.ceil(gameOverTimer/1000)),35,canvas.height/2 + 100);
        gameOverTimer -= 4;
        
        if(gameOverTimer <= 0){
            gameOverTimer = 3000;
            gameStateHandler();
        }
        requestAnimationFrame(animate);
    }
}

gameStateHandler();

function gameStateHandler() {
    
    if(gameState)
    {
        gameAr.push(game);
        animate();
    }
    else{
        // console.log("game over handler");
        gameAr.splice(0,1);
        gameState = true;
        game = new Game(canvas.width, canvas.height)
        gameAr.push(game);
        animate();
    }
}

function gameOverCountdown() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(0,0, canvas.width, canvas.height)
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("GAME OVER",20,canvas.height/2)
        ctx.font = "40px Comic Sans MS";
        ctx.fillText(String("NEW GAME "+gameOverTimer),30,canvas.height/2 + 100);
        gameOverTimer--;
}


});  //end of load event listener