export class Projectile {
    constructor(game,speed,damage){
        this.game = game;
        this.width = 7;
        this.height = 8;
        this.speed = speed;
        this.damage = damage;
        this.yOrigin = (this.game.player.height + this.game.player.y - this.height);       //sets player coords at point of creation
        this.xOrigin = (1.5*this.game.player.width + this.game.player.x - this.width/2); 
        this.y = this.yOrigin-8; //set starting point to just above player 
    }

    shoot(){
        
    }
    draw(context,color){
            context.beginPath();
            context.rect(this.xOrigin, this.y, this.width, this.height);
            context.fillStyle = color;
            context.fill();
            context.closePath();
            this.y -= this.speed;
    }

    collision(enemy) {  
        if(this.xOrigin <= enemy.x + enemy.width &&
            this.xOrigin + this.width >= enemy.x &&
            this.y <= enemy.y + enemy.height &&
            this.y + this.height >= enemy.height) {
                console.log("projectile");
                enemy.damage(this.damage);
                return true;
            }
            return false;
    }
}


