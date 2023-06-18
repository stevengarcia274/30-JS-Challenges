const canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext("2d");

let mouse = {
    x : undefined,
    y : undefined 
}

window.addEventListener("mousemove", 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    
});

function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;


    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
    }

    this.update = function(){
        this.draw();

        if((this.x + this.radius > innerWidth) || (this.x - this.radius < 0)){
            this.dx = -this.dx;
        } 

        if((this.y + this.radius > innerHeight) || (this.y - this.radius < 0)){
            this.dy = -this.dy;
        }


        this.x += this.dx;
        this.y += this.dy;

        //interactiviy
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50){
            this.radius += 1;
        }
    }
}





let circles = [];

for(let i = 0; i < 100; i++){
    const radius = 40;
    let x = Math.floor(Math.random() * (innerWidth - radius * 2)) + radius;
    let y = Math.floor(Math.random() * (innerHeight - radius * 2)) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;

    circles.push(new Circle(x, y, radius, dx, dy));

}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let x in circles){
        circles[x].update();
    }

}


animate();








