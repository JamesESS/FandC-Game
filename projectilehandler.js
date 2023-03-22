import {Projectile} from "./projectile.js";
// import { ProjectileUpgrade } from "./upgrade.js";

export class ProjectileHandler {
    constructor(game,upgrade){
        this.game=game;
        this.projectiles = []
        this.upgrade = 0;
        this.reloadSpeed = 10;
        this.speed = 5;
        this.damage = 1;
        this.color = "white"
        this.reloadTimer = this.reloadSpeed;

        /* upgrade related variables */
        this.upgradeX = 200;
        this.upgradeY = 0;
        this.upgradeValue = 0;
        this.upgradeTimer = 0; //countdown for upgrade projectile
        this.projectileIncrement = 0; //used for multishot projectile (upgrade 3)
        setInterval((e) => {this.upgradeTimer--;},10);
    }

    shootProjectile() {
        this.projectileUpgradeHandler();
        // this.upgrade = Math.floor(Math.random()*3)+1;
        if(this.reloadTimer <= 0 && this.game.player.shooting) {  //check if spacebar pressed and if finished reloading
            if (this.upgrade == 3){         //checks if multi shot upgrade is active
                for (this.projectileIncrement = -1; this.projectileIncrement < 2; this.projectileIncrement++){      //send three different shot directions when multishot active
                    this.projectiles.push(new Projectile(this.game,this.speed,this.damage,this.projectileIncrement,this.upgrade));
                }
            }
            else {      //otherwise standard behaviour
                this.projectileIncrement = -4;
                this.projectiles.push(new Projectile(this.game,this.speed,this.damage,this.projectileIncrement,this.upgrade));
                // console.log("projectile handler, non multishot upgrade status:",this.upgrade)
            }
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
        // console.log("projectile handler");
        return this.projectiles.some(projectile => {    
            if(projectile.collision(enemy)){
               this.projectiles.splice(this.projectiles.indexOf(projectile),1);  //removes projectile if it collides with enemy
               return true;             //returns true if projectile has collided with enemy
            }
            return false;
        })
    }

    projectileUpgradeHandler(){
        // console.log("this.upgrade: ",this.upgrade);
        if (this.upgrade == 0 && this.upgradeTimer > 0 && !this.upgradeValue) {  //checks if projectile is upgraded. this.upgradeValue logic is redundant?
        this.upgrade = Math.floor(Math.random()*3)+1;
        // setInterval((e) => {this.upgradeTimer--;},10)
        this.upgradeValue = true;
        // console.log("Upgrade active! timer: ",this.upgradeTimer)
        }

        else if (this.upgrade > 0 && this.upgradeTimer <= 0) {
            // console.log("upgrade timer finished");
            this.upgrade = 0;
        }
        else if (this.upgradeTimer <= -1300) {
            this.upgradeTimer = 800;
            this.upgradeValue = false;
        }
        // console.log("this.upgrade: ",this.upgrade);
          /* basic projectile type */
          if (this.upgrade == 0){
            this.reloadSpeed = 10;
            this.speed = 5;
            this.damage = 1;
            this.color = "white"
        }
        /* laser projectile */
        else if (this.upgrade == 1){
            this.reloadSpeed = 1;
            this.speed = 5;
            this.damage = 0.25;
            this.color = "orange"
        }
        /* high damage projectile */
        else if (this.upgrade == 2){
            this.reloadSpeed = 12;
            this.speed = 3;
            this.damage = 3;
            this.color = "blue"
        }
        /* multishot projectile */
        else if (this.upgrade == 3){
            this.reloadSpeed = 12;
            this.speed = 3;
            this.damage = 0.5;
            this.color = "aquamarine"
        }
        // this.upgradeConstructor = new ProjectileUpgrade(this.upgrade);
        /* if (this.upgradeValue == 1){
            
        }
        else if (this.upgradeValue == 2){
            
        }
        else if (this.upgradeValue == 3){
            
        } */
    }
}