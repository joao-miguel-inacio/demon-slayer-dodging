class Enemy { 
    constructor (canvas, ctx) {
        this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
        this.enemySpeed = 20;
        this.width = 100;
		this.height = 100;
        this.y = 0;
		this.x = (this.canvas.width - this.width - 10);
        this.movingInterval = null;
        this.init();
        this.move();
    }

    init(){
        this.image = new Image();
		this.image.src = "./assets/images/Gyutaro.png";
    }

    move(){
        this.movingInterval = setInterval(()=>{
                    this.y = Math.floor(Math.random()*(this.canvas.height - this.height));
                    }, 1000/2);
    }

    clearY(){
        clearInterval(this.movingInterval);
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
}