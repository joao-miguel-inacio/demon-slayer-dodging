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
