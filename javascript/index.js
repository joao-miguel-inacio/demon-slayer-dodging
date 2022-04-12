playFirstScreenMusic();

let intervalId,
    ctx,
    background,
    player,
    enemy,
    obstaclesArray = [],
    difficultyArray = [],
    playerLifesArray = [1,2,3,4],
    enemyLifesArray = [1,2,3,4],
    frameCounter = 0,
    gameIntroElement =  document.getElementById("game-intro"),
    gameBoardElement = document.getElementById("game-board"),
    headerElement = document.getElementById("canvas-header"),
    footerElement = document.getElementById("footer"),
    gameLostElement = document.getElementById("game-lost"),
    gameWonElement = document.getElementById("game-won"),
    startButton = document.getElementById("start-button"),
    tryAgainButton= document.getElementById("try-again-button"),
    slayAgaintButton= document.getElementById("slay-again-button"),
    woundsButton = document.getElementById("back-to-start"),
    regroupButton = document.getElementById("regroup"),
    playerLife1 = document.getElementById("player-life1-filled"),
    playerLife2 = document.getElementById("player-life2-filled"),
    playerLife3 = document.getElementById("player-life3-filled"),
    enemyLife1 = document.getElementById("enemy-life1-filled"),
    enemyLife2 = document.getElementById("enemy-life2-filled"),
    enemyLife3 = document.getElementById("enemy-life3-filled"),
    playerLostLife1 = document.getElementById("player-life1-lost"),
    playerLostLife2 = document.getElementById("player-life2-lost"),
    playerLostLife3 = document.getElementById("player-life3-lost"),
    enemyLostLife1 = document.getElementById("enemy-life1-lost"),
    enemyLostLife2 = document.getElementById("enemy-life2-lost"),
    enemyLostLife3 = document.getElementById("enemy-life3-lost"),
    leveltxt= document.getElementById("levels"),
    lostGameText = document.getElementById("lost-game-text"),
    wonGameText = document.getElementById("won-game-text"),
    video = document.getElementById("fight-replay");

function backToStart () {
    location.reload();
}  

startButton.addEventListener('click', startGame);

function startGame(){
    playFightScreenMusic();
    gameIntroElement.classList.add("hidden");
    gameBoardElement.classList.remove("hidden");
    gameWonElement.classList.add("hidden");
    gameLostElement.classList.add("hidden");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height  = window.innerHeight*0.9;
    canvas.style = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
    document.body.style.backgroundColor = "whitesmoke";
    background = new Background (canvas, ctx);
    player = new Player (canvas, ctx);
    enemy = new Enemy (canvas, ctx);
    obstacle = new Obstacles (canvas, ctx, 10);
    refillLifePoints();
    update ();  
    playerMovesAndAttacks();
    playerRests();
}

function update (){ 
    intervalId = setInterval (()=>{
        frameCounter ++;
        background.draw ();
        player.draw ();
        enemy.draw ();
        
        if (frameCounter % 30=== 0){
            enemy.move ();
            obstaclesArray.push(new Obstacles(canvas, ctx, 10));
        }        
        if (frameCounter % 70 === 0 && difficultyArray.includes("difficulty1")){
            obstaclesArray.push(new Obstacles(canvas, ctx, 12));
        }
        if (frameCounter % 160 === 0 && difficultyArray.includes("difficulty2")){
            obstaclesArray.push(new Obstacles(canvas, ctx, 14));
        }
        if (frameCounter % 340 === 0 && difficultyArray.includes("difficulty3")){
            obstaclesArray.push(new Obstacles(canvas, ctx, 16));
            frameCounter = 0;
        }

        obstaclesArray.forEach((obstacle) => {
            obstacle.draw ();
            obstacle.move();
            const withinX = player.x + player.width > obstacle.x && player.x < obstacle.x + obstacle.width;
            const withinY = obstacle.y + obstacle.height > player.y && obstacle.y < player.y + player.height;
            attackSuffered = withinX && withinY;
            if(attackSuffered && playerLifesArray.length === 4){
                enemyAttacksSuccessfully(1);                 
            } else if(attackSuffered && playerLifesArray.length === 3){
                enemyAttacksSuccessfully(2);    
            } else if(attackSuffered && playerLifesArray.length === 2){
                enemyAttacksSuccessfully(3);
                } else if(attackSuffered && playerLifesArray.length === 1){
                    gameLost ();        
            }
        });

        if ((player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200)){
            openingThread();
        }

        return frameCounter;

    },1000/30);
}