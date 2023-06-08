// https://learnwebcode.github.io/json-example/animals-1.json

const ourRequest = new XMLHttpRequest();

ourRequest.open("get", "https://learnwebcode.github.io/json-example/animals-1.json");

ourRequest.onload = function(){

    let info = JSON.parse(ourRequest.responseText);
    console.log(info[0]);
};

ourRequest.send();
