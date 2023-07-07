const images = document.querySelectorAll(".para-img");



window.addEventListener("scroll", debounce(checkSlide));


function checkSlide(e){
    //loop over each img and figure out at which point img needs to be shown (peaking at about 50%)
    images.forEach( image => {
        //window.scrollY is Y position away from TOP of document
        //window.innerHeight is the height of our browser window

        //we adthis will give us the Y position of the doc as it appears at the BOTTOM of the window
        //subtract it by image.height / 2 so img comes in as it peeks halfway
        const slideInAt = (window.scrollY + window.innerHeight) - 
            (image.height / 2);

        const imgBottom = image.getBoundingClientRect().bottom;

        const isHalfShown = slideInAt > image.getBoundingClientRect().top;
        const notScrollPast = window.scrollY < imgBottom;

        if(isHalfShown && notScrollPast){
            image.classList.add("bring-back");
        }else{
            image.classList.remove("bring-back");
        }
    });
}

/* debounce is used so checkSlide is Not called everytime we scroll. We feed 
checkSlide into debounce, then we are only allowed to call it every 20ms */

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



/* 
    const leeway = 200;

    let bringForward = false;
    let pastStatus;
    let id = 1;

    window.addEventListener("scroll", (e) => {
    //console.log(e);
    //console.log(window.scrollY);
    let curImg = document.getElementById(`img-1`);

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
    }

    console.log(bringForward);
    console.log(id);

    
}); */