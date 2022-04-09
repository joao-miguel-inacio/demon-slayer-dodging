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

function enemyAttacksSuccessfully1 () {
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife(1);
    enemyAttackAnimation ();
}

function enemyAttacksSuccessfully2 () {
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife(2);
    enemyAttackAnimation ();
}

function enemyAttacksSuccessfully3 (){
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife(3);
    enemyAttackAnimation();   
}