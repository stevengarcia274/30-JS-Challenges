
const items = document.querySelectorAll(".item");

function toggleOpen(){

    this.classList.toggle("open");

}

function toggleActive(e){
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }

}


items.forEach(item => item.addEventListener("click", toggleOpen));


items.forEach(item => item.addEventListener("transitionend", toggleActive));