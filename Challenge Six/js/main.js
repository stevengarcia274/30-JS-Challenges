const searchBar = document.getElementById("search");

const clickBtn = document.getElementById("click");

const hello = "hello";

searchBar.addEventListener("keyup", () => {
    getData(searchBar.value);
});


function printHi(hello){
    console.log(hello);
}

function callData(search){
    getData(search);
}

function getData(search) { 
    const dataPull = new XMLHttpRequest;
     

    dataPull.onload = function (){
        let jsonData = JSON.parse(dataPull.responseText);

        const searchExp = new RegExp(search, "gi");

        let x = jsonData.filter(e => e.city.match(searchExp) || e.state.match(searchExp));

        try{
            x[0].city;
        }catch(error){
            console.log("not valid");
        }

        document.getElementById("demo").innerHTML = x[0].city;
        

    }

    dataPull.open("get", "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json");
    
    dataPull.send();

}

/* function findMatches(search, data){
    const searchExp = new RegExp(search, "gi");

    let x = data.filter(e => e.city.match(searchExp) || e.state.match(searchExp));

    document.getElementById("demo").innerHTML = x[0];
    console.log(x[0]);
    
} */


/* getData("iowa", findMatches);
 */








const data = [
    {
        "city": "New York", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 40.7127837, 
        "longitude": -74.0059413, 
        "population": "8405837", 
        "rank": "1", 
        "state": "New York"
    }, 
    {
        "city": "Los Angeles", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 34.0522342, 
        "longitude": -118.2436849, 
        "population": "3884307", 
        "rank": "2", 
        "state": "California"
    }, 
    {
        "city": "Chicago", 
        "growth_from_2000_to_2013": "-6.1%", 
        "latitude": 41.8781136, 
        "longitude": -87.6297982, 
        "population": "2718782", 
        "rank": "3", 
        "state": "Illinois"
    }, 
    {
        "city": "Houston", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 29.7604267, 
        "longitude": -95.3698028, 
        "population": "2195914", 
        "rank": "4", 
        "state": "Texas"
    }
];
