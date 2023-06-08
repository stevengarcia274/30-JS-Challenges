
const infoButton = document.getElementById("info");
const infoContainer = document.getElementById("add-info");

let count = 1;

let conNodeList;

function loadThree(){
    const petRequest = new XMLHttpRequest;

    petRequest.open("get", `https://learnwebcode.github.io/json-example/animals-${count}.json`);

    petRequest.onload = function(){
        /* if(this.status == 404){
            document.getElementById("info").style.display = "none";
        } */
        if(count == 3){
            document.getElementById("info").style.display = "none";
        }

        let info = JSON.parse(petRequest.responseText);

        for (let x in info){
            let current = info[x];
            let paraNode = document.createElement("p");
            let textNode = document.createTextNode(`${current.name} is a ${current.species} that likes to eat ${current.foods.likes[0]} and dislikes ${current.foods.dislikes[0]}.`);

            paraNode.classList.add("info-item");

            paraNode.appendChild(textNode);

            infoContainer.appendChild(paraNode);

        }

        conNodeList = infoContainer.querySelectorAll("p");

        count++;   
    }

    petRequest.send();
}


infoButton.addEventListener("click", loadThree);

