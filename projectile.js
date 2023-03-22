export class Projectile {
    constructor(game,speed,damage,projectileDirection,upgrade){
        this.game = game;
        this.projectileDirection = projectileDirection;
        this.width = 7;
        this.height = 8;
        this.speed = speed;
        this.damage = damage;
        this.upgrade = upgrade;
        this.yOrigin = (this.game.player.height + this.game.player.y - this.height);       //sets player coords at point of creation
        this.xOrigin = (1.5*this.game.player.width + this.game.player.x - this.width/2); 
        this.y = this.yOrigin-8; //set starting point to just above player 
        // console.log(("projectile constructor upgrade status"),this.upgrade);
        /* if (this.upgrade == 0){
            // console.log("basic shot");
            this.reloadSpeed = 10;
            this.speed = 5;
            this.damage = 1;
            this.color = "white"
        } */
        /* laser projectile */
        /* else if (this.upgrade == 1){
            // console.log("upgrade 1");
            this.reloadSpeed = 1;
            this.speed = 5;
            this.damage = 0.25;
            this.color = "orange"
        } */
        /* high damage projectile */
        /* else if (this.upgrade == 2){
            // console.log("upgrade 2");
            this.reloadSpeed = 12;
            this.speed = 3;
            this.damage = 3;
            this.color = "blue"
        } */
        /* multishot projectile */
        /* else if (this.upgrade == 3){
            // console.log("upgrade 3");
            this.reloadSpeed = 12;
            this.speed = 3;
            this.damage = 0.5;
            this.color = "aquamarine"
        } */
    }

    draw(context,color){
            if (this.projectileDirection == -4){
                context.beginPath();
                context.rect(this.xOrigin, this.y, this.width, this.height);
                context.fillStyle = color;
                context.fill();
                context.closePath();
                this.y -= this.speed;
            }
            else {
                context.beginPath();
                context.rect(this.xOrigin, this.y, this.width, this.height);
                context.fillStyle = color;
                context.fill();
                context.closePath();
                this.y -= this.speed;
                this.xOrigin += this.projectileDirection;
            }
    }

    collision(enemy) {  
        if(this.xOrigin <= enemy.x + enemy.width &&
            this.xOrigin + this.width >= enemy.x &&
            this.y <= enemy.y + enemy.height &&
            this.y + this.height >= enemy.height) {
                // console.log("projectile");
                enemy.damage(this.damage);
                return true;
            }
            return false;
    }
}


