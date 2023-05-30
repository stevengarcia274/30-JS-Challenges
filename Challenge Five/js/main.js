const container = document.getElementById("container");

console.log(container);

const conItems = container.querySelectorAll(".item");

console.log(conItems);

conItems.forEach(e => e.addEventListener("click", flexGrow));

/* conItems.forEach(e => e.addEventListener("click", myOff)); */





function flexGrow(){
    /* let target = this.getAttribute("name");
    conItems.forEach(e => e.getAttribute("name") != target ? e.style.flex = "none" : e.style.flex = "1"); */
    const current = this.getAttribute("id");
    console.log(current);
    console.log("before " + this.dataset.value);
    if (this.dataset.value === "true"){
        /* this.dataset.value = "false" */
        conItems.forEach(function (e){
            e.style.flex = "1";
            e.dataset.value = "false";
        });
    }else{
        this.dataset.value = "true";
        conItems.forEach(function (e){
            if(e.getAttribute("id") === current ){
                e.style.flex = "3";
            }else{
                e.style.flex ="1";
                e.dataset.value = "false";
            }
        });
    }
    console.log("after click " + this.dataset.value)
}


