let music,
    attackMusic = new Audio('/assets/music/Attack.mp3');

function playFirstScreenMusic(){
    music = new Audio ('/assets/music/Start.mp3');
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
    music = new Audio('/assets/music/Fight.mp3');
    music.volume = 0.1;
    playMusic();
}

function playLostScreenMusic(){
    pauseMusic();
    music = new Audio('/assets/music/GameOver.mp3');
    playMusic();
}

function AttackMusic(){
    attackMusic.playbackRate = 2;
    attackMusic.play();
}