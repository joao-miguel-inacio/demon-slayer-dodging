function backToOrignalStance() {
    player.image.src = "./assets/images/TanjiroPosition0.png";
}

function playerFinalAttack (){
    document.addEventListener('keydown', (e) => {
        if (e.key === " "){
            e.preventDefault();
            gameWon();
        }                       
    });
}

function playerAttacksForNothing () {
    document.addEventListener('keydown', (e) => {
        if (e.key === " "){
            e.preventDefault();
            player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
        }                       
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === " "){
            e.preventDefault();
            player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
            setTimeout(backToOrignalStance, 1000/2);
        }        
    });
}

function playerAttacksSuccessfully1 (){
    document.addEventListener('keydown', (e) => {
        if (e.key === " "){
            e.preventDefault();
            enemyLifesArray.splice(3,1);
            enemyLosingLife1();
            increaseDifficulty1();
            setTimeout(function() {
                player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                footerElement.style.backgroundColor = "blue";
                headerElement.style.backgroundColor = "blue";
                setTimeout(function() {
                    footerElement.style.backgroundColor = "whitesmoke";
                    headerElement.style.backgroundColor = "whitesmoke";
                    obstaclesArray = [];
                    player.x = (10);
                }, 500);
            }, 200);
            
        }
    });            
}

function playerAttacksSuccessfully2 (){
    document.addEventListener('keydown', (e) => {
        if (e.key === " "){
            e.preventDefault();
            enemyLifesArray.splice(2,1);
            enemyLosingLife2();
            increaseDifficulty2();
            setTimeout(function() {
                player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                footerElement.style.backgroundColor = "blue";
                headerElement.style.backgroundColor = "blue";
                setTimeout(function() {
                    footerElement.style.backgroundColor = "whitesmoke";
                    headerElement.style.backgroundColor = "whitesmoke";
                    obstaclesArray = [];
                    player.x = (10);  
                }, 500);
            }, 200);              
        }
    });            
}


function playerAttacksSuccessfully3 (){
    document.addEventListener('keydown', (e) => {
        if (e.key === " "){
            e.preventDefault();
            enemyLifesArray.splice(1,1);
            enemyLosingLife3();
            increaseDifficulty3();
            setTimeout(function() {
                player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                footerElement.style.backgroundColor = "blue";
                headerElement.style.backgroundColor = "blue";
                setTimeout(function() {
                    footerElement.style.backgroundColor = "whitesmoke";
                    headerElement.style.backgroundColor = "whitesmoke";
                    obstaclesArray = [];
                    player.x = (10);
                }, 500);
            }, 200);            
        }
    });       
}