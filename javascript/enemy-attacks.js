function enemyAttacksSuccessfully1 () {    
    playerLifesArray.splice(3,1);
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife1();
    setTimeout(function() {
        footerElement.style.backgroundColor = "red";
        headerElement.style.backgroundColor = "red";
        setTimeout(function() {
            footerElement.style.backgroundColor = "whitesmoke";
            headerElement.style.backgroundColor = "whitesmoke";
        }, 100); 
    }, 100);
}

function enemyAttacksSuccessfully2 () {    
    playerLifesArray.splice(2,1);
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife2();
    setTimeout(function() {
        footerElement.style.backgroundColor = "red";
        headerElement.style.backgroundColor = "red";
        setTimeout(function() {
        footerElement.style.backgroundColor = "whitesmoke";
        headerElement.style.backgroundColor = "whitesmoke";
        }, 100); 
    }, 100);
}

function enemyAttacksSuccessfully3 (){
    playerLifesArray.splice(1,1);
    obstaclesArray = [];
    player.x = (10);
    playerLosingLife3();
    setTimeout(function() {
        footerElement.style.backgroundColor = "red";
        headerElement.style.backgroundColor = "red";
        setTimeout(function() {
        footerElement.style.backgroundColor = "whitesmoke";
        headerElement.style.backgroundColor = "whitesmoke";
        }, 100); 
    }, 100);   
}