const vidPlayer = document.querySelector(".video-player");
const video = document.getElementById("video-one");
const progressBar = document.getElementById("progress-bar")
const videoButtons = document.querySelector(".video-buttons");
const play = document.getElementById("display");
const volume = document.getElementById("vol-slider");
const speed = document.getElementById("speed-slider");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");


let isPlaying = false;

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

function updateProgressBar(value){
    progressBar.style.width = `${value}%`;
}

function updateTime(){
    //calculate percentage of time, to update progress bar
    let num = (video.currentTime / video.duration) * 100;
    //update progress bar
    /* progressBar.style.width = `${num.toFixed(2)}%`; */
    updateProgressBar(num.toFixed(2));
    //stop set interval if we go over the time
    if(video.currentTime >= video.duration){
        clearInterval(interval);
        play.innerHTML = '<i class="fa-solid fa-play"></i>'; 
        video.load();

    }
}

//play button event listener
play.addEventListener("click", playVideo);

/* hit play, start the set interval. Only if video is 
moving forward*/
play.addEventListener("click", () => {
    if(isPlaying){
        interval = setInterval(updateTime, 100);
    }else{
        //else we know video was just paused, end the interval
        clearInterval(interval);
    }
    
});

/* bring up the rest of the controls and adjust prgress bar height when hovering over video*/
vidPlayer.addEventListener("mouseenter", () =>{
    progressBar.style.height = "12px";
    videoButtons.style.display = "flex";

});

//hide controls again
vidPlayer.addEventListener("mouseleave", () =>{
    progressBar.style.height = "8px";
    videoButtons.style.display = "none";
    
});


//set volume to eqaul slider value
volume.addEventListener("mousemove", () => {
    //must be number between 0 and 1
    video.volume = volume.value / 100;
});

volume.addEventListener("click", () => {
    video.volume = volume.value / 100;
});

speed.addEventListener("mousemove", () => {
    //must be a number between 0.5 and 2
    //look at the min and max of the slider in HTML
    video.playbackRate = speed.value / 100;
});

speed.addEventListener("click", () => {
    video.playbackRate = speed.value / 100;
});

forward.addEventListener("click", () => {
    //point in vid to skip to
    let jumpTo = video.currentTime + forwardAmnt;
    if(jumpTo >= video.duration){
        //what to do if we go over the time
        video.currentTime = 0;
        play.innerHTML = '<i class="fa-solid fa-play"></i>'; 
        updateProgressBar(100);
        video.pause();

    }else{
        video.currentTime = jumpTo;
        let num = (jumpTo / video.duration) * 100;
        /* progressBar.style.width = `${num.toFixed(2)}%`; */
        updateProgressBar(num.toFixed(2));
    }
});

backward.addEventListener("click", () => {
    //point in vid to skip back to
    let backTo = video.currentTime - backwardAmnt;
    if(backTo <= 0){
        /* progressBar.style.width = `0%`; */
        updateProgressBar(0);
        video.currentTime = 0;
    }else{
        video.currentTime = backTo;
        let num = (backTo / video.duration) * 100;
        /* progressBar.style.width = `${num.toFixed(2)}%`; */
        updateProgressBar(num.toFixed(2));

    }
});



