const vidPlayer = document.querySelector(".video-player");
const video = document.getElementById("video-one");
const vidControls = document.querySelector(".video-controls");
const progressBar = document.getElementById("progress-bar")
const videoButtons = document.querySelector(".video-buttons");
const play = document.getElementById("display");



let isPlaying = false;

function playVideo(){
    isPlaying = !isPlaying;
    if(isPlaying == true){
        video.play();
        document.getElementById("display").innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else{
        video.pause();
        document.getElementById("display").innerHTML = '<i class="fa-solid fa-play"></i>';

    }



}


play.addEventListener("click", playVideo);

vidPlayer.addEventListener("mouseenter", () =>{
    progressBar.style.margin = "8px 0px";
    videoButtons.style.display = "block";
    
});

vidPlayer.addEventListener("mouseleave", () =>{
    progressBar.style.margin = "0px";
    videoButtons.style.display = "none";

    
});

