let canvas = document.querySelector("canvas");

canvas.height = innerHeight;
canvas.width = innerWidth;

const c = canvas.getContext("2d");

c.lineCap = "round";
c.lineJoin = "round";
c.strokeStyle = "red";
c.lineWidth = 0;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;

let isDrawing = false;

function draw(x, y){
    if (isDrawing == false){
        return
    }

    c.beginPath();
    c.moveTo(lastX, lastY);
    c.lineTo(x, y);
    c.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    if(c.lineWidth >= 100 || c.lineWidth <= 1){
        direction = !direction;
    }

    if(direction == true){
        c.lineWidth++;
    }
    else{
        c.lineWidth--;
    }


    c.stroke();

    lastX = x;
    lastY = y;
    
    if(hue > 360){
        hue = 0;
    }
    hue ++;
}

window.addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
})

window.addEventListener("mousemove", (e) => {
    draw(e.offsetX, e.offsetY);
})

window.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})

window.addEventListener("mouseup", () => {
    isDrawing = false;
})
