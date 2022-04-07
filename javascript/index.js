playFirstScreenMusic();

let intervalId,
    ctx,
    background,
    player,
    enemy,
    obstacles,
    obstacles1,
    obstacles2,
    obstacles3,
    obstaclesArray = [],
    difficulty1Array = [],
    difficulty2Array = [],
    difficulty3Array= [],
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
    lostGameText = document.getElementById("lost-game-text"),
    wonGameText = document.getElementById("won-game-text"),
    video = document.getElementById("fight-replay");

//Reloads the page, taking the player back to 1st screen to see instructions again
let backToStart = () => location.reload();    

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
    enemy = new Enemy (canvas,ctx);
    obstacles = new Obstacles (canvas,ctx);
    obstacles1 = new Obstacles1 (canvas,ctx);
    obstacles2 = new Obstacles2 (canvas,ctx);
    obstacles3 = new Obstacles3 (canvas,ctx);
    
    refillLifePoints();
    playerMoves();
    playerRests ();
    update ();  
    playerAttacksForNothing ();
}

function update (){ 
    intervalId = setInterval (()=>{
        frameCounter ++;
        background.draw ();
        player.draw ();
        enemy.draw ();
        //testing
        if (frameCounter % 30=== 0){
        //game
        //if (frameCounter % 30=== 0){
            obstaclesArray.push(new Obstacles(canvas, ctx));
        }        
        //testing
        if (frameCounter % 700=== 0){
        //game
        //if (frameCounter % 70 === 0 && difficulty1Array.length >= 1){
            obstaclesArray.push(new Obstacles1(canvas, ctx));
        }
        //testing
        if (frameCounter % 1600=== 0){
        //game
        //if (frameCounter % 160 === 0 && difficulty2Array.length >= 1){
            obstaclesArray.push(new Obstacles2(canvas, ctx));
        }
        //testing
        if (frameCounter % 3400=== 0){
        //game
        //if (frameCounter % 340 === 0 && difficulty3Array.length >= 1){
            obstaclesArray.push(new Obstacles3(canvas, ctx));
            frameCounter = 0;
        }
        obstaclesArray.forEach((obstacle) => {
            obstacle.draw ();
            obstacle.move();
            const withinX = player.x + player.width > obstacle.x && player.x < obstacle.x + obstacle.width;
            const withinY = obstacle.y + obstacle.height > player.y && obstacle.y < player.y + player.height;
            attackSuffered = withinX && withinY;
            if(attackSuffered && playerLifesArray.length === 4){
                enemyAttacksSuccessfully1();                 
            } else if(attackSuffered && playerLifesArray.length === 3){
                enemyAttacksSuccessfully2();    
            } else if(attackSuffered && playerLifesArray.length === 2){
                enemyAttacksSuccessfully3 ();
                } else if(attackSuffered && playerLifesArray.length === 1){
                    console.log(enemy.movingInterval);
                    enemy.clearY();
                    console.log(enemy.movingInterval);
                    gameLost ();        
            }
        });
        if ((player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
            openingThread();
            playerAttacksSuccessfully();
        }
        return frameCounter;
    },1000/30);
}