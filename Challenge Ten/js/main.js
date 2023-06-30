const video = document.querySelector("video");
const play = document.querySelector(".play");
const videoPlayer = document.querySelector(".video-player");

function playVideo(){
    video.paused ? video.play() : video.pause();
}

play.addEventListener("click", playVideo);

videoPlayer.addEventListener("click", playVideo);