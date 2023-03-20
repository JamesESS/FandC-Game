export class Background {
    constructor(game){
        this.game = game;
        this.speed = 2;     //scroll speed of image
        this.y = -950;      //starting point for image
        this.y2 = -2550;    //starting point for imagecopy
        this.background = new Image();
        this.background.src = 'images/stars.png';
    }
    
    draw(context){
    context.drawImage(this.background, 0, this.y);
    context.drawImage(this.background, 0, this.y2);
    this.y += this.speed;
    this.y2 += this.speed;
    if (this.y > 1500) this.y = -950;  //loop 1st image
    else this.y += this.speed;
    if (this.y2 > -100) this.y2 = -2550; //loop 1st image copy
    else this.y2 += this.speed;
        // console.log(this.y2); 
    } 
}