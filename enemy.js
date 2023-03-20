
export class Enemy{
    constructor(height,width,x,y,speed,health,color){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.counter = 0;
        this.direction = "right";
        this.health = health;
        this.color = color;
    }

    update(){
        /* movementfor basic enemy and wounded healthy enemy*/
        if (this.health == 1 && this.speed == 2){
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
        /* movement for healthy enemy until it reaches 1 hp*/
        else if(this.health == 3){
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
        /* movement for dangerous enemy */
        else {
            this.y += this.speed/2
        if (this.x < 390 && this.direction == "right"){
            this.x += 2;
            this.counter++;
        }
        else this.direction = "left";
        if (this.x > 10 && this.direction == "left"){
            this.x -= 2;
            this.counter--;
        }
        else this.direction = "right";
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
        console.log(this.health);
    }
}