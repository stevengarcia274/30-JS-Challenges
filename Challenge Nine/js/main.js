const boxes = document.querySelectorAll(".choice");

let lastClicked;
let prvsClicked;
console.log(boxes);


/* let c2 = document.getElementById("c-2");

console.log(c2.checked);


c2.checked = !c2.checked;

console.log(c2.checked); */

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        
    });
    
});

window.addEventListener("keyup", (e) => {
    if(e.key == 'Shift'){
        console.log(e.key);
    }else{
        return
    }
});