const boxes = document.querySelectorAll(".choice");

let lastClicked = "";

/* console.log(boxes); */

boxes.forEach(box => {
    box.addEventListener("click", e => {
        /* console.log(e); */
        let curEle = document.getElementById(box.id);
        /* console.log("checked? " + curEle.checked); */

        
        if(curEle.checked === false){
            lastClicked = "";
            
        }else{
            if(e.shiftKey === true){
                let pointA = Number(box.id.split("-")[1]);
                let pointB = Number(lastClicked.split("-")[1]); 
                /* console.log("start at " + pointA);
                console.log("end at " + pointB); */

                let i = pointA + 1;
                let to = pointB;
                if(pointA > pointB){
                    i = pointB + 1;
                    to = pointA;
                }
                /* console.log("i " + i);
                console.log("to " + to); */
                while(i < to){
                    let eleToChange = document.getElementById(`c-${i}`);
                    eleToChange.checked = true;

                    let pToChange = document.getElementById(`p-${i}`);
                    pToChange.style.textDecoration = "line-through";
                    
                    i++;
                }

                lastClicked = box.id;
            }else{
                lastClicked = box.id;
            }

        }

        /* console.log("last clicked " + lastClicked); */

    });

    box.addEventListener("change", (e) => {
        let curEle = document.getElementById(box.id);
        let pID = box.id.split("-")[1];
        let eleToChange = document.getElementById(`p-${pID}`);
        if(curEle.checked === true){
            eleToChange.style.textDecoration = "line-through";
        }else{
            eleToChange.style.textDecoration = "none";
        }



    });
});
