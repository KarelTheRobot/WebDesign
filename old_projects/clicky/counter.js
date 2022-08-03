var numberoftimesclicked = 0;

function wasclicked() {
    numberoftimesclicked = numberoftimesclicked + 1;
    var text = document.getElementById("clicked_text");
    text.innerHTML = "Times you've clicked the button: " + numberoftimesclicked;
    text.style.color = "green";
    text.style.fontSize = "30pt";
    text.style.fontWeight = "bold";
}

function turngreen() {
    var text = document.getElementById("clicked_text");
    text.style.color= "green";
}
function turnblue() {
    var text = document.getElementById("clicked_text");
    text.style.color= "green";
}