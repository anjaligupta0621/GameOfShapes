/*
Part 1
- Have a box on the screen
- When it is clicked, it disappears
- When the box is clicked, it reappears after a few seconds
- Measure the time between shape appearing and clicked
- Output that time

Part 2
- Random delay time
- Random location on screen
- Random shapes
- Random color
*/

var startTime;
var clickedTime;

window.onload = appear();

function vanish() {
    document.getElementById("box").style.display = "none";
    clickedTime = Date.now()
    var ReactionTime = (clickedTime - startTime)/1000;
    document.getElementById("resultpara").innerHTML = "Time taken by you: "+ReactionTime+" seconds";
    var delayTime = ((Math.random()*2)+1)*1000;
    setTimeout(appear,delayTime);
}

function appear() {
    var randomTop = (Math.random()*400)+100;
    var randomLeft = (Math.random()*600)+40;
    var randomHeight = (Math.random()*200)+50;
    var randomWidth = (Math.random()*200)+50;
    var randomCurve = Math.random();
    var randomColor = getColor();
    if (randomCurve < 0.5) {
        document.getElementById("box").style.borderRadius = "25px";
    } else {
        document.getElementById("box").style.borderRadius = "0px";
    }
    document.getElementById("box").style.top = randomTop+'px';
    document.getElementById("box").style.left = randomLeft+'px';
    document.getElementById("box").style.height = randomHeight+'px';
    document.getElementById("box").style.width = randomWidth+'px';
    document.getElementById("box").style.backgroundColor = randomColor;
    document.getElementById("box").style.display = "block";
    startTime = Date.now();
}

function getColor() {
    var color1 = "#";
    var letters = "0123456789ABCDEF";
    for (var i=0;i<6;i++){
        color1 += letters[Math.floor(Math.random()*16)];
    }
    return color1;
}


