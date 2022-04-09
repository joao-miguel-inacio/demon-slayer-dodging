function gameLost(){

    gameBoardElement.classList.add("hidden");
    gameLostElement.classList.remove("hidden");
    
    reset();

    attackMusic.pause();
    playLostScreenMusic();

    document.body.style.backgroundColor = "black";
    footerElement.style.backgroundColor = "whitesmoke";

    lostGameText.style.padding = "10%";
    lostGameText.style.fontSize = "48px";

    tryAgainButton.addEventListener('click', startGame );
    regroupButton.addEventListener('click', backToStart );
}