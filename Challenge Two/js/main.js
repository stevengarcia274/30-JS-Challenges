
function setTime(){
    let currentTime = new Date();
    document.getElementById("demo").innerHTML = currentTime;
    /* console.log(currentTime.getSeconds()); */
    let secDeg = currentTime.getSeconds() * 6;
    let minDeg = currentTime.getMinutes() * 6;
    let minInDeg = Math.round((currentTime.getMinutes() / 60) * 100) / 100;;
    let hrDeg = (currentTime.getHours() + minInDeg) * 30;
    document.getElementById("sec").style.transform = `rotate(${secDeg}deg)`;
    document.getElementById("min").style.transform = `rotate(${minDeg}deg)`;
    document.getElementById("hrs").style.transform = `rotate(${hrDeg}deg)`;


    
}


setInterval(setTime, 1000);