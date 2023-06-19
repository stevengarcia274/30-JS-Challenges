let canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


let c = canvas.getContext("2d");

c.strokeStyle = "#BADA55";
c.lineJoin = "round";
c.lineCap = "round";
c.lineWidth = 0;
/* c.globalCompositeOperation = "multiply"; */

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0
let direction = true;

function draw(e){
    if(!isDrawing){
        return;//stop fnc when mouse is not down
    }

    console.log(e);
    
    c.beginPath();

    c.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    //start from
    c.moveTo(lastX, lastY);

    //go to
    c.lineTo(e.offsetX, e.offsetY);
    c.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
    hue ++;
    if(hue >= 360){
        hue = 0;
    }

    if(c.lineWidth >= 100 || c.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        c.lineWidth ++;
    }else{
        c.lineWidth --;

    }


}


canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => { 
    isDrawing = false;
})
canvas.addEventListener("mouseout", () => { 
    isDrawing = false;
})





