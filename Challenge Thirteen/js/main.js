const addButton = document.querySelector(".submit-item");
const textBar = document.querySelector(".enter-item");

function isEmpty(str){
    let regularEx = new RegExp("/h/", "ig");
    let you = str.filter(letter => {
        letter.match("h");
    }); 
    
    console.log(you);
}


addButton.addEventListener("click", () => {
    console.log(textBar.value);
});

let g = "hello my name is";

let t = Array.from(g);
isEmpty(t);
