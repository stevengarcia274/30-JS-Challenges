const r = document.querySelector(":root");

let space = document.getElementById("s-slider");
let blur = document.getElementById("b-slider");
let color = document.getElementById("base-picker");



blur.addEventListener("change", setBlur);
space.addEventListener("change", setSpace);
color.addEventListener("change", setColor);



function myFunc(){
    
    color.value = "#FF8040";

}


function setColor(){
    let colorVal = color.value;
    console.log(colorVal);
    r.style.setProperty("--base-pick", `${colorVal}` );

}

function setSpace(){
    let spaceVal = space.value;
    /* console.log(spaceVal); */
    let spaceCalc = spaceVal * 4;
    r.style.setProperty("--spacing-amnt", `${spaceCalc}px` );
}

function setBlur(){
    let newVal = blur.value;
    /* console.log(newVal); */
    r.style.setProperty("--img-blur", `${newVal}px` );
}