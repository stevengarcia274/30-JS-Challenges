const r = document.querySelector(":root");

let space = document.getElementById("s-slider");
let blur = document.getElementById("b-slider");


blur.addEventListener("change", setBlur);
space.addEventListener("change", setSpace);



function myFunc(){
    
    console.log(blur.value);

}

function setSpace(){
    let spaceVal = space.value;
    console.log(spaceVal);
    let spaceCalc = spaceVal * 4;
    r.style.setProperty("--spacing-amnt", `${spaceCalc}px` );
}

function setBlur(){
    let newVal = blur.value;
    console.log(newVal);
    r.style.setProperty("--img-blur", `${newVal}px` );
}