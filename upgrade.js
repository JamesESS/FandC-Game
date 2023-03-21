export class ProjectileUpgrade {
    constructor(upgradeValue){
        this.upgradeValue = upgradeValue;
        this.x = 200;
        this.y = 0;
        this.width = 5;
        this.height = 5;
        this.color = "white";
        if (this.upgradeValue == 1){
            this.color = "orange";
        }
        else if (this.upgradeValue == 2){
            this.color = "blue";
        }
        else /* if (this.upgradeValue == 3) */{
            this.color = "aquamarine";
        }
    }

    draw(context){
        
        // if (this.upgradeValue == 0) return;
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        console.log("upgrade.draw: ",this.upgradeValue);
        context.fillStyle = "aquamarine";
        context.fill();
        context.closePath();
        this.y++;   
    }
}