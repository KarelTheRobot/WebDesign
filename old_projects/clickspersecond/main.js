var active = 0;
var clicks = 0;
var time = 0;

function clicked() {
    if (active) {
        clicks += 1;
    } else {
        active = 1;
        startTest();
    }
}

function startTest() {
    setInterval(updateText, 10);
}

function updateText() {
    time += 10;
    var text = document.getElementById("cps");
    text.innerHTML = "Clicks per second: " + (clicks * 1000/ time)
}