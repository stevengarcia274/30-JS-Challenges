const enterTxt = document.querySelector(".enter-item");
const submitItem = document.querySelector(".submit-item");

const optionsList = document.querySelector(".all-options");

let id = 0;


function addItem(){
    let inputValue = enterTxt.value;
    if(isEmpty(inputValue)){
        window.alert("Invalid entry, try again.");
    }else{
        createElement(inputValue, id);
        id++;
    }

    enterTxt.value = "";
}

function isEmpty(txt){
    const testEx = new RegExp(/\s+/, "ig");
    const txtArr = [...txt];

    const filtered = txtArr.filter(item => {
        return !item.match(testEx);
    });

    return filtered.length === 0;    
}

function createElement(txt, num){
    //make div with class option
    const option = document.createElement("div");
    option.classList.add("option");

    //make input and label
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", `addOp-${num}`);
    input.setAttribute("id", `newAddOp-${num}`);

    //make label
    const label = document.createElement("label");
    label.setAttribute("for", input.name);
    label.classList.add("op-title");

    const labelTxt = document.createTextNode(txt);
    label.appendChild(labelTxt);


    option.appendChild(input);
    option.appendChild(label);

    /* console.log(option); */

    optionsList.appendChild(option);

    /* Things I think were causing infinte loop:
       - creating new elements with the same info, not 
       checking if they were in local storage already
       - incrementing ID in this fnc b/c it when it would
       go back to the next iteratin in addToLocal it was
       bigger then when it left
    */
    
    addToLocal(num, txt);
}

function addToLocal(key, value){
    if(localStorage.getItem(key) === null){
        localStorage.setItem(key, value);
    }else{
        return
    }

}

function loadItems(){
    id = localStorage.length;
    let i = 0;
    while(i < id){
        /* console.log(localStorage.getItem(i)); */
        createElement(localStorage.getItem(i), i);
        i++;
    }
}

submitItem.addEventListener("click", addItem);

window.addEventListener("load", loadItems);

optionsList.addEventListener("click", (e) => {
    if(e.target.tagName === "LABEL"){
        const corespondingBox = e.target.previousElementSibling;
        corespondingBox.checked = !corespondingBox.checked;
        
    }
})
