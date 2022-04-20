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

    collide(){
        const withinX = player.x + player.width > this.x && player.x < obstacle.x + this.width;
        const withinY = this.y + this.height > player.y && this.y < player.y + player.height;
        const attackSuffered = withinX && withinY;
        if (attackSuffered && playerLifesArray.length === 4){
            enemyAttacksSuccessfully(1);                 
        } else if(attackSuffered && playerLifesArray.length === 3){
            enemyAttacksSuccessfully(2);    
        } else if(attackSuffered && playerLifesArray.length === 2){
            enemyAttacksSuccessfully(3);
        } else if(attackSuffered && playerLifesArray.length === 1){
            gameLost ();        
        }
    }
}