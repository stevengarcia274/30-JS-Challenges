const boxes = document.querySelectorAll(".choice");

let lastClicked = "";
let prvsClicked = "";
console.log(boxes);


/* let c2 = document.getElementById("c-2");

console.log(c2.checked);


c2.checked = !c2.checked;

console.log(c2.checked); */

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        let curBox = document.getElementById(box.id);
        if(curBox.checked == false){
            /* prvsClicked = lastClicked;
            lastClicked = ""; */

            lastClicked = prvsClicked;
            prvsClicked = "";

            console.log(prvsClicked + "prvs");
            console.log(lastClicked + "last");
            return
        }else{
            if(lastClicked == ""){
                prvsClicked = prvsClicked;
            }else{
                prvsClicked = lastClicked;

            }
            lastClicked = box.id;
            console.log(prvsClicked + "prvs");
            console.log(lastClicked + " last");

        }
    });

    box.addEventListener("keydown", (e) => {
        if(e.key == "Shift"){
            console.log(e);
            let indexStart = prvsClicked.split("-");
            console.log(indexStart);
            console.log(prvsClicked + "prev");
            console.log(lastClicked + "last");
            window.addEventListener("mousemove", () => {
                document.querySelector(".checkbox-container").style.background = "red";
            })

        }


    })
    
});


/* let startAt = lastClicked;

window.addEventListener("mousemove", (e) => {
    
    if(e.shiftKey == true){
        
        if(prvsClicked != "" && lastClicked != ""){
            console.log(prvsClicked + "hi");
            console.log(lastClicked);

        }
    }
    else{
        return
    }
});
 */