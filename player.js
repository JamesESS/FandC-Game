/* Set up player avatar and center */

//let playerWidth = 60;       //set base of triangle
//let playerHeight = 2*playerWidth; //set height of triangle (120)
//let playerPositionX = (canvas.width - playerWidth)/2 - playerWidth; //Start triangle in middle of x ({400-60}/2-60)=170
//let playerPositionY = canvas.height - 1.5*playerHeight; //Start triangle at bottom of y (650 - (120*1.5))=470

export class Player {
    constructor(game){
        this.width = 20;
        this.height = 2*this.width;
        this.game = game;
        this.x = (this.game.width - this.width)/2-this.width; //set starting point to middle of x axis
        this.y = this.game.height-1.55*this.height; //set starting point to bottom of y axis
        this.xSpeed = 0;
        this.xSpeedMax = 4;
        this.ySpeed = 0;
        this.ySpeedMax = 3;
        this.shooting = false;
        this.health = 3;
        this.invuln = false;
        this.invulnCounter = 50;
        this.color = "white";
        /* this.projectileWidth = 7;
        this.projectileHeight = 20; */
    }
    update(input){
        this.x += this.xSpeed
        this.y += this.ySpeed
        if(input.includes('ArrowRight')||input.includes('Right')||input.includes('d')||input.includes('D')) this.xSpeed = this.xSpeedMax;  //if right pressed move right at maxspeed
        else if (input.includes('ArrowLeft')||input.includes('Left')||input.includes('a')||input.includes('A')) this.xSpeed = -this.xSpeedMax; //same deal
        else this.xSpeed = 0; //if neither left or right pressed stop moving
        if(input.includes('ArrowUp')||input.includes('Up')||input.includes('w')||input.includes('W')) this.ySpeed = -this.ySpeedMax;  //same as above but on y axis
        else if(input.includes('ArrowDown')||input.includes('Down')||input.includes('s')||input.includes('S')) this.ySpeed = this.ySpeedMax;
        else this.ySpeed = 0;
        if (this.x + 2*this.width > this.game.width) this.x = this.game.width - 2*this.width;  //sets right boundry barrier
        if (this.x < 0 - this.width) this.x = 0 - this.width;       //left boundry
        if (this.y < 0 - this.height) this.y = 0 - this.height;  //top boundry
        if (this.y + 1.5*this.height > this.game.height) this.y = this.game.height - 1.5*this.height;  //bottom boundry
        if (input.includes('Space')||input.includes(" ")) {this.shooting = true; 
            // console.log("shooting");
        }
        else this.shooting = false;
    }
    draw(context){
        /* context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "white";
        context.fill();
        context.closePath(); */
        if (this.invuln && this.invulnCounter > 0) {
            this.color = "blue";
            this.invulnCounter--;   
            // console.log(this.invulnCounter);
        }
        else {
            this.color = "white";
            this.invulnCounter = 500;
            this.invuln = false;
        }
        context.beginPath();
        context.moveTo(this.width + this.x, 1.5*this.height + this.y);  //bottom left corner of triangle
        context.lineTo((this.width + 2) + this.x, 1.5*this.height + this.y); //smooth out bottom corners sligtly
        context.lineTo(1.5*this.width + this.x, 1.35*this.height + this.y);  //give triangle indent
        context.lineTo((2*this.width - 2) + this.x, 1.5*this.height + this.y);  //smooth out bottom corners slightly
        context.lineTo(2*this.width + this.x, 1.5*this.height + this.y);  //bottom right corner of triangle
        context.lineTo(1.5*this.width + this.x, this.height + this.y);  //tip of triangle
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.strokeRect(this.width + this.x + 2,this.height + this.y,this.width -4,this.height/2);  //draw hitbox around ship
    }

    collisionRough(enemy){
        if(/* this.x <= enemy.x + enemy.width &&
            this.x + this.width/2 >= enemy.x &&
            this.y <= enemy.y + enemy.height &&
            this.y + this.height >= enemy.height && */
            this.width + this.x + 2 <= enemy.x + enemy.width &&
            this.width + this.x + this.width/2 >= enemy.x &&
            this.height + this.y <= enemy.y + enemy.height &&
            this.height + this.y + this.height/2 >= enemy.height &&
            !this.invuln) {
                // console.log("projectile");
                // enemy.damage(this.damage);
                // this.collisionFine(enemy);
                this.health --;
                this.invuln = true;
                // console.log(this.invuln);
                 
            }
        if (this.health < 0){
            this.game.gameOver();
        }
    }

  /*   collisionFine(enemy){

    } */
}