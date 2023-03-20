
export class Enemy{
    constructor(height,width,x,y,speed,health){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.counter = 0;
        this.direction = "right";
        this.health = health;
    }

    update(){
        
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
    draw(context){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();        
    }

    damage(damage) {
        this.health -= damage;
        console.log(this.health);
    }
}