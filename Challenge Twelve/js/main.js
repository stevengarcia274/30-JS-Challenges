const falls = document.getElementById("falls");

const fallsPosition = falls.getBoundingClientRect();
const fallsPositionY = fallsPosition.y + window.scrollY;

const leeway = 200;

let bringForward = false;
let pastStatus;

window.addEventListener("scroll", (e) => {
    /* console.log(e); */
    /* console.log(window.scrollY); */
    pastStatus = bringForward;

    if(window.scrollY > fallsPositionY - leeway){
        bringForward = true;
    }else{
        bringForward = false;
    }

    if(pastStatus != bringForward){
        console.log("hello");
    }

    
});

console.log(fallsPositionY + (falls.style.height / 2));