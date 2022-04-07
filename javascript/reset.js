function reset(){
    clearInterval(intervalId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background = null;
    player = null;
    enemy = null;
    obstacles = null;
    obstacles1 = null;
    obstacles2 = null;
    obstacles3 = null;
    obstaclesArray = [];
    difficulty1Array = [];
    difficulty2Array = [];
    difficulty3Array= [];
    frameCounter = 0;
}

function refillLifePoints(){
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
    playerLifesArray = [1,2,3,4];
    enemyLifesArray = [1,2,3,4];
}