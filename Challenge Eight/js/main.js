const canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//line

const c = canvas.getContext("2d");

let x = 150;

let dx = 1; 

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, 150, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "green";
    c.stroke();

    if( x == innerWidth){
        x -= dx;
    }else{
        x += dx;
    }
}


animate();








