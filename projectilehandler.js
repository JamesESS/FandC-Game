import {Projectile} from "./projectile.js";

export class ProjectileHandler {
    constructor(game){
        /* this.upgrade = 0;
        if (this.upgrade == 0){ */
            this.game = game;
            this.projectiles = [];
            this.reloadSpeed = 20;
            this.reloadTimer = this.reloadSpeed;
            this.speed = 6;
            this.damage = 1;
            this.color = "white"
        // }
       /*  if (this.upgrade == 1){
            this.game = game;
            this.projectiles = [];
            this.reloadSpeed = 1;
            this.reloadTimer = this.reloadSpeed;
            this.speed = 5;
            this.damage = 0.3;
            this.color = "red"
        }
        if (this.upgrade == 2){
            this.game = game;
            this.projectiles = [];
            this.reloadSpeed = 10;
            this.reloadTimer = this.reloadSpeed;
            this.speed = 3;
            this.damage = 2;
            this.color = "blue"
        } */
    }

    shootProjectile() {
        if(this.reloadTimer <= 0 && this.game.player.shooting) {  //check if spacebar pressed and if finished reloading
            this.projectiles.push(new Projectile(this.game,this.speed,this.damage));
            this.reloadTimer= this.reloadSpeed;}
        else this.reloadTimer--
    }

    draw(context) {
        this.shootProjectile();
        this.projectiles.forEach((projectile) => {
            if(projectile.y < 0) this.projectiles.splice(this.projectiles.indexOf(projectile),1) //remove projectile from array when it goes off screen
            projectile.draw(context,this.color);
        });
    }

    collision(enemy) {
        console.log("projectile handler");
        return this.projectiles.some(projectile => {
            if(projectile.collision(enemy)){
               this.projectiles.splice(this.projectiles.indexOf(projectile),1);
               return true; 
            }
            return false;
        })
    }
}