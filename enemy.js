
export class Enemy{
    constructor(height,width,x,y,speed,health,color,player){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.counter = 0;
        this.direction = "right";
        this.health = health;
        this.color = color;
        this.player = player;
        this.playerX = 1.5*this.player.width + this.player.x + this.width/1.8; //find center point of player sprite and match with center of enemy
        }

    update(){
        /* movementfor basic enemy and wounded healthy enemy*/
        if (Math.ceil(this.health) == 1 && this.speed == 2){  //round health up to nearest integer to avoid weird behaviour from upgrade projectiles;
        this.y += this.speed
        if (this.counter<15 && this.direction == "right"){
            this.x += 2;
            this.counter++;
        }
        else this.direction = "left";
        if (this.counter>-15 && this.direction == "left"){
            this.x -= 2;
            this.counter--;
        }
        else this.direction = "right";
        }
        /* movement for healthy enemy until it less than 2 hp*/
        else if(this.health >= 2){
            this.y += 0.8 * this.speed
        if (this.counter<15 && this.direction == "right"){
            this.x += 0.5;
            this.counter++;
        }
        else this.direction = "left";
        if (this.counter>-15 && this.direction == "left"){
            this.x -= 0.5;
            this.counter--;
        }
        else this.direction = "right";
        }
        /* movement for dangerous enemy - track player and accelerate when aligned*/
        else {
            this.y += this.speed/2
            if ((1.5*this.player.width + this.player.x + this.width/1.8) - 8 - this.x > 10) this.x ++;  //check if enemy in line with player 
            else if ((1.5*this.player.width + this.player.x + this.width/1.8) - 8 - this.x < -10) this.x --;  
            else this.speed += 0.3;     //if enemy in line acelerate
            // console.log(((1.5*this.player.width + this.player.x + this.width/1.8) - 8 - this.x))
        }
    }
    draw(context){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();        
    }

    damage(damage) {
        this.health -= damage;
        // console.log(this.health);
    }
}