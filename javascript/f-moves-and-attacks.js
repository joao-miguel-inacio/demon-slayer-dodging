function backToOrignalStance() {
    player.image.src = "./assets/images/TanjiroPosition0.png";
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

function playerMovesAndAttacks() {
    document.onkeydown =  (e) => {
        switch (true) { 
            case e.key === "ArrowDown": 
            case e.key === "s":
                e.preventDefault();
                player?.moveDown();
                break;
            case e.key === "ArrowUp":
            case e.key === "w":
                e.preventDefault();
                player?.moveUp();
                break;
            case e.key === "ArrowRight":  
            case e.key === "d":
                e.preventDefault();
                player?.moveRight();
                break;
            case e.key === "ArrowLeft":
            case e.key === "a": 
                e.preventDefault();
                player?.moveLeft();
                break;
            case e.key === " " && enemyLifesArray.length===1 && (player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200):
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();
                setTimeout(gameWon, 600);
                break;
            case e.key === " " && enemyLifesArray.length===2 && (player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200):
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();       
                enemyLosingLife(3);
                difficultyArray.push("difficulty3");
                break;
            case e.key === " " && enemyLifesArray.length===3 && (player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200):
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();    
                enemyLosingLife(2);
                difficultyArray.push("difficulty2");
                break;
            case e.key === " " && enemyLifesArray.length===4 && (player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200):
                e.preventDefault();
                obstaclesArray = [];
                playerAttackAnimation ();    
                enemyLosingLife(1);
                difficultyArray.push("difficulty1");
                break;
            case e.key === " " && gameBoardElement.classList.contains("hidden") === false:
                e.preventDefault();
                AttackMusic();
                player.image.src = "./assets/images/TanjiroPosition1ATTACK.png";
                break;
            default:
                break;
        }
    };
}

function playerRests (){
    document.onkeyup = (e) => {
    switch (e.key) { 
        case "ArrowDown": 
        case "s":
            e.preventDefault();
            player?.moveDown();
            backToOrignalStance();
            break;
        case "ArrowUp":
        case "w":
            e.preventDefault();
            player?.moveUp();
            backToOrignalStance();
            break;
        case  "ArrowRight":  
        case "d":
            e.preventDefault();
            player?.moveRight();
            backToOrignalStance();
            break;
        case "ArrowLeft":
        case "a": 
            e.preventDefault();
            player?.moveLeft();
            backToOrignalStance();
            break;
        case " ":
            e.preventDefault();
            player.image.src = "./assets/images/TanjiroPosition2ATTACK.png";
            setTimeout(backToOrignalStance, 1000/2);
            break;
        default:
            break;
        }
    };
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