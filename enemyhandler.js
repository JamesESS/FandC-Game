import {Enemy} from './enemy.js';

export class EnemyHandler {
    constructor(game){
        this.game = game;
        this.basicEnemies = [];
        this.healthyEnemies = [];
        this.dangerousEnemies = [];
        this.enemySpawnTimer = 2000;
        this.color = "green";
        setInterval((e) => { 
            this.switch = true;
            this.enemyGenerator();
        },this.enemySpawnTimer);  //spawn new set of enemies
    }
        //spawn new set of enemies every 1800(this.enemySpawnTimer) miliseconds
    enemyGenerator(){
        this.speed = 2 /* + Math.floor(this.game.score/2000) */;
        this.health = 1 /* + Math.floor(this.game.score/1000) */;
        if (this.game.score<1500) {
            this.basicEnemy00 = new Enemy(10,20,10,5,this.speed,this.health,this.color);       
            this.basicEnemy01 = new Enemy(10,20,60,-10,this.speed,this.health,this.color);
            this.basicEnemy02 = new Enemy(10,20,110,5,this.speed,this.health,this.color);
            this.basicEnemy03 = new Enemy(10,20,260,-10,this.speed,this.health,this.color);
            this.basicEnemy04 = new Enemy(10,20,310,5,this.speed,this.health,this.color);
            this.basicEnemy05 = new Enemy(10,20,360,-10,this.speed,this.health,this.color);
            this.basicEnemies.push(this.basicEnemy00);
            this.basicEnemies.push(this.basicEnemy01);
            this.basicEnemies.push(this.basicEnemy02);
            this.basicEnemies.push(this.basicEnemy03);
            this.basicEnemies.push(this.basicEnemy04);
            this.basicEnemies.push(this.basicEnemy05);
            if (this.basicEnemies.length > 30) this.basicEnemies.splice(0,6);       //seemed easier than removing based on position in canvas. speed of enemies set such that 30(five rows of 6) will never been on screen at same time anyway
        }
        else if (this.game.score < 2500) {
            this.basicEnemy00 = new Enemy(10,20,10,5,this.speed,this.health,this.color);       
            this.basicEnemy01 = new Enemy(10,20,60,-10,this.speed,this.health,this.color);
            this.basicEnemy02 = new Enemy(10,20,110,5,this.speed,this.health,this.color);
            this.basicEnemy03 = new Enemy(10,20,260,-10,this.speed,this.health,this.color);
            this.basicEnemy04 = new Enemy(10,20,310,5,this.speed,this.health,this.color);
            this.basicEnemy05 = new Enemy(10,20,360,-10,this.speed,this.health,this.color);
            this.basicEnemies.push(this.basicEnemy00);
            this.basicEnemies.push(this.basicEnemy01);
            this.basicEnemies.push(this.basicEnemy02);
            this.basicEnemies.push(this.basicEnemy03);
            this.basicEnemies.push(this.basicEnemy04);
            this.basicEnemies.push(this.basicEnemy05);
            if (this.basicEnemies.length > 30) this.basicEnemies.splice(0,6);
            this.healthyEnemies0 = new Enemy(30,30,180,-25,this.speed,3*this.health)
            this.healthyEnemies.push(this.healthyEnemies0);
            if (this.healthyEnemies.length > 5) this.healthyEnemies.splice(0,1)
            
        }
        else if(this.game.score<5000) {
            this.basicEnemy00 = new Enemy(10,20,10,5,this.speed,this.health,this.color);       
            this.basicEnemy01 = new Enemy(10,20,60,-10,this.speed,this.health,this.color);
            this.basicEnemy02 = new Enemy(10,20,110,5,this.speed,this.health,this.color);
            this.basicEnemy03 = new Enemy(10,20,260,5,this.speed,this.health,this.color);
            this.basicEnemy04 = new Enemy(10,20,310,-10,this.speed,this.health,this.color);
            this.basicEnemy05 = new Enemy(10,20,360,5,this.speed,this.health,this.color);
            this.basicEnemy10 = new Enemy(10,20,10,-30,this.speed,this.health,this.color);       
            this.basicEnemy11 = new Enemy(10,20,60,-45,this.speed,this.health,this.color);
            this.basicEnemy12 = new Enemy(10,20,110,-30,this.speed,this.health,this.color);
            this.basicEnemy13 = new Enemy(10,20,260,-30,this.speed,this.health,this.color);
            this.basicEnemy14 = new Enemy(10,20,310,-45,this.speed,this.health,this.color);
            this.basicEnemy15 = new Enemy(10,20,360,-30,this.speed,this.health,this.color);
            this.basicEnemies.push(this.basicEnemy00);
            this.basicEnemies.push(this.basicEnemy01);
            this.basicEnemies.push(this.basicEnemy02);
            this.basicEnemies.push(this.basicEnemy03);
            this.basicEnemies.push(this.basicEnemy04);
            this.basicEnemies.push(this.basicEnemy05);
            this.basicEnemies.push(this.basicEnemy10);
            this.basicEnemies.push(this.basicEnemy11);
            this.basicEnemies.push(this.basicEnemy12);
            this.basicEnemies.push(this.basicEnemy13);
            this.basicEnemies.push(this.basicEnemy14);
            this.basicEnemies.push(this.basicEnemy15);
            if (this.basicEnemies.length > 60) this.basicEnemies.splice(0,12);
            this.healthyEnemies0 = new Enemy(30,30,150,-40,this.speed,3*this.health,this.color)
            this.healthyEnemies1 = new Enemy(30,30,200,-40,this.speed,3*this.health,this.color)
            this.healthyEnemies.push(this.healthyEnemies0);
            this.healthyEnemies.push(this.healthyEnemies1);
            if (this.healthyEnemies.length > 10) this.healthyEnemies.splice(0,2)
            this.dangerousEnemies0 = new Enemy(20,10,10,-60,2*this.speed,this.health,"red")
            this.dangerousEnemies.push(this.dangerousEnemies0);
            if (this.dangerousEnemies.length > 5) this.dangerousEnemies.splice(0,1)
        }
        else /* if(this.game.score<7000) */ {
            this.basicEnemy00 = new Enemy(10,20,10,5,this.speed,this.health,this.color);       
            this.basicEnemy01 = new Enemy(10,20,60,-10,this.speed,this.health,this.color);
            this.basicEnemy02 = new Enemy(10,20,110,5,this.speed,this.health,this.color);
            this.basicEnemy03 = new Enemy(10,20,260,5,this.speed,this.health,this.color);
            this.basicEnemy04 = new Enemy(10,20,310,-10,this.speed,this.health,this.color);
            this.basicEnemy05 = new Enemy(10,20,360,5,this.speed,this.health,this.color); 
            this.basicEnemy10 = new Enemy(10,20,10,-30,this.speed,this.health,this.color);       
            this.basicEnemy11 = new Enemy(10,20,60,-45,this.speed,this.health,this.color);
            this.basicEnemy12 = new Enemy(10,20,110,-30,this.speed,this.health,this.color);
            this.basicEnemy13 = new Enemy(10,20,260,-30,this.speed,this.health,this.color);
            this.basicEnemy14 = new Enemy(10,20,310,-45,this.speed,this.health,this.color);
            this.basicEnemy15 = new Enemy(10,20,360,-30,this.speed,this.health,this.color);
            this.basicEnemies.push(this.basicEnemy00);
            this.basicEnemies.push(this.basicEnemy01);
            this.basicEnemies.push(this.basicEnemy02);
            this.basicEnemies.push(this.basicEnemy03);
            this.basicEnemies.push(this.basicEnemy04);
            this.basicEnemies.push(this.basicEnemy05);
            this.basicEnemies.push(this.basicEnemy10);
            this.basicEnemies.push(this.basicEnemy11);
            this.basicEnemies.push(this.basicEnemy12);
            this.basicEnemies.push(this.basicEnemy13);
            this.basicEnemies.push(this.basicEnemy14);
            this.basicEnemies.push(this.basicEnemy15);
            if (this.basicEnemies.length > 60) this.basicEnemies.splice(0,12);
            this.healthyEnemies1 = new Enemy(30,30,200,-40,this.speed,3*this.health,this.color)
            this.healthyEnemies0 = new Enemy(30,30,150,-40,this.speed,3*this.health,this.color)
            this.healthyEnemies.push(this.healthyEnemies0);
            this.healthyEnemies.push(this.healthyEnemies1);   
            if (this.healthyEnemies.length > 10) this.healthyEnemies.splice(0,2)
            this.dangerousEnemies0 = new Enemy(20,10,10,-60,2*this.speed,this.health,"red")
            this.dangerousEnemies1 = new Enemy(20,10,390 ,-60,2*this.speed,this.health,"red")
            this.dangerousEnemies.push(this.dangerousEnemies0);
            this.dangerousEnemies.push(this.dangerousEnemies1);
            if (this.dangerousEnemies.length > 15) this.dangerousEnemies.splice(0,2)
        }
    }

