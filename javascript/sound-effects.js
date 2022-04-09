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

let music,
    attackMusic = new Audio('./assets/music/Attack.mp3');

function playFirstScreenMusic(){
    music = new Audio ('./assets/music/Start.mp3');
    let playPromise = music.play();
    music.volume = 0.1;

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
        })
        .catch(error => {
        // Auto-play was prevented
        // Show paused UI.
        }); 
    }
}

function playFightScreenMusic(){    
    pauseMusic();
    music = new Audio('./assets/music/Fight.mp3');
    music.volume = 0.1;
    playMusic();
}

function playLostScreenMusic(){
    pauseMusic();
    music = new Audio('./assets/music/GameOver.mp3');
    playMusic();
}

function AttackMusic(){
    attackMusic.playbackRate = 2;
    attackMusic.play();
}