/* https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/
https://www.toptal.com/developers/keycode 
https://daily-dev-tips.com/posts/javascript-detecting-which-key-is-pressed/*/

const sounds = new Map([
    [65, document.getElementById("audio-a")],
    [83, document.getElementById("audio-s")],
    [68, document.getElementById("audio-d")],
    [70, document.getElementById("audio-f")],
    [71, document.getElementById("audio-g")],
    [72, document.getElementById("audio-h")],
    [74, document.getElementById("audio-j")],
    [75, document.getElementById("audio-k")],
    [76, document.getElementById("audio-l")]
]);



document.onkeydown = function (e) {
  let keyNum = e.keyCode;

  if(sounds.has(keyNum) == false){
    return;
  }else{
    let playKey = sounds.get(keyNum);
    parentOf = playKey.parentElement;
    parentOf.classList.add("pressed");
    
    playKey.currentTime = 0;
    playKey.play();
  }
};

function removeTransition(item){
  if(item.propertyName != "transform"){
    return;
  }else{
    item.srcElement.classList.remove("pressed");
    /* this.classList...does the same thing */
  }
  /* console.log(item.propertyName);
  console.log(item); */

}

const keys = document.querySelectorAll(".beat-item");
keys.forEach( e => e.addEventListener("transitionend", removeTransition));