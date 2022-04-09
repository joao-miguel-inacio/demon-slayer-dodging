function backToOrignalStance() {
    player.image.src = "./assets/images/TanjiroPosition0.png";
}

function playerAttacksForNothing () {
    document.addEventListener('keydown', (e) => {
        if (e.key === " " && gameBoardElement.classList.contains("hidden") === false){
            e.preventDefault();
            AttackMusic();
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

function playerAttackAnimation (){
    setTimeout(function() {
        player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
        footerElement.style.backgroundColor = "blue";
        headerElement.style.backgroundColor = "blue"; 
        setTimeout(function() {
            player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
            footerElement.style.backgroundColor = "whitesmoke";
            headerElement.style.backgroundColor = "whitesmoke";
            player.x = (10);    
            }, 200);
    }, 200);
}

function playerAttacksSuccessfully(){
    if (enemyLifesArray.length===1){
        document.addEventListener('keydown', (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();
                setTimeout(gameWon, 600);    
            }                       
        });
    }
    if (enemyLifesArray.length===2) {
        document.addEventListener('keydown', (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();       
                enemyLosingLife(3);
                difficultyArray.push("difficulty3");
            }
        });
    }
    if (enemyLifesArray.length===3) {
        document.addEventListener('keydown', (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();    
                enemyLosingLife(2);
                difficultyArray.push("difficulty2");  
            }
        });
    }
    if (enemyLifesArray.length===4){
        document.addEventListener('keydown', (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();    
                enemyLosingLife(1);
                difficultyArray.push("difficulty1"); 
            }
        });
    }
}

function enemyLosingLife(i){
    if (i===3){
        enemyLifesArray.splice(1,1);
        leveltxt.innerHTML = "Final Level";
        enemyLife3.classList.add("hidden");
        enemyLostLife3.classList.remove("hidden");
    } else if (i===2){
        enemyLifesArray.splice(2,1);
        leveltxt.innerHTML = "Level 3";
        enemyLife2.classList.add("hidden");
        enemyLostLife2.classList.remove("hidden");
    } else if (i===1){
        enemyLifesArray.splice(3,1);
        leveltxt.innerHTML = "Level 2";
        enemyLife1.classList.add("hidden");
        enemyLostLife1.classList.remove("hidden");
    }
}

/*function playerAttacksForNothing () {
    document.onkeydown =  (e) => {
        if (e.key === " " && gameBoardElement.classList.contains("hidden") === false){
            e.preventDefault();
            AttackMusic();
            player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
            setTimeout(function() {
                player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                setTimeout(backToOrignalStance, 1000/2);
            }, 200);  
        }                       
    }
}

function playerAttacksSuccessfully(){
    if (enemyLifesArray.length===1){
        document.onkeydown =  (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                obstaclesArray = [];
                setTimeout(function() {
                    player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                    footerElement.style.backgroundColor = "blue";
                    headerElement.style.backgroundColor = "blue";
                    setTimeout(function() {
                        player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                        footerElement.style.backgroundColor = "whitesmoke";
                        headerElement.style.backgroundColor = "whitesmoke";
                        setTimeout(function() {        
                            gameWon();
                        }, 200);    
                    }, 200);
                }, 200);
            }                       
        };
    }
    if (enemyLifesArray.length===2) {
        document.onkeydown =  (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();        
                enemyLosingLife3();
                increaseDifficulty3();
                obstaclesArray = [];
                setTimeout(function() {
                    player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                    footerElement.style.backgroundColor = "blue";
                    headerElement.style.backgroundColor = "blue";
                    setTimeout(function() {
                        player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                        footerElement.style.backgroundColor = "whitesmoke";
                        headerElement.style.backgroundColor = "whitesmoke";
                        player.x = (10);
                    }, 200);
                }, 200);            
            }
        };
    }
    if (enemyLifesArray.length===3) {
        document.onkeydown =  (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                enemyLosingLife2();
                increaseDifficulty2();
                obstaclesArray = [];
                setTimeout(function() {
                    player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                    footerElement.style.backgroundColor = "blue";
                    headerElement.style.backgroundColor = "blue";
                    setTimeout(function() {
                        player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
                        footerElement.style.backgroundColor = "whitesmoke";
                        headerElement.style.backgroundColor = "whitesmoke";
                        player.x = (10);
                    }, 200);
                }, 200);        
            }
        };
    }
    if (enemyLifesArray.length===4){
        document.onkeydown =  (e) => {
            if (e.key === " " && (player.x >= (canvas.width*0.7)) && ((player.y-enemy.y) <= 200)){
                e.preventDefault();
                enemyLosingLife1();
                increaseDifficulty1();
                obstaclesArray = [];
                setTimeout(function() {
                    player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                    footerElement.style.backgroundColor = "blue";
                    headerElement.style.backgroundColor = "blue"; 
                    setTimeout(function() {
                        player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                        footerElement.style.backgroundColor = "whitesmoke";
                        headerElement.style.backgroundColor = "whitesmoke";
                        player.x = (10);    
                        }, 200);
                }, 200);
            }
        };
    }
}*/