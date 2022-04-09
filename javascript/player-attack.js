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

function playerAttacksSuccessfully(){
    if (enemyLifesArray.length===1){
        document.addEventListener('keydown', (e) => {
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
        });
    }
    if (enemyLifesArray.length===2) {
        document.addEventListener('keydown', (e) => {
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
        });
    }
    if (enemyLifesArray.length===3) {
        document.addEventListener('keydown', (e) => {
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
        });
    }
    if (enemyLifesArray.length===4){
        document.addEventListener('keydown', (e) => {
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
        });
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