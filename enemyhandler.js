import {Enemy} from './enemy.js';

export class EnemyHandler {
    constructor(game){
        this.game = game;
        this.basicEnemies = [];
        this.enemySpawnTimer = 1800;
        setInterval((e) => { 
            this.switch = true;
            this.enemyGenerator();
        },this.enemySpawnTimer);  //spawn new set of enemies
    }
        //spawn new set of enemies every 1800(this.enemySpawnTimer) miliseconds
    enemyGenerator(){
        this.basicEnemy0 = new Enemy(10,20,10,5,2,1),       //set starting location of each enemy
        this.basicEnemy1 = new Enemy(10,20,60,-10,2,1),
        this.basicEnemy2 = new Enemy(10,20,110,5,2,1),
        this.basicEnemy3 = new Enemy(10,20,260,-10,2,1),
        this.basicEnemy4 = new Enemy(10,20,310,5,2,1),
        this.basicEnemy5 = new Enemy(10,20,360,-10,2,1),
        this.basicEnemies.push(this.basicEnemy0);
        this.basicEnemies.push(this.basicEnemy1);
        this.basicEnemies.push(this.basicEnemy2);
        this.basicEnemies.push(this.basicEnemy3);
        this.basicEnemies.push(this.basicEnemy4);
        this.basicEnemies.push(this.basicEnemy5);
        if (this.basicEnemies.length > 30) this.basicEnemies.splice(0,6);       //seemed easier than removing based on position in canvas. speed of enemies set such that 30(five rows of 6) will never been on screen at same time anyway
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
        // console.log("basic enemies length ",this.basicEnemies.length);
    }
}