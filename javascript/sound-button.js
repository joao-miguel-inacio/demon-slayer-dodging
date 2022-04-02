const musicButtonOn = document.getElementById("musicButtonOn");
const musicButtonOff = document.getElementById("musicButtonOff");

musicButtonOn.addEventListener('click', playMusic);
function playMusic(){
    musicButtonOn.classList.toggle("hidden");
    musicButtonOff.classList.toggle("hidden");
    music.play();
    
}

musicButtonOff.addEventListener('click', pauseMusic);
//musicButtonOff.onclick = musicButtonOff.classList.toggle("hidden");
function pauseMusic(){
    musicButtonOn.classList.toggle("hidden");
    musicButtonOff.classList.toggle("hidden");
    music.pause();
}