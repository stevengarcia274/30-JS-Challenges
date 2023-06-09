const container = document.getElementById("container");

console.log(container);

const conItems = container.querySelectorAll(".item");

console.log(conItems);

conItems.forEach(e => e.addEventListener("click", flexGrow));


function flexGrow(){
    //current item that was clicked on
    const current = this.getAttribute("id"); 

    console.log(current);
    console.log("before " + this.dataset.value);

    if (this.dataset.value === "true"){
        /* if value is equal to true before the 
        item is clicked that means we must TURN OFF the current item */
        conItems.forEach(function (e){
            /* all items need to be set back to 1 and values switched to off */
            e.style.flex = "1";
            e.style.fontSize = "3.5rem";
            e.dataset.value = "false";
            hideItems(e, "none");
        });
    }else{
        /* else this means that the item that was clicked needs to grow */
        this.dataset.value = "true"; 
        //set its grow value to true
        conItems.forEach(function (e){
            // go through each item 
            if(e.getAttribute("id") === current ){
                /* if it IS the currently clicked item set its flex grow to 3*/
                e.style.flex = "5";
                e.style.fontSize = "3.5rem";
                hideItems(e, "block");

            }else{
                /* if the item during iteration does not match our current clicked
                item TURN its value to false (off) and set its flex to 1 */
                e.style.flex ="1";
                e.style.fontSize = "2rem";
                e.dataset.value = "false";
                hideItems(e, "none");
            }
        });
    }
    console.log("after click " + this.dataset.value)
}

function hideItems(element, status){
    let display = element.querySelectorAll(".hidden");
    display.forEach(e => e.style.display = status);
}


