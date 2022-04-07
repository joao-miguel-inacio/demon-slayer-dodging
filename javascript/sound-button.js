const musicButtonOn = document.getElementById("musicButtonOn");
const musicButtonOff = document.getElementById("musicButtonOff");

musicButtonOn.addEventListener('click', playMusic);

function playMusic(){
    musicButtonOn.classList.add("hidden");
    musicButtonOff.classList.remove("hidden");
    music.play();
}

musicButtonOff.addEventListener('click', pauseMusic);

function pauseMusic(){
    musicButtonOn.classList.remove("hidden");
    musicButtonOff.classList.add("hidden");
    music.pause();
}