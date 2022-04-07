function enemyLosingLife1(){
    enemyLifesArray.splice(3,1);
    enemyLife1.classList.add("hidden");
    enemyLostLife1.classList.remove("hidden");
}

function enemyLosingLife2(){
    enemyLifesArray.splice(2,1);
    enemyLife2.classList.add("hidden");
    enemyLostLife2.classList.remove("hidden");
}

function enemyLosingLife3(){
    enemyLifesArray.splice(1,1);
    enemyLife3.classList.add("hidden");
    enemyLostLife3.classList.remove("hidden");
}
