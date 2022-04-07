const musicButtonOn = document.getElementById("musicButtonOn");
const musicButtonOff = document.getElementById("musicButtonOff");

musicButtonOn.addEventListener('click', playMusic);

function playMusic(){
    console.log("resuming")
    musicButtonOn.classList.add("hidden");
    musicButtonOff.classList.remove("hidden");
    music.play();
}

musicButtonOff.addEventListener('click', pauseMusic);

function pauseMusic(){
    console.log("pausing")
    musicButtonOn.classList.remove("hidden");
    musicButtonOff.classList.add("hidden");
    music.pause();
}