class Background {
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.init();
    }

    init() {
        this.image = new Image ();
        this.image.src = "./assets/images/carlos-gonzalez-demon-slayer-02.jpg";
    }

    draw(){
        if(this.image){
            this.ctx.drawImage(
                this.image, 
                0, 
                0, 
                this.canvas.width, 
                this.canvas.height);
        }
    }
}