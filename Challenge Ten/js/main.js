const vidPlayer = document.querySelector(".video-player");
const video = document.getElementById("video-one");
const progressBar = document.getElementById("progress-bar")
const videoButtons = document.querySelector(".video-buttons");
const play = document.getElementById("display");
const volSlider = document.getElementById("vol-slider");
const speed = document.getElementById("speed-slider");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");


let isPlaying = false;
let atEnd = false;

let interval;

const forwardAmnt = 25;
const backwardAmnt = 10;

function playVideo(){
    isPlaying = !isPlaying;
    if(isPlaying){
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        video.play();
    }else{
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        video.pause();
    }
}

function updateTime(){
    /* console.log(video.currentTime); */
    /* console.log("here"); */
    let num = (video.currentTime / video.duration) * 100;
    /* console.log(num.toFixed(2)); */
    progressBar.style.width = `${num.toFixed(2)}%`;
    if(video.currentTime >= video.duration){
        clearInterval(interval);
        play.innerHTML = '<i class="fa-solid fa-play"></i>'; 
        video.load();

        /* console.log("end"); */
    }
}

play.addEventListener("click", playVideo);

play.addEventListener("click", () => {
    if(isPlaying){
        interval = setInterval(updateTime, 100);
    }else{
        clearInterval(interval);
    }
    
});


vidPlayer.addEventListener("mouseenter", () =>{
    progressBar.style.height = "12px";
    videoButtons.style.display = "block";

});

vidPlayer.addEventListener("mouseleave", () =>{
    progressBar.style.height = "8px";
    videoButtons.style.display = "none";
    
});

volSlider.addEventListener("mousemove", () => {
    video.volume = volSlider.value / 100;
});

volSlider.addEventListener("click", () => {
    video.volume = volSlider.value / 100;
});

speed.addEventListener("mousemove", () => {
    video.playbackRate = speed.value / 100;
});

speed.addEventListener("click", () => {
    video.playbackRate = speed.value / 100;
});

forward.addEventListener("click", () => {
    let jumpTo = video.currentTime + forwardAmnt;
    if(jumpTo >= video.duration){
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        video.load();

    }else{
        video.currentTime = jumpTo;
        let num = (jumpTo / video.duration) * 100;
        progressBar.style.width = `${num.toFixed(2)}%`;
    }
});

backward.addEventListener("click", () => {
    let backTo = video.currentTime - backwardAmnt;
    video.currentTime = backTo;
});



