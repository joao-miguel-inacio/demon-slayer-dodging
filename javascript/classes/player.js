class Player { 
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.playerSpeed = 15;
        this.width = 80;
        this.height = 80;
        this.y = (this.canvas.height - this.height) / 2;
        this.x = (10);
        this.init();
    }

    init(){
        this.image = new Image();
        this.image.src = "./assets/images/TanjiroPosition0.png";
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

    moveLeft() {
        if (this.x > 5) {
            this.x -= this.playerSpeed;
            if (frameCounter % 4 ===0){
            this.image.src = "./assets/images/TanjiroPosition1LEFT.png";
            } else {
            this.image.src = "./assets/images/TanjiroPosition2LEFT.png";
            }
        }
    }

    moveRight() {
        if (this.x < (this.canvas.width - this.width - 15)) {
            this.x += this.playerSpeed;
            if (frameCounter % 4 ===0){
                this.image.src = "./assets/images/TanjiroPosition1RIGHT.png";
                } else {
                this.image.src = "./assets/images/TanjiroPosition2RIGHT.png";
                }
        }
    }

    moveUp() {
        if (this.y > 5) {
            this.y -= this.playerSpeed;
            if (frameCounter % 4 ===0){
                this.image.src = "./assets/images/TanjiroPosition1UP.png";
                } else {
                this.image.src = "./assets/images/TanjiroPosition2UP.png";
                }
        }
    }

    moveDown() {
        if (this.y < (this.canvas.height - this.height - 5)) {
            this.y += this.playerSpeed;
            if (frameCounter % 4 ===0){
                this.image.src = "./assets/images/TanjiroPosition1DOWN.png";
                } else {
                this.image.src = "./assets/images/TanjiroPosition2DOWN.png";
                }
        }
    }
}