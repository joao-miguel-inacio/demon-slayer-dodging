class Obstacles { 
    constructor (canvas, ctx, obstaclesSpeed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.obstaclesSpeed = obstaclesSpeed;
        this.width = 60;
        this.height = 60;
        this.y = enemy.y;
        this.x = canvas.width-150;
        this.init();
    }

    init(){
        this.image = new Image();
        this.image.src = "./assets/images/footagecrate-animestrike2@2X.png";
    }

    draw(){
        if(this.image){
            this.ctx.drawImage(
                this.image, 
                this.x, 
                this.y,
                this.width, 
                this.height);
        }
    }

    move(){
        this.ctx.drawImage(
        this.image, 
        this.x -= this.obstaclesSpeed, 
        this.y,
        this.width, 
        this.height);
    }
}