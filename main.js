import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { ProjectileHandler } from './projectilehandler.js';
import { EnemyHandler } from './enemyhandler.js';

window.addEventListener('load', function(){   //waits for page to load before starting
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let highScore = 2000;
canvas.width = 400;
canvas.height = 650;
let gameState = true;
let game = 0;
let gameOverTimer = 3000;
class Game {
    constructor(width, height){
        this.width = width;  //save dimensions of canvas
        this.height = height;
        /* start up all constructors */
        this.projectileHandler = new ProjectileHandler(this);
        this.player = new Player(this);
        this.input = new InputHandler();
        this.enemyHandler = new EnemyHandler(this);
        this.backgound = new Background(this);  //just noticed background spelt wrong in variable too scared to change...
        this.score = setInterval((e) => {       //increases score by 100 every 4 seconds
            this.score += 100;
        },4000);
        this.score=0;
        //for debugging score gates are 1500,2500&5000 
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
        ctx.fillText(String("Score: "+this.score),10,50);   //output score to top left of screen
        ctx.fillText(String("Hi-Score: "+highScore),10,80); //output hiscore to top left of screen
        ctx.fillText(String("Lives: "+this.player.health),300,50); //output health to top right of screen
    }
    gameOver(){
        console.log("gameover");
        gameState = false;
        if(highScore < this.score) highScore = this.score;
    }
}

function animate(){
    if(gameState) {
    ctx.clearRect(0,0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    else {
        if(gameOverTimer <= 0){ //check if gameover countdown finished
            gameOverTimer = 3000;
            gameStateHandler();
        }
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height)
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("GAME OVER",20,canvas.height/2)
        ctx.font = "40px Comic Sans MS";
        ctx.fillText(String("NEW GAME IN "+Math.ceil(gameOverTimer/1000)),35,canvas.height/2 + 100); //outputs only thousand digit from gameovertimer
        gameOverTimer -= 4;      
        requestAnimationFrame(animate);
    }
}

gameStateHandler();

function gameStateHandler() {
    if(gameState)
    {
        game = new Game(canvas.width, canvas.height)
        console.log("game start");
        animate();
    }
    else{
        console.log("game over handler");
        game = undefined;
        game = new Game(canvas.width, canvas.height)
        gameState = true;
    }
}
});  //end of load event listener