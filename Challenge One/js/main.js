/* https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/
https://www.toptal.com/developers/keycode */

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

let playWhat = sounds.get(74);

document.getElementById("press-s").addEventListener("click", () => playWhat.play());

let audA = document.getElementById("audio-a");


document.getElementById("press-a").addEventListener("click", () => audA.play());