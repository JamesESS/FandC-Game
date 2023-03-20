import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { ProjectileHandler } from './projectilehandler.js';
import { EnemyHandler } from './enemyhandler.js';

window.addEventListener('load', function(){
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 650;

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
        
        alert("Game Over\nYour score: "+this.score);
        document.location.reload;
        
    }
}

const game = new Game(canvas.width, canvas.height);
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);

}
animate();
});

