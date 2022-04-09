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
