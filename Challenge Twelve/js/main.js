const leeway = 200;

let bringForward = false;
let pastStatus;
let id = 1;

const images = document.querySelectorAll(".para-img");

console.log(images);

function checkSlide(e){
    console.log(e);
}

window.addEventListener("scroll", checkSlide);

function debounce(func, wait = 20, immediate = true){
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}



/* window.addEventListener("scroll", (e) => {
    //console.log(e);
    //console.log(window.scrollY);
    let curImg = document.getElementById(`img-${id}`);

    let curImgPosition = curImg.getBoundingClientRect();
    let curImgY = curImgPosition.y + window.scrollY;


    pastStatus = bringForward;

    if(window.scrollY > curImgY - leeway){
        bringForward = true;
    }else{
        bringForward = false;
    }

    if(pastStatus != bringForward){
        curImg.classList.toggle("bring-back");
        id++;
    }

    console.log(bringForward);
    console.log(id);

    
}); */




/* console.log(fallsPositionY + (falls.style.height / 2)); */