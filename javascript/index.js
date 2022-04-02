music = new Audio ('/assets/music/Start.mp3');
let playPromise = music.play();
music.volume = 0.1;

if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    }); 
}

let intervalId,
    ctx,
    background,
    player,
    enemy,
    obstacles,
    obstacles1,
    obstacles2,
    obstaclesArray = [],
    frameCounter = 0,
    playerLifesArray = [1,2,3,4],
    enemyLifesArray = [1,2,3,4],
    difficulty1Array = [],
    difficulty2Array = [],
    difficulty3Array= [],
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

    
function reset(){
    clearInterval(intervalId),
    ctx = null,
    background = null,
    player = null;
    enemy = null;
    obstacles = null;
    obstaclesArray = [];
    frameCounter = 0,
    playerLifesArray = [1,2,3,4],
    attacksSufferedArray = [1,2,3,4],
    frameCounter = 0;
}

function gameLost(){
    reset();

    music.pause();
    music = new Audio('./assets/music/GameOver.mp3');
    music.play();
    music.volume = 0.1;

    gameBoardElement.classList.add("hidden");
    gameLostElement.classList.remove("hidden");

    document.body.style.backgroundColor = "black";
    lostGameText.style.padding = "10%";
    lostGameText.style.fontSize = "48px";
    tryAgainButton.addEventListener('click', startGame );
    regroupButton.addEventListener('click', backToStart );
}

function gameWon(){
    reset();

    music.pause();
    music = new Audio('./assets/music/GameOver.mp3');
    music.play();
    music.volume = 0.1;

    gameBoardElement.classList.add("hidden");
    gameWonElement.classList.remove("hidden");

    wonGameText.style.color = "black";
    wonGameText.style.fontSize = "24px";
    document.body.style.backgroundColor = "whitesmoke";

    video.style = "position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%);";
    slayAgaintButton.style = "position: absolute; top: 85%;";
    woundsButton.style = "position: absolute; top: 80%;";
    
    slayAgaintButton.addEventListener('click', startGame );
    woundsButton.addEventListener('click', backToStart );
}

function backToStart(){
    location.reload();
}

startButton.addEventListener('click', startGame);

function startGame(){
    music.pause();
    music = new Audio('/assets/music/Fight.mp3');
    music.play();
    music.volume = 0.1;

    gameIntroElement.classList.add("hidden");
    gameWonElement.classList.add("hidden");
    gameLostElement.classList.add("hidden");
    playerLife1.classList.remove("hidden");
    playerLife2.classList.remove("hidden");
    playerLife3.classList.remove("hidden");
    enemyLife1.classList.remove("hidden");
    enemyLife2.classList.remove("hidden");
    enemyLife3.classList.remove("hidden");
    playerLostLife1.classList.add("hidden");
    playerLostLife2.classList.add("hidden");
    playerLostLife3.classList.add("hidden");
    enemyLostLife1.classList.add("hidden");
    enemyLostLife2.classList.add("hidden");
    enemyLostLife3.classList.add("hidden");
    gameBoardElement.classList.remove("hidden");
    
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

    playerMoves();
    playerRests ();
    playerAttacksForNothing();
    update ();   
}

function update (){
    intervalId = setInterval (()=>{
        frameCounter ++;
        background.draw ();
        player.draw ();
        enemy.draw();
        if (frameCounter % 30=== 0){
            obstaclesArray.push(new Obstacles(canvas, ctx));
        }
        if (frameCounter % 70 === 0 && difficulty1Array.length >= 1){
            obstaclesArray.push(new Obstacles1(canvas, ctx));
        }
        if (frameCounter % 160 === 0 && difficulty2Array.length >= 1){
            obstaclesArray.push(new Obstacles2(canvas, ctx));
        }
        if (frameCounter % 340 === 0 && difficulty3Array.length >= 1){
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
                gameLost ();        
            }
        });
        if (player.x >= (canvas.width*0.7) && (player.y-enemy.y)<200){
            ctx.beginPath();
            ctx.moveTo(player.x + 50, player.y + 50);
            ctx.lineTo(enemy.x + 50, enemy.y+ 50);
            ctx.strokeStyle = 'red';
            ctx.stroke();
            if (enemyLifesArray.length === 4){
                playerAttacksSuccessfully1 ();
            } else if (enemyLifesArray.length === 3){
                playerAttacksSuccessfully2 ();
            } else if (enemyLifesArray.length === 2){
                playerAttacksSuccessfully3 ();
            } else if (enemyLifesArray.length === 1){
                playerFinalAttack ();
            }
        }
        return frameCounter;
    },1000/30);
}