    draw(context){


        this.basicEnemies.forEach((enemy) => {   //for each enemy within basic enemies check collision,draw,update loaction
            if(this.game.projectileHandler.collision(enemy)) {
                // console.log("enemy collision");
                if (enemy.health <= 0) {
                    this.basicEnemies.splice(this.basicEnemies.indexOf(enemy), 1);
                    this.game.score += 50;
                }
            }
            else {enemy.draw(context);
            this.game.player.collisionRough(enemy)
            enemy.update();}
        });        
        this.healthyEnemies.forEach((enemy) => {   //for each enemy within healthy enemies check collision,draw,update loaction
            if(this.game.projectileHandler.collision(enemy)) {
                // console.log("enemy collision");
                if (enemy.health <= 0) {
                    this.healthyEnemies.splice(this.healthyEnemies.indexOf(enemy), 1);
                    this.game.score += 100;
                }
            }
            else {enemy.draw(context);
            this.game.player.collisionRough(enemy)
            enemy.update();}
        });    
        this.dangerousEnemies.forEach((enemy) => {   //for each enemy within dangerous enemies check collision,draw,update loaction
            if(this.game.projectileHandler.collision(enemy)) {
                // console.log("enemy collision");
                if (enemy.health <= 0) {
                    this.dangerousEnemies.splice(this.dangerousEnemies.indexOf(enemy), 1);
                    this.game.score += 100;
                }
            }
            else {enemy.draw(context);
            this.game.player.collisionRough(enemy)
            enemy.update();}
        });
        // console.log("basic enemies length ",this.basicEnemies.length);
    }
}