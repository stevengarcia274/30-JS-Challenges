const aheadContent = new XMLHttpRequest;

const cities = [];

aheadContent.open("get", "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")

aheadContent.onload = function(){
    let jsonContent = JSON.parse(aheadContent.responseText);
    console.log(jsonContent);



}

aheadContent.send();