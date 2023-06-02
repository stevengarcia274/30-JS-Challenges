const container = document.querySelector(".container");

const conItems = container.querySelectorAll(".item");

conItems.forEach(item => item.addEventListener("click", toggleOn));

function toggleOn(){
    conItems.forEach(item => item.getAttribute("id") !== this.getAttribute(("id")) ? item.classList.remove("grow") : item.classList.toggle("grow"));
}