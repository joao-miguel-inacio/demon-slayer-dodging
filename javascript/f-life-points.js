function playerLosingLife1(){
    playerLifesArray.splice(3,1);
    playerLife1.classList.add("hidden");
    playerLostLife1.classList.remove("hidden");
}
function playerLosingLife2(){
    playerLifesArray.splice(2,1);
    playerLife2.classList.add("hidden");
    playerLostLife2.classList.remove("hidden");
}
function playerLosingLife3(){
    playerLifesArray.splice(1,1);
    playerLife3.classList.add("hidden");
    playerLostLife3.classList.remove("hidden");
}

function enemyLosingLife1(){
    enemyLifesArray.splice(3,1);
    leveltxt.innerHTML = "Level 2";
    enemyLife1.classList.add("hidden");
    enemyLostLife1.classList.remove("hidden");
}

function enemyLosingLife2(){
    enemyLifesArray.splice(2,1);
    leveltxt.innerHTML = "Level 3";
    enemyLife2.classList.add("hidden");
    enemyLostLife2.classList.remove("hidden");
}

function enemyLosingLife3(){
    enemyLifesArray.splice(1,1);
    leveltxt.innerHTML = "Final Level";
    enemyLife3.classList.add("hidden");
    enemyLostLife3.classList.remove("hidden");
}
