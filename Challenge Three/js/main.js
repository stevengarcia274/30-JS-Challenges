const r = document.querySelector(":root");

const inputs = document.querySelectorAll(".img-setting input");


function handleEvent(){
    let id = this.id;
    let newVal = this.value;
    let suffix = this.dataset.sizing || '';
    
    console.log(newVal);
    console.log(this.id);

    r.style.setProperty(`--${this.id}`, `${newVal}${suffix}` );
}




inputs.forEach(input => input.addEventListener("change", handleEvent));

inputs.forEach(input => input.addEventListener("mousemove", handleEvent));

