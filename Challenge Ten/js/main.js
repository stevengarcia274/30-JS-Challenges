/* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement */
const video = document.querySelector(".viewer");
const vPlayer = document.querySelector(".video-player");
const playButton = vPlayer.querySelector(".play");
const skips = vPlayer.querySelectorAll(".skips");
const sliders = vPlayer.querySelectorAll(".sliders");
const progressBar = vPlayer.querySelector(".progress-bar");
const progress = progressBar.querySelector(".progress");


let sliderMove = false;
let scrubbing = false;

function playVideo(){
    video.paused ? video.play() : video.pause();
}

function toggleButton(){
    if(video.paused){
        playButton.innerHTML = '<i class="fa fa-play"></i>';
    }else{
        playButton.innerHTML = '<i class="fa fa-pause"></i>';
    }
}

function skipAmount(e){
    video.currentTime += parseFloat(this.dataset.skip);
}

function adjustSlider(){
    if(sliderMove == true){
        console.log(this.value);
        video[this.name] = this.value;
    }else{
        return
    }
    
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
}

function scrubVideo(e){
    const percent = e.offsetX / progressBar.offsetWidth * video.duration;

    progress.style.flexBasis = `${percent}%`;

    const vidPlace = percent;

    video.currentTime = vidPlace;
}

playButton.addEventListener("click", playVideo);

video.addEventListener("click", playVideo);
video.addEventListener("play", toggleButton);
video.addEventListener("pause", toggleButton);
video.addEventListener("timeupdate", handleProgress);

let mousedown = false;

progressBar.addEventListener("click", scrubVideo);
progressBar.addEventListener("mousemove", (e) => mousedown && scrubVideo(e));
progressBar.addEventListener("mousedown", () => mousedown = true);
progressBar.addEventListener("mouseup", () => mousedown = false);


skips.forEach(skip => {
    skip.addEventListener("click", skipAmount);
});

sliders.forEach(slider => {
    slider.addEventListener("change", (e) => {
        video[e.srcElement.name] = e.srcElement.value;
    });
    slider.addEventListener("mousedown", () => {
        sliderMove = true;
    });
    slider.addEventListener("mouseup", () => {
        sliderMove = false;

    });
    slider.addEventListener("mousemove", adjustSlider);

});






