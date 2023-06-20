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
        console.log(document.getElementById(box.id).checked + "l");
        lastClickedOn(box.id);
        console.log(e);
        
        console.log(lastClicked);
    })
})

function lastClickedOn(id){
    let curEle = document.getElementById(id);
    console.log(curEle.checked);

    if(curEle.checked == false ){
        console.log("inherer");
        return
        
    }else{
        lastClicked = id;
    }

}