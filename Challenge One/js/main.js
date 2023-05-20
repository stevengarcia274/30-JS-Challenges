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
    return 0;
  }else{
    let playKey = sounds.get(keyNum);
    parentOf = playKey.parentElement;
    parentOf.style.background = "rgba(53, 136, 238, 0.65)";
    
    playKey.play();
  }
};

document.onkeyup = function (e) {
  let keyNum = e.keyCode;
  /* console.log("keyup");
  console.log(keyNum); */

  if(sounds.has(keyNum) == false){
    return 0;
  }else{
    let playKey = sounds.get(keyNum);

    parentOf = playKey.parentElement;
    parentOf.style.background = "rgba(221, 221, 221, 0.35)";
    
  }
};





/* let playWhat = sounds.get(74); */

/* document.getElementById("press-s").addEventListener("click", () => playWhat.play());

let audA = document.getElementById("audio-a");


document.getElementById("press-a").addEventListener("click", () => audA.play()); */