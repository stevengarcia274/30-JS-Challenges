//set up commonly referenced elements
const searchBar = document.getElementById("search");

const searchResults = document.getElementById("results-container");

//keyup event listener to detect search
searchBar.addEventListener("keyup", () => {
    getData(searchBar.value)
});

//eventlistener to avoid results just hanging there

searchBar.addEventListener("focusout", clearDemo);

function getData(search) { 
    //XMLrequest
    const dataPull = new XMLHttpRequest;
     

    dataPull.onload = function (){
        let jsonData = JSON.parse(dataPull.responseText);


        const searchExp = new RegExp(search, "gi");

        let x = jsonData.filter(e => e.city.match(searchExp) || e.state.match(searchExp));

        let sortedX = x.sort( (a,b) => b.population - a.population);

        /* attempt at error handling, when search is invalid/yields nothing */
        try{
            //building html elements for results
            let i = 0 
            let txt = ``;
            if(x.length === 0){//no results
                searchResults.innerHTML = `<p class="result">No Results.</p>`;
            }else if(search === ""){//searchbar is active but no value
                searchResults.innerHTML = ``;
            }else{
                /* I only want to display the top ten results based on population */
                while(i < (x.length > 10 ? 10 : x.length)){
                    //if there's less then ten returned only show those

                    let pop = Number(sortedX[i].population);
                    let popStr = pop.toLocaleString("en-US");

                    txt += `<p class="result">
                    <span class=location>${sortedX[i].city}, ${sortedX[i].state}</span>
                    <span class="pop">${popStr}</span>
                    </p>`;
                    i++;
                }

                //add results to div
                searchResults.innerHTML = txt;
            }
                
        }catch(error){
            console.log("No Results.");
        }

        /* console.log(x); */    
    }

    dataPull.open("get", "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json");
    
    dataPull.send();

}

function clearDemo(){
    searchResults.innerHTML = "";
}



