class Enemy { 
    constructor (canvas, ctx) {
        this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
        this.enemySpeed = 20;
        this.width = 100;
		this.height = 100;
        this.y = setInterval(()=>{
            this.y = Math.floor(Math.random() * (this.canvas.height - this.height));
         },1000/2);
        
		this.x = (this.canvas.width - this.width - 10);
        this.init();
    }

    init(){
        this.image = new Image();
		this.image.src = "./assets/images/Gyutaro.png";
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