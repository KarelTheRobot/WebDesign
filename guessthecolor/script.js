var r = 0;
var g = 0;
var b = 0;

function restart() {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    bg = document.getElementById("background");
    bg.style.background = "rgb(" + r +", " + g +", " + b + ")";
    document.getElementById("result").innerHTML = "";
    document.getElementById("team1r").value = "";
    document.getElementById("team1g").value = "";
    document.getElementById("team1b").value = "";
    document.getElementById("team2r").value = "";
    document.getElementById("team2g").value = "";
    document.getElementById("team2b").value = "";
}

function check() {
    console.log("hello");
    console.log(document.getElementById("team1r").value);
    team1r = document.getElementById("team1r").value;
    team1g = document.getElementById("team1g").value;
    team1b = document.getElementById("team1b").value;
    team2r = document.getElementById("team2r").value;
    team2g = document.getElementById("team2g").value;
    team2b = document.getElementById("team2b").value;
    team1score = Math.abs(team1r - r) + Math.abs(team1g - g) + Math.abs(team1b - b);
    team2score = Math.abs(team2r - r) + Math.abs(team2g - g) + Math.abs(team2b - b);
    text = "Result: (" + r + ", " + g + ", " + b + ")<br>"
    text += "Team 1 score: " + Math.abs(team1r - r) + " + " + Math.abs(team1g - g) + " + " + Math.abs(team1b - b) + " = " + team1score + "<br>";
    text += "Team 2 score: " + Math.abs(team2r - r) + " + " + Math.abs(team2g - g) + " + " + Math.abs(team2b - b) + " = " + team2score;
    document.getElementById("result").innerHTML = text;
}

function show1() {
    team1r = document.getElementById("team1r").value;
    team1g = document.getElementById("team1g").value;
    team1b = document.getElementById("team1b").value;
    bg = document.getElementById("background");
    bg.style.background = "rgb(" + team1r +", " + team1g +", " + team1b + ")";
}

function show2() {
    team2r = document.getElementById("team2r").value;
    team2g = document.getElementById("team2g").value;
    team2b = document.getElementById("team2b").value;
    bg = document.getElementById("background");
    bg.style.background = "rgb(" + team2r +", " + team2g +", " + team2b + ")";
}