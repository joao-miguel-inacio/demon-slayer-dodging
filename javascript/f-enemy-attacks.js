function playerAttackAnimation (){
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
    playerLosingLife1();
    playerAttackAnimation () ();
}

function enemyAttacksSuccessfully2 () {    
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife2();
    playerAttackAnimation () ();
}

function enemyAttacksSuccessfully3 (){
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife3();
    playerAttackAnimation () ();   
}