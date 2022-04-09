function enemyAttackAnimation (){
    setTimeout(function() {
        footerElement.style.backgroundColor = "red";
        headerElement.style.backgroundColor = "red";
        setTimeout(function() {
            footerElement.style.backgroundColor = "whitesmoke";
            headerElement.style.backgroundColor = "whitesmoke";
        }, 200); 
    }, 200);
}

function enemyAttacksSuccessfully (i) {
    obstaclesArray = [];
    player.x = (10);
    enemyAttackAnimation ();
    playerLosingLife(i);
}

function playerLosingLife(i){
    if (i===3){
        playerLifesArray.splice(1,1);
        playerLife3.classList.add("hidden");
        playerLostLife3.classList.remove("hidden");
    } else if (i===2){
        playerLifesArray.splice(2,1);
        playerLife2.classList.add("hidden");
        playerLostLife2.classList.remove("hidden");
    } else if (i===1){
        playerLifesArray.splice(3,1);
        playerLife1.classList.add("hidden");
        playerLostLife1.classList.remove("hidden");
    }
}