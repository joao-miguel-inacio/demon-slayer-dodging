//not linked
//this is the code I created when I didn't know about the controls attribute of the video tag
//at this time my video was just an image without any functionality

//this was the HTML:
//<button id="fullscreen-button"><video id="fight-replay"width = "800px" height = "auto" src="./assets/videos/EP.10.v0.1644165302.1080p_Trim_Trim.mp4"></video></button>
//<button id="video-button"><img src="./assets/images/video-button.png" alt=""></button>-->

//created the videobutton and the fullscreenButton

let videoButton = document.getElementById("video-button"),
    fullscreenButton = document.getElementById("fullscreen-button");

//and this function which would change the background and the text
//and also includes a countdown of how many seconds there were left in the video to give people an idea 
//of how much longer the video was going to last

function playVideo (){
    videoButton.classList.add("hidden");
    music.pause();
    video.play();
    document.body.style.backgroundColor = "black";
    wonGameText.style.color = "white";
    fullscreenButton.addEventListener("dblclick", toggleFullscreen);
    
    setInterval (()=>{
        wonGameText.innerHTML = `Of course you can double click to enjoy <br> ${Math.floor(271 - video.currentTime)} more seconds of pure awesomeness in fullscreen`;
        },1000);
}

//and the function to toggleFullscreen

function toggleFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } 
    else if (video.mozRequestFullScreen) { 
      video.mozRequestFullScreen();
    } 
    else if (video.webkitRequestFullscreen) { 
      video.webkitRequestFullscreen();
    } 
    else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
    }
}
