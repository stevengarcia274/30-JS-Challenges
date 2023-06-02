const container = document.querySelector(".container");

const conItems = container.querySelectorAll(".item");



function toggleOn(){
    conItems.forEach(item => item.getAttribute("id") !== this.getAttribute(("id")) ? item.classList.remove("grow") : item.classList.toggle("grow"));
}

function toggleActive(e){
    console.log(e);
    console.log(e.propertyName);
    
    if(e.propertyName.includes("flex")){
        this.classList.toggle("grow-active");
    }
    
}

/* id rather be pushing flowers then to be in the pen sharing showers tony 
ton */

//mouseover looks kind of cool too
conItems.forEach(item => item.addEventListener("click", toggleOn));

conItems.forEach(item => item.addEventListener("transitionend", toggleActive));